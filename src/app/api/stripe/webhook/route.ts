import { headers } from "next/headers";
import { getStripe } from "@/lib/stripe";
import { resend } from "@/lib/resend";
import { orderConfirmationHtml } from "@/emails/OrderConfirmation";

export async function POST(req: Request) {
  const body = await req.text();
  const sig = headers().get("stripe-signature")!;
  const stripe = getStripe();

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch {
    return new Response("Invalid signature", { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as any;
    const email = session.customer_details?.email;
    const amount = session.amount_total ? (session.amount_total / 100).toFixed(2) : "0.00";

    if (email) {
      await resend.emails.send({
        from: "CCN <commandes@ccn-nuit.com>",
        to: email,
        subject: "Confirmation de votre commande CCN",
        html: orderConfirmationHtml(session.id, amount),
      });
    }
  }

  return new Response("ok");
}
