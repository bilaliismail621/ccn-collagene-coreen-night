import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-neutral-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold">CCN</p>
          <p className="mt-2 text-sm text-neutral-600">
            Collagène Coréen Night — masque de nuit testé dermatologiquement.
          </p>
        </div>
        <nav aria-label="Liens légaux" className="flex flex-col gap-2 text-sm">
          <Link href="/cgv">CGV</Link>
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/politique-de-retours">Politique de retours</Link>
        </nav>
        <div>
          <p className="text-sm font-semibold">Restez informé·e</p>
          <form className="mt-2 flex gap-2">
            <label htmlFor="newsletter-email" className="sr-only">Adresse email</label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Votre email"
              className="w-full rounded-md border px-3 py-2 text-sm"
            />
            <button type="submit" className="rounded-md bg-neutral-900 px-4 py-2 text-sm text-white">
              OK
            </button>
          </form>
        </div>
      </div>
      <p className="border-t py-4 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} CCN - Collagène Coréen Night. Tous droits réservés.
      </p>
    </footer>
  );
}
