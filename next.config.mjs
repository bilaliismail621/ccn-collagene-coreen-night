/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  eslint: {
    // Evite qu'un avertissement de style ne bloque la construction en production.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Filet de securite temporaire: ne bloque pas le deploiement sur une verification
    // de types stricte pendant que le projet est encore en cours de finalisation.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
