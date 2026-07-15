import { getStripe } from "@/lib/stripe";

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id: sessionId } = await searchParams;
  let session = null;
  if (sessionId) {
    try {
      session = await getStripe().checkout.sessions.retrieve(sessionId);
    } catch {
      session = null;
    }
  }

  return (
    <main className="mx-auto max-w-xl px-4 py-20 text-center">
      <h1 className="text-3xl font-bold">Merci pour votre commande !</h1>
      <p className="mt-3 text-neutral-600">
        Votre commande CCN est confirmée. Un email de confirmation vous a été envoyé.
      </p>
      {session && (
        <div className="mt-8 rounded-2xl border p-6 text-left text-sm">
          <p>
            <span className="font-semibold">Numéro de commande : </span>
            {session.id}
          </p>
          <p className="mt-2">
            <span className="font-semibold">Montant : </span>
            {session.amount_total ? (session.amount_total / 100).toFixed(2) : "-"} €
          </p>
          <p className="mt-2">
            <span className="font-semibold">Email : </span>
            {session.customer_details?.email || "-"}
          </p>
        </div>
      )}
    </main>
  );
}
