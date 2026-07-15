const faqs = [
  ["Comment utiliser le masque CCN ?", "Appliquez une couche fine le soir sur peau propre, laissez agir toute la nuit et rincez au réveil."],
  ["Le produit est-il testé sur les peaux sensibles ?", "Oui, la formule a été testée dermatologiquement pour convenir aux peaux sensibles."],
  ["Quels sont les délais de livraison ?", "Comptez 2 à 4 jours ouvrés pour la France métropolitaine."],
  ["Puis-je retourner le produit ?", "Oui, sous 30 jours si le produit n'a pas été ouvert. Voir notre politique de retours."],
  ["Le masque contient-il des parfums ?", "La formule est conçue sans parfum agressif, adaptée aux peaux sensibles."],
];

export default function FaqPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-3xl font-bold">Questions fréquentes</h1>
      <div className="mt-6 divide-y">
        {faqs.map(([q, a]) => (
          <details key={q} className="py-4">
            <summary className="cursor-pointer text-lg font-medium">{q}</summary>
            <p className="mt-2 text-neutral-600">{a}</p>
          </details>
        ))}
      </div>
    </main>
  );
}
