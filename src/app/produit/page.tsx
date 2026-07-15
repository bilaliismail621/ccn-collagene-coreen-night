"use client";
import Image from "next/image";
import { useState } from "react";
import ProductLD from "@/components/ProductLD";

const benefits = [
  "Hydratation intensive pendant la nuit",
  "Formule au collagène coreen, texture fondante",
  "Convient aux peaux sensibles",
  "Testé dermatologiquement",
  "Sans parfum agressif",
];

const faqs = [
  ["Quand voir les premiers résultats ?", "Dès les premières utilisations, la peau est plus souple et hydratée au réveil."],
  ["À quelle fréquence l'utiliser ?", "2 à 3 soirs par semaine, ou selon les besoins de votre peau."],
  ["Convient-il aux peaux sensibles ?", "Oui, la formule a été testée dermatologiquement pour les peaux sensibles."],
];

export default function ProductPage() {
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(false);

  async function buy() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        body: JSON.stringify({ quantity: qty }),
      });
      const { url } = await res.json();
      if (url) window.location.href = url;
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <ProductLD />
      <div className="grid gap-10 md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-blush-50">
          <Image
            src="/images/ccn-mask.jpg"
            alt="CCN Collagène Coréen Night, masque de nuit au collagène"
            fill
            priority
            className="object-cover"
          />
        </div>
        <section>
          <h1 className="text-3xl font-bold">CCN — Collagène Coréen Night</h1>
          <p className="mt-2 text-neutral-600">
            Masque de nuit au collagène, testé dermatologiquement.
          </p>
          <p className="mt-4 text-2xl font-bold">29,90 € TTC</p>

          <div className="mt-6 flex items-center gap-3">
            <label htmlFor="qty" className="text-sm font-medium">
              Quantité
            </label>
            <input
              id="qty"
              type="number"
              min={1}
              value={qty}
              onChange={(e) => setQty(Math.max(1, parseInt(e.target.value || "1")))}
              className="w-20 rounded-md border px-3 py-2"
            />
            <button
              onClick={buy}
              disabled={loading}
              className="flex-1 rounded-full bg-neutral-900 px-6 py-3 font-semibold text-white hover:bg-neutral-700 disabled:opacity-60"
            >
              {loading ? "Redirection..." : "Acheter maintenant"}
            </button>
          </div>

          <span className="mt-4 inline-block rounded-full bg-blush-100 px-4 py-1 text-xs font-semibold text-blush-500">
            Dermatologiquement testé
          </span>

          <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-neutral-700">
            {benefits.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>

          <div className="mt-8">
            <h2 className="text-lg font-semibold">Questions fréquentes</h2>
            <div className="mt-3 divide-y">
              {faqs.map(([q, a]) => (
                <details key={q} className="py-3">
                  <summary className="cursor-pointer font-medium">{q}</summary>
                  <p className="mt-2 text-sm text-neutral-600">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
