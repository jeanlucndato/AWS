// pages/services.jsx
import { motion } from 'framer-motion';
import { FaPlane, FaShip, FaBox, FaGlobeAfrica, FaRegCheckCircle, FaClipboardCheck, FaUsers, FaLightbulb } from 'react-icons/fa'; // Icons for services and features
import Navbar from '@/components/Navbar';
import Link from 'next/link';

// Data for each service offered
const serviceOfferings = [
    {
        title: "Fret Aérien Express",
        icon: FaPlane,
        description: "Pour vos envois urgents et de haute valeur, notre service de fret aérien garantit une livraison rapide et sécurisée de la Belgique à Goma.",
        features: [
            "Rapidité inégalée (7-10 jours ouvrables)",
            "Suivi en temps réel de votre vol",
            "Gestion experte des formalités douanières",
            "Idéal pour les marchandises sensibles ou périssables",
            "Priorité sur les documents et colis urgents"
        ],
        callToAction: "Demander un Devis Aérien",
        link: "/devis"
    },
    {
        title: "Fret Maritime Économique",
        icon: FaShip,
        description: "La solution la plus rentable pour les grands volumes et les expéditions moins urgentes, avec une capacité de chargement flexible.",
        features: [
            "Coût optimisé par kilogramme/mètre cube",
            "Options de conteneur complet (FCL) ou groupage (LCL)",
            "Sécurité et fiabilité pour les envois lourds",
            "Solution parfaite pour véhicules et déménagements",
            "Assistance complète tout au long du processus"
        ],
        callToAction: "Demander un Devis Maritime",
        link: "/devis"
    },
    {
        title: "Colis & Petits Paquets",
        icon: FaBox,
        description: "Envoyez vos articles personnels ou commerciaux de petite taille avec la même attention aux détails et la même efficacité.",
        features: [
            "Calcul de tarifs précis au poids et volume",
            "Options de collecte flexibles en Belgique",
            "Notifications régulières sur l'avancement du colis",
            "Idéal pour cadeaux, vêtements, électronique",
            "Emballage et manutention professionnels"
        ],
        callToAction: "Obtenir un Tarif Colis",
        link: "/devis"
    }
];

export default function ServicesPage() {
    return (
        <>
            <Navbar />

            <div className="container mx-auto px-6 py-12 sm:py-16 bg-gray-50 font-sans">
                {/* Hero Section */}
                <motion.div
                    className="text-center mb-12 sm:mb-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 sm:p-12 rounded-3xl shadow-xl mx-auto max-w-4xl" // Padding et largeur max ajustés
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    {/* Titre responsive avec Poppins (font-heading) */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold leading-tight mb-4">
                        Nos Solutions de <span className="text-yellow-300">Livraison Globales</span>
                    </h1>
                    {/* Paragraphe descriptif responsive */}
                    <p className="text-base sm:text-lg max-w-3xl mx-auto opacity-90 px-4"> {/* Padding horizontal pour mobile */}
                        Découvrez la gamme complète de nos services d'expédition, conçus pour connecter la Belgique et Goma avec efficacité, sécurité et transparence.
                    </p>
                </motion.div>

                {/* Section des Cartes de Services */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-center mb-10 sm:mb-14 text-gray-800 leading-tight">
                    Nos Prestations <span className="text-blue-700">Détaillées</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-20"> {/* Espacement responsif */}
                    {serviceOfferings.map((service, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-blue-100 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300 relative overflow-hidden group" // Padding responsif, effet hover
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
                            whileHover={{ boxShadow: "0 20px 30px rgba(0,0,0,0.18)" }}
                        >
                            {/* Effets de fond subtils pour le design */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full opacity-60 transform translate-x-1/3 -translate-y-1/3 group-hover:scale-110 transition-transform duration-300"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-50 rounded-tr-full opacity-60 transform -translate-x-1/3 translate-y-1/3 group-hover:scale-110 transition-transform duration-300"></div>

                            {/* Icône du service */}
                            <div className="p-4 sm:p-5 rounded-full bg-blue-600 text-white mb-6 border-4 border-white z-10 shadow-lg group-hover:bg-blue-700 transition-colors duration-300">
                                <service.icon className="text-4xl sm:text-5xl" /> {/* Taille d'icône responsive */}
                            </div>
                            {/* Titre du service avec Poppins */}
                            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-4">{service.title}</h2>
                            {/* Description du service */}
                            <p className="text-base text-gray-700 mb-8 flex-grow leading-relaxed">{service.description}</p>

                            {/* Liste des fonctionnalités */}
                            <ul className="text-left text-gray-700 space-y-3 w-full mb-8 text-sm sm:text-base"> {/* Taille de texte responsive pour les features */}
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <FaRegCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0 text-lg" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Bouton d'appel à l'action */}
                            <Link href={service.link} passHref>
                                <motion.button
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 sm:py-4 px-6 rounded-lg text-lg shadow-md transition-all duration-300 flex items-center justify-center"
                                    whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {service.callToAction}
                                    <FaClipboardCheck className="ml-3 text-xl" /> {/* Icône plus grande */}
                                </motion.button>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Why Choose Us / Value Proposition Section */}
                <motion.div
                    className="text-center bg-blue-50 py-12 sm:py-16 rounded-3xl shadow-inner mb-20 max-w-6xl mx-auto px-6 sm:px-8" // Padding et largeur max ajustés
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    {/* Titre Poppins pour la section des avantages */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-blue-800 mb-10 leading-tight">
                        Pourquoi Choisir <span className="text-blue-700">Afrika World Services</span> ?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                        {/* Carte d'avantage 1 */}
                        <motion.div
                            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md border border-gray-100 transform hover:translate-y-[-5px] transition-transform duration-200"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            <FaGlobeAfrica className="text-blue-500 text-4xl sm:text-5xl mb-4" /> {/* Taille d'icône responsive */}
                            <h3 className="font-heading font-bold text-lg sm:text-xl text-gray-900 mb-2">Expertise Locale & Internationale</h3>
                            <p className="text-gray-700 text-sm sm:text-base">Maîtrise parfaite des itinéraires Belgique-RDC.</p>
                        </motion.div>
                        {/* Carte d'avantage 2 */}
                        <motion.div
                            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md border border-gray-100 transform hover:translate-y-[-5px] transition-transform duration-200"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                        >
                            <FaRegCheckCircle className="text-emerald-500 text-4xl sm:text-5xl mb-4" />
                            <h3 className="font-heading font-bold text-lg sm:text-xl text-gray-900 mb-2">Fiabilité et Sécurité</h3>
                            <p className="text-gray-700 text-sm sm:text-base">Vos colis arrivent à destination en toute intégrité.</p>
                        </motion.div>
                        {/* Carte d'avantage 3 */}
                        <motion.div
                            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md border border-gray-100 transform hover:translate-y-[-5px] transition-transform duration-200"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.0 }}
                        >
                            <FaUsers className="text-purple-500 text-4xl sm:text-5xl mb-4" />
                            <h3 className="font-heading font-bold text-lg sm:text-xl text-gray-900 mb-2">Support Client Dévoué</h3>
                            <p className="text-gray-700 text-sm sm:text-base">Une équipe disponible pour toutes vos questions.</p>
                        </motion.div>
                        {/* Carte d'avantage 4 */}
                        <motion.div
                            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md border border-gray-100 transform hover:translate-y-[-5px] transition-transform duration-200"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.1 }}
                        >
                            <FaLightbulb className="text-orange-500 text-4xl sm:text-5xl mb-4" />
                            <h3 className="font-heading font-bold text-lg sm:text-xl text-gray-900 mb-2">Solutions Personnalisées</h3>
                            <p className="text-gray-700 text-sm sm:text-base">Des services adaptés à chaque besoin unique.</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Final Call to Action */}
                <motion.div
                    className="text-center mt-16 sm:mt-20 bg-blue-700 text-white py-12 sm:py-16 rounded-3xl shadow-xl mx-auto max-w-5xl px-6 sm:px-8" // Marges, padding et largeur max ajustés
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                >
                    {/* Titre responsive avec Poppins */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold mb-6 leading-tight">
                        Prêt à Expédier avec <span className="text-yellow-300">Confiance</span> ?
                    </h2>
                    {/* Paragraphe descriptif responsive */}
                    <p className="text-base sm:text-lg mb-8 sm:mb-10 max-w-3xl mx-auto opacity-95 px-4"> {/* Padding horizontal pour mobile */}
                        Quel que soit votre besoin, nous avons la solution. Contactez-nous dès aujourd'hui pour démarrer votre envoi.
                    </p>
                    <Link href="/contact" passHref>
                        <motion.button
                            className="inline-block bg-white text-blue-700 font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-full text-lg sm:text-xl shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105" // Padding et taille de texte responsive
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Parler à un Expert
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </>

    );
}