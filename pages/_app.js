// pages/_app.jsx
import '@/styles/globals.css';
import Layout from '../components/layout/Layout';

// 1. Importe les polices de Google Fonts
// Pour le texte général (Roboto)
import { Roboto } from 'next/font/google';
// Pour les titres ou les éléments importants (Poppins)
import { Poppins } from 'next/font/google';

// 2. Configure les polices
// Police pour le corps du texte (par exemple, Roboto Regular et Bold)
const roboto = Roboto({
  weight: ['400', '700'], // Définit les poids de police que tu utiliseras
  subsets: ['latin'],
  display: 'swap', // Optimise le chargement de la police
  variable: '--font-roboto', // Crée une variable CSS pour cette police
});

// Police pour les titres (par exemple, Poppins Bold et SemiBold)
const poppins = Poppins({
  weight: ['600', '700', '800'], // Définit les poids de police que tu utiliseras
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins', // Crée une variable CSS pour cette police
});

function MyApp({ Component, pageProps }) {
  // 3. Applique les classes de police globalement
  // Utilise les variables CSS définies pour Tailwind ou ton CSS
  // Le "font-roboto" ici est une classe que Tailwind génère si tu configures tailwind.config.js
  // Cependant, même sans tailwind.config.js, la variable CSS sera disponible.
  // Nous allons plutôt l'appliquer directement via le CSS global pour simplifier.
  return (
    <div className={`${roboto.variable} ${poppins.variable}`}> {/* Applique les variables CSS à la racine */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;