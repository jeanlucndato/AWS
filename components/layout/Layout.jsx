// components/layout/Layout.jsx
import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head'; // Pour la balise <head>

function Layout({ children }) {
    return (
        <>
            <Head>
                <title>African Web Services - Shipping Belgique vers RDC</title>
                <meta name="description" content="Votre partenaire de confiance pour des services de shipping rapides et sécurisés de la Belgique vers la République Démocratique du Congo." />
                <link rel="icon" href="/favicon.ico" /> {/* Assurez-vous d'avoir un favicon dans public/ */}
            </Head>
            <div className="flex flex-col min-h-screen bg-gray-50">
                <Navbar />
                <main className="flex-grow container mx-auto px-4 py-8">
                    {children}
                </main>
                <Footer />
            </div>
        </>
    );
}
export default Layout;