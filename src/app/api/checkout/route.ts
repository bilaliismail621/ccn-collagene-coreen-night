import { NextResponse } from "next/server";
import { z } from "zod";
import { getStripe } from "@/lib/stripe";

const bodySchema = z.object({ quantity: z.number().int().min(1).max(20).default(1) });

export async function POST(req: Request) {
  let quantity = 1;
  try {
    const json = await req.json();
    quantity = bodySchema.parse(json).quantity;
  } catch {
    return NextResponse.json({ error: "Quantite invalide" }, { status: 400 });
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;
  const session = await getStripe().checkout.sessions.create({
    mode: "payment",
    line_items: [{ price: process.env.STRIPE_PRICE_ID!, quantity }],
    allow_promotion_codes: true,
    shipping_address_collection: {
      allowed_countries: ["FR", "BE", "CH", "LU", "DE", "ES", "IT", "GB", "US", "CA"],
    },
    automatic_tax: { enabled: true },
    success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/produit`,
  });

  return NextResponse.json({ url: session.url });
}
