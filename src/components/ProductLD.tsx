export default function ProductLD() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "CCN - Collagène Coréen Night",
    image: [`${baseUrl}/images/ccn-mask.jpg`],
    brand: { "@type": "Brand", name: "CCN" },
    description:
      "Masque de nuit au collagène, testé dermatologiquement, pour peaux sensibles.",
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: "29.90",
      availability: "https://schema.org/InStock",
      url: `${baseUrl}/produit`,
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
