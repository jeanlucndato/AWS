// pages/index.jsx
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import { FaBoxOpen, FaTruckLoading, FaPlane, FaShip, FaUserCheck, FaMapMarkedAlt } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="space-y-20 py-12 sm:py-16 bg-gray-50 font-sans">
        {/* Section Héro */}
        <HeroSection />

        {/* Section Services / Fonctionnalités Clés */}
        <section className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-center mb-14 text-gray-900 leading-tight tracking-tight">
            Nos Services <span className="text-blue-700">Clés</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            <FeatureCard
              icon={FaTruckLoading}
              title="Collecte & Emballage"
              description="Nous collectons vos marchandises en Belgique et assurons un emballage sécurisé."
            />
            <FeatureCard
              icon={FaPlane}
              title="Fret Aérien Rapide"
              description="Expéditions express par voie aérienne pour les livraisons urgentes."
            />
            <FeatureCard
              icon={FaShip}
              title="Fret Maritime Économique"
              description="Des solutions maritimes abordables pour les gros volumes de marchandises."
            />
            <FeatureCard
              icon={FaUserCheck}
              title="Dédouanement Facilité"
              description="Nous gérons toutes les formalités douanières pour une livraison sans tracas."
            />
            <FeatureCard
              icon={FaBoxOpen}
              title="Livraison Dernière Étape"
              description="Votre colis livré directement à destination en RDC, même dans les zones reculées."
            />
            <FeatureCard
              icon={FaMapMarkedAlt}
              title="Couverture Étendue"
              description="Desservant un large réseau en Belgique et des points clés en RDC."
            />
          </div>

          <div className="text-center mt-16">
            <Link href="/services" passHref>
              <motion.button
                className="bg-blue-600 text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg"
                whileHover={{ scale: 1.06, boxShadow: "0 10px 20px rgba(59,130,246,0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                Voir tous nos services
              </motion.button>
            </Link>
          </div>
        </section>

        {/* Section Appel à l'action (CTA) */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20 rounded-3xl shadow-2xl mx-6 sm:mx-auto max-w-4xl">
          <div className="container mx-auto px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-heading font-extrabold mb-5 leading-tight tracking-wide">
              Prêt à Expédier avec <span className="text-yellow-400">AWS</span> ?
            </h2>
            <p className="text-lg sm:text-xl mb-10 max-w-3xl mx-auto opacity-90">
              Obtenez un devis personnalisé dès aujourd'hui ou contactez notre équipe pour plus d'informations.
            </p>
            <Link href="/contact" passHref>
              <motion.button
                className="bg-yellow-500 text-blue-900 px-12 py-5 rounded-full text-xl font-bold hover:bg-yellow-400 transition-all duration-300 shadow-xl hover:shadow-2xl"
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
              >
                Contactez-nous
              </motion.button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
