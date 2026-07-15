import Stripe from "stripe";

let stripeInstance: Stripe | null = null;

export function getStripe(): Stripe {
  if (!stripeInstance) {
    const apiKey = process.env.STRIPE_SECRET_KEY;
    if (!apiKey) {
      throw new Error(
        "STRIPE_SECRET_KEY manquant. Ajoutez-le dans les variables d'environnement Vercel."
      );
    }
    stripeInstance = new Stripe(apiKey, { apiVersion: "2024-06-20" });
  }
  return stripeInstance;
}
