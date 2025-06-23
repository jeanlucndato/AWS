// pages/index.jsx
import { motion } from 'framer-motion';
import Link from 'next/link';
import HeroSection from '../components/HeroSection'; // Assurez-vous du chemin correct
import FeatureCard from '../components/FeatureCard'; // Assurez-vous du chemin correct
import { FaBoxOpen, FaTruckLoading, FaPlane, FaShip, FaUserCheck, FaMapMarkedAlt } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Section Héro */}
      <HeroSection />

      {/* Section Services / Fonctionnalités Clés */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">Nos Services Clés</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </section>

      {/* Section Appel à l'action */}
      <section className="bg-blue-800 text-white py-16 rounded-lg shadow-md">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à Expédier avec AWS ?</h2>
          <p className="text-lg mb-8 max-w-xl mx-auto">
            Obtenez un devis personnalisé dès aujourd'hui ou contactez notre équipe pour plus d'informations.
          </p>
          <Link href="/contact" passHref>
            <motion.button
              className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contactez-nous
            </motion.button>
          </Link>
        </div>
      </section>

      {/* Rappel pour l'image (à retirer en production) */}
      <div className="text-center text-gray-500 text-sm mt-4 p-4">
        <p>N'oubliez pas de placer une image nommée `kinshasa.jpg` dans le dossier `public/images/` pour la section Héro.</p>
      </div>
    </div>
  );
}