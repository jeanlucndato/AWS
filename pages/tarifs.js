// pages/tarifs.jsx
import { motion } from 'framer-motion';
import { FaPlane, FaShip, FaBox, FaMoneyBillWave, FaCheckCircle, FaQuestionCircle, FaQuoteRight } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function TarifsPage() {
    const services = [
        {
            name: "Fret Aérien Express",
            icon: FaPlane,
            description: "La rapidité est votre priorité. Idéal pour les envois urgents et de petite à moyenne taille.",
            priceBasis: "À partir de 12.50€ / Kg",
            features: [
                "Livraison ultra-rapide (7-10 jours ouvrables)",
                "Suivi en temps réel par vol",
                "Gestion des formalités douanières simplifiée",
                "Priorité sur les marchandises sensibles",
            ],
            bestFor: "Documents importants, échantillons, produits périssables, urgences."
        },
        {
            name: "Fret Maritime Économique",
            icon: FaShip,
            description: "La solution la plus rentable pour les gros volumes et les envois moins urgents.",
            priceBasis: "Devis personnalisé (par m³ ou conteneur)",
            features: [
                "Coût par kg/m³ le plus bas",
                "Capacité de chargement élevée (FCL / LCL)",
                "Gestion complète du fret maritime",
                "Options de groupage flexibles",
            ],
            bestFor: "Marchandises volumineuses, véhicules, déménagements, équipements lourds."
        },
        {
            name: "Colis & Petits Paquets",
            icon: FaBox,
            description: "Pour tous vos envois personnels ou commerciaux de petite taille, traités avec soin et efficacité.",
            priceBasis: "À partir de 5.00€ / Kg",
            features: [
                "Calcul précis au poids/volume",
                "Services de collecte flexibles",
                "Assurance optionnelle disponible",
                "Notifications d'avancement du colis",
            ],
            bestFor: "Vêtements, électronique, cadeaux, échantillons, articles personnels."
        }
    ];

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-6 py-12 sm:py-20 bg-gray-50 font-sans">
                <motion.div
                    className="text-center mb-16 bg-gradient-to-r from-purple-600 to-indigo-700 text-white p-10 sm:p-14 rounded-3xl shadow-2xl mx-auto max-w-5xl"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold leading-tight mb-4">
                        Vos Envois, Nos <span className="text-yellow-300">Tarifs.</span> Simples et Clairs.
                    </h1>
                    <p className="text-lg sm:text-xl max-w-3xl mx-auto opacity-90">
                        Chez Afrika World Services, la transparence est notre engagement. Découvrez nos solutions de livraison de la Belgique à Goma, conçues pour s'adapter à chaque besoin et chaque budget, sans aucune surprise.
                    </p>
                </motion.div>

                <motion.div
                    className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 mb-20 text-center max-w-5xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <FaMoneyBillWave className="text-emerald-500 text-6xl mb-6 mx-auto" />
                    <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
                        Comprendre Nos Tarifs
                    </h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        Nos tarifs sont établis sur la base du poids volumétrique (le plus élevé entre le poids réel et le poids calculé par le volume) de votre colis et du mode de transport choisi. Pour les envois spécifiques, un devis personnalisé garantit la précision.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-8 rounded-3xl shadow-xl border border-blue-100 flex flex-col items-center text-center hover:scale-[1.03] transition-all duration-300 relative overflow-hidden group"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 + index * 0.15 }}
                        >
                            <div className="absolute top-0 left-0 w-full h-20 bg-blue-500 opacity-10 -skew-y-3 rounded-t-3xl group-hover:opacity-20 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 right-0 w-full h-20 bg-blue-500 opacity-10 skew-y-3 rounded-b-3xl group-hover:opacity-20 transition-opacity duration-300"></div>

                            <div className="p-5 rounded-full bg-white text-blue-700 mb-6 border-4 border-blue-200 shadow-lg">
                                <service.icon className="text-5xl" />
                            </div>

                            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">{service.name}</h3>
                            <p className="text-gray-700 mb-6 flex-grow text-base leading-relaxed">{service.description}</p>

                            <div className="text-blue-600 text-3xl font-extrabold mb-6">
                                {service.priceBasis}
                            </div>

                            <ul className="text-left text-gray-700 space-y-3 w-full mb-8 text-sm">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <FaCheckCircle className="text-green-500 mr-3 mt-1" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="bg-blue-50 text-gray-800 p-4 rounded-lg w-full mb-8 text-sm border border-blue-100">
                                <p className="font-heading font-semibold mb-2 text-blue-800">Ce service est idéal pour :</p>
                                <p>{service.bestFor}</p>
                            </div>

                            <Link href="/contact" passHref>
                                <motion.button
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-md transition-all duration-300"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Obtenir un Devis Gratuit <FaQuoteRight className="ml-2 text-xl" />
                                </motion.button>
                            </Link>
                        </motion.div>
                    ))}
                </div>



                <motion.div
                    className="text-center mt-20 bg-blue-700 text-white py-16 rounded-3xl shadow-xl max-w-5xl mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <h2 className="text-4xl font-heading font-extrabold mb-6">
                        Prêt à <span className="text-yellow-300">Expédier</span> ?
                    </h2>
                    <p className="text-lg mb-10 max-w-3xl mx-auto">
                        Obtenez une estimation précise pour votre envoi unique. Notre équipe est là pour vous offrir un service sur mesure et sans tracas.
                    </p>
                    <Link href="/contact" passHref>
                        <motion.button
                            className="bg-white text-blue-700 font-bold py-4 px-12 rounded-full text-xl shadow-lg hover:bg-gray-100 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Demander un Devis Maintenant
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </>
    );
}
