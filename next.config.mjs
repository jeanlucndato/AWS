/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['fr', 'en', 'de'], // Vos trois langues supportées
    defaultLocale: 'fr', // La langue par défaut reste le français
  },
};

export default nextConfig;

