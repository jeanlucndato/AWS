// pages/about.jsx
import { motion } from 'framer-motion';
import { FaShippingFast, FaCheckCircle, FaGlobeAfrica, FaUsers, FaHeart } from 'react-icons/fa';
import Image from 'next/image'; // For optimized image handling in Next.js

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-6xl font-extrabold text-blue-800 leading-tight mb-4">
          À Propos d'Afrika World Services
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Votre partenaire de confiance pour des livraisons fiables et efficaces entre la Belgique et Goma, RDC.
        </p>
      </motion.div>

      {/* Our Story Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Notre Histoire et Notre Mission
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Fondée avec la vision de combler le fossé logistique entre l'Europe et l'Afrique, Afrika World Services est née de la nécessité d'offrir des solutions de livraison fiables et transparentes. Nous avons constaté le besoin croissant d'un service de qualité entre la Belgique et la République Démocratique du Congo, en particulier pour la ville dynamique de Goma.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Notre mission est de faciliter les échanges, de soutenir les entreprises et de reconnecter les familles en assurant que chaque colis arrive à destination en toute sécurité et dans les délais impartis.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full h-80 rounded-xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/images/about-story.jpg" // You'll need to add an image here
            alt="Our Story - Logistics Operations"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </motion.div>
      </section>

      {/* Our Values Section */}
      <section className="mb-20">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-900 mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Nos Valeurs Fondamentales
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Value Card 1 */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: "0 15px 25px rgba(0,0,0,0.15)" }}
          >
            <FaCheckCircle className="text-blue-600 text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">Fiabilité</h3>
            <p className="text-gray-600">
              Nous nous engageons à livrer vos colis en toute sécurité et dans les délais convenus, à chaque fois.
            </p>
          </motion.div>

          {/* Value Card 2 */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05, boxShadow: "0 15px 25px rgba(0,0,0,0.15)" }}
          >
            <FaUsers className="text-green-600 text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">Service Client</h3>
            <p className="text-gray-600">
              Votre satisfaction est notre priorité. Nous offrons un support personnalisé et réactif.
            </p>
          </motion.div>

          {/* Value Card 3 */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            whileHover={{ scale: 1.05, boxShadow: "0 15px 25px rgba(0,0,0,0.15)" }}
          >
            <FaHeart className="text-red-600 text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">Intégrité</h3>
            <p className="text-gray-600">
              Nous opérons avec la plus grande honnêteté et transparence dans toutes nos transactions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="text-center bg-blue-50 py-16 rounded-xl shadow-inner mb-20">
        <motion.h2
          className="text-4xl font-bold text-blue-800 mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          Pourquoi Choisir Afrika World Services ?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <motion.div
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <FaGlobeAfrica className="text-blue-500 text-4xl mb-3" />
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Expertise Internationale</h3>
            <p className="text-gray-600 text-sm">Maîtrise des corridors Belgique-RDC.</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <FaShippingFast className="text-green-500 text-4xl mb-3" />
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Rapidité & Sécurité</h3>
            <p className="text-gray-600 text-sm">Vos colis livrés rapidement et intacts.</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <FaCheckCircle className="text-purple-500 text-4xl mb-3" />
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Transparence Totale</h3>
            <p className="text-gray-600 text-sm">Suivi clair et communication ouverte.</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <FaUsers className="text-orange-500 text-4xl mb-3" />
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Approche Personnelle</h3>
            <p className="text-gray-600 text-sm">Des solutions adaptées à chaque client.</p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.div
        className="text-center mt-16 bg-blue-700 text-white py-12 rounded-xl shadow-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.3 }}
      >
        <h2 className="text-4xl font-bold mb-6">Prêt à Expédier avec le Meilleur ?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Faites confiance à Afrika World Services pour tous vos besoins d'expédition de la Belgique à Goma.
          Contactez-nous pour une expérience logistique sans souci.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-700 font-bold py-4 px-10 rounded-full text-xl shadow-lg hover:bg-gray-100 transition-all duration-300"
        >
          Contactez-nous
        </a>
      </motion.div>
    </div>
  );
}