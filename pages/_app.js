// pages/_app.jsx
import '@/styles/globals.css'; // Assurez-vous que ce chemin est correct
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }) {
  // Ce layout enveloppera toutes vos pages
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;