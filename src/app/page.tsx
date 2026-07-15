import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-blush-500">Beauté coréenne</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
            CCN — Collagène Coréen Night
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            Le masque de nuit qui hydrate et repulpe votre peau pendant que vous dormez.
            Testé dermatologiquement, formulé pour les peaux sensibles.
          </p>
          <Link
            href="/produit"
            className="mt-8 inline-block rounded-full bg-neutral-900 px-8 py-4 text-sm font-semibold text-white hover:bg-neutral-700"
          >
            Découvrir le produit
          </Link>
        </div>
        <div className="relative aspect-square overflow-hidden rounded-3xl bg-blush-50">
          <Image
            src="/images/ccn-mask.jpg"
            alt="CCN Collagène Coréen Night, masque de nuit"
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-neutral-50 py-14">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 text-center md:grid-cols-3">
          {[
            ["Hydratation intense", "Une action nocturne pour une peau visiblement repulpée au réveil."],
            ["Testé dermatologiquement", "Formule conçue et vérifiée pour les peaux sensibles."],
            ["Made in Korea", "Le savoir-faire coréen de la routine de nuit en 10 étapes."],
          ].map(([title, text]) => (
            <div key={title}>
              <p className="text-lg font-semibold">{title}</p>
              <p className="mt-2 text-sm text-neutral-600">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
