// pages/index.jsx
import { motion } from 'framer-motion';
import Link from 'next/link';
// Assurez-vous que ces chemins sont corrects, ils semblent l'être.
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import { FaBoxOpen, FaTruckLoading, FaPlane, FaShip, FaUserCheck, FaMapMarkedAlt } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <Navbar />

        // Utilise un padding vertical plus généreux et une couleur de fond subtile pour le conteneur principal
      <div className="space-y-16 py-8 sm:py-12 bg-gray-50"> {/* Augmentation du space-y et padding global */}
        {/* Section Héro - Supposée être déjà stylisée dans HeroSection.jsx */}
        <HeroSection />

        {/* Section Services / Fonctionnalités Clés */}
        <section className="container mx-auto px-6 sm:px-8 lg:px-10"> {/* Padding horizontal plus consistent */}
          {/* Titre de section plus impactant et responsif */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-center mb-10 sm:mb-12 text-gray-800 leading-tight"> {/* Font, taille, poids, et hauteur de ligne */}
            Nos Services <span className="text-blue-700">Clés</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"> {/* Espacement entre les cartes */}
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
          {/* Bouton pour voir tous les services, si pertinent */}
          <div className="text-center mt-12 sm:mt-16">
            <Link href="/services" passHref>
              <motion.button
                className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                whileTap={{ scale: 0.95 }}
              >
                Voir tous nos services
              </motion.button>
            </Link>
          </div>
        </section>

        {/* Section Appel à l'action (CTA) */}
        {/* Ajout d'un fond plus doux avec une bordure arrondie et une ombre */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16 sm:py-20 rounded-xl shadow-2xl mx-4 sm:mx-auto max-w-4xl"> {/* Bordures et ombre améliorées */}
          <div className="container mx-auto px-6 text-center"> {/* Padding horizontal consistent */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold mb-4 sm:mb-6 leading-tight"> {/* Font, taille, poids, et hauteur de ligne */}
              Prêt à Expédier avec <span className="text-yellow-400">AWS</span> ?
            </h2>
            <p className="text-base sm:text-lg mb-8 max-w-2xl mx-auto opacity-90"> {/* Taille de police, opacité */}
              Obtenez un devis personnalisé dès aujourd'hui ou contactez notre équipe pour plus d'informations.
            </p>
            <Link href="/contact" passHref>
              <motion.button
                className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-full text-lg sm:text-xl font-bold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contactez-nous
              </motion.button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}