/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  eslint: {
    // Evite qu'un avertissement de style (ex: apostrophes non echappees dans le texte)
    // ne bloque la construction du site en production.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
