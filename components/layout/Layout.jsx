// components/layout/Layout.jsx
// import Navbar from '../Navbar';
import Footer from './Footer';
import Head from 'next/head';

function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Afrika World Services - Expédition Belgique vers RDC</title>
                <meta name="description" content="Votre partenaire de confiance pour des services de shipping rapides et sécurisés de la Belgique vers la République Démocratique du Congo." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex flex-col min-h-screen bg-gray-50">
                {/* <Navbar /> */}
                {/* Ensure main content is responsive and has appropriate vertical padding */}
                {/* <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"> */}
                <main className="">
                    {children}
                </main>
                <Footer />
            </div>
        </>
    );
}
export default Layout;