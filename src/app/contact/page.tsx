export default function ContactPage() {
  return (
    <main className="mx-auto max-w-xl px-4 py-14">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-2 text-neutral-600">Une question sur CCN - Collagène Coréen Night ? Écrivez-nous.</p>
      <form className="mt-6 space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Nom</label>
          <input id="name" name="name" className="mt-1 w-full rounded-md border px-3 py-2" required />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input id="email" type="email" name="email" className="mt-1 w-full rounded-md border px-3 py-2" required />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">Message</label>
          <textarea id="message" name="message" rows={5} className="mt-1 w-full rounded-md border px-3 py-2" required />
        </div>
        <button type="submit" className="rounded-full bg-neutral-900 px-6 py-3 font-semibold text-white">
          Envoyer
        </button>
      </form>
    </main>
  );
}
