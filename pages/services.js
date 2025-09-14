// pages/services.jsx
import { motion } from 'framer-motion';
import { FaPlane, FaShip, FaBox, FaGlobeAfrica, FaRegCheckCircle, FaClipboardCheck, FaUsers, FaLightbulb } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

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

            <div className="container mx-auto px-6 py-12 sm:py-16 bg-gray-50 font-sans min-h-screen">
                {/* Hero Section */}
                <motion.div
                    className="text-center mb-14 sm:mb-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-10 sm:p-14 rounded-3xl shadow-xl mx-auto max-w-4xl font-heading"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
                        Nos Solutions de <span className="text-yellow-300">Livraison Globales</span>
                    </h1>
                    <p className="text-base sm:text-lg max-w-3xl mx-auto opacity-90 px-4">
                        Découvrez la gamme complète de nos services d'expédition, conçus pour connecter la Belgique et Goma avec efficacité, sécurité et transparence.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-center mb-12 sm:mb-16 text-gray-800 leading-tight">
                    Nos Prestations <span className="text-blue-700">Détaillées</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-24">
                    {serviceOfferings.map((service, idx) => (
                        <motion.div
                            key={idx}
                            className="relative bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-blue-100 flex flex-col items-center text-center group hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 + idx * 0.15 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            {/* Decorative backgrounds */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full opacity-60 transform translate-x-1/3 -translate-y-1/3 group-hover:scale-110 transition-transform duration-300 pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-50 rounded-tr-full opacity-60 transform -translate-x-1/3 translate-y-1/3 group-hover:scale-110 transition-transform duration-300 pointer-events-none"></div>

                            {/* Icon */}
                            <div className="p-4 sm:p-5 rounded-full bg-blue-600 text-white mb-6 border-4 border-white z-10 shadow-lg group-hover:bg-blue-700 transition-colors duration-300">
                                <service.icon className="text-4xl sm:text-5xl" />
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-4">{service.title}</h3>

                            {/* Description */}
                            <p className="text-gray-700 mb-8 flex-grow leading-relaxed text-base sm:text-lg">{service.description}</p>

                            {/* Features list */}
                            <ul className="text-left text-gray-700 space-y-3 w-full mb-8 text-sm sm:text-base">
                                {service.features.map((feat, i) => (
                                    <li key={i} className="flex items-start">
                                        <FaRegCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0 text-lg" />
                                        <span>{feat}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <Link href={service.link} passHref>
                                <motion.button
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 sm:py-4 px-6 rounded-lg text-lg shadow-md flex items-center justify-center transition-transform duration-300"
                                    whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {service.callToAction}
                                    <FaClipboardCheck className="ml-3 text-xl" />
                                </motion.button>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Value Proposition */}
                <motion.section
                    className="text-center bg-blue-50 py-12 sm:py-16 rounded-3xl shadow-inner mb-24 max-w-6xl mx-auto px-6 sm:px-8"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-blue-800 mb-12 leading-tight">
                        Pourquoi Choisir <span className="text-blue-700">Afrika World Services</span> ?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                        {[
                            {
                                icon: FaGlobeAfrica,
                                title: "Expertise Locale & Internationale",
                                desc: "Maîtrise parfaite des itinéraires Belgique-RDC."
                            },
                            {
                                icon: FaRegCheckCircle,
                                title: "Fiabilité et Sécurité",
                                desc: "Vos colis arrivent à destination en toute intégrité."
                            },
                            {
                                icon: FaUsers,
                                title: "Support Client Dévoué",
                                desc: "Une équipe disponible pour toutes vos questions."
                            },
                            {
                                icon: FaLightbulb,
                                title: "Solutions Personnalisées",
                                desc: "Des services adaptés à chaque besoin unique."
                            }
                        ].map(({ icon: Icon, title, desc }, i) => (
                            <motion.div
                                key={i}
                                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:-translate-y-1 transition-transform duration-200"
                                initial={{ opacity: 0, scale: 0.85 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                            >
                                <Icon className="text-4xl sm:text-5xl mb-4 text-blue-600" />
                                <h3 className="font-heading font-bold text-lg sm:text-xl text-gray-900 mb-2">{title}</h3>
                                <p className="text-gray-700 text-sm sm:text-base">{desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Final CTA */}
                <motion.div
                    className="text-center mt-16 sm:mt-20 bg-blue-700 text-white py-14 sm:py-16 rounded-3xl shadow-xl mx-auto max-w-5xl px-6 sm:px-8 font-heading"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                        Prêt à Expédier avec <span className="text-yellow-300">Confiance</span> ?
                    </h2>
                    <p className="text-base sm:text-lg mb-8 sm:mb-10 max-w-3xl mx-auto opacity-95 px-4">
                        Quel que soit votre besoin, nous avons la solution. Contactez-nous dès aujourd'hui pour démarrer votre envoi.
                    </p>
                    <Link href="/contact" passHref>
                        <motion.button
                            className="inline-block bg-white text-blue-700 font-bold py-3 sm:py-4 px-10 sm:px-12 rounded-full text-lg sm:text-xl shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
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
