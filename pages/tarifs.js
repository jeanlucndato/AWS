// pages/tarifs.jsx
import { motion } from 'framer-motion';
import { FaPlane, FaShip, FaBox, FaMoneyBillWave, FaCheckCircle, FaQuestionCircle, FaQuoteRight } from 'react-icons/fa'; // Added FaQuoteRight
import Link from 'next/link';

export default function TarifsPage() {
    // Les détails de service sont définis ici. Dans une application réelle,
    // ces données pourraient provenir d'une base de données ou d'une API.
    const services = [
        {
            name: "Fret Aérien Express",
            icon: FaPlane,
            description: "La rapidité est votre priorité. Idéal pour les envois urgents et de petite à moyenne taille.",
            priceBasis: "À partir de 12.50€ / Kg", // Exemple de prix
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
            priceBasis: "À partir de 5.00€ / Kg", // Exemple de prix
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
        <div className="container mx-auto px-4 py-16">
            {/* Section d'Introduction */}
            <motion.div
                className="text-center mb-16 bg-gradient-to-r from-blue-50 to-indigo-50 p-12 rounded-3xl shadow-xl"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-6xl font-extrabold text-blue-800 leading-tight mb-4">
                    Vos Envois, Nos Tarifs. Simples et Clairs.
                </h1>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                    Chez **Afrika World Services**, la transparence est notre engagement. Découvrez nos solutions de livraison de la Belgique à Goma, conçues pour s'adapter à chaque besoin et chaque budget, sans aucune surprise.
                </p>
            </motion.div>

            {/* Explication du Modèle Tarifaire */}
            <motion.div
                className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 mb-20 text-center max-w-5xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <FaMoneyBillWave className="text-emerald-500 text-6xl mb-6 mx-auto" />
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Comprendre Nos Tarifs
                </h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                    Nos tarifs sont établis sur la base du **poids volumétrique** (le plus élevé entre le poids réel et le poids calculé par le volume) de votre colis et du **mode de transport** choisi. Pour les envois spécifiques, un devis personnalisé garantit la précision.
                </p>
            </motion.div>

            {/* Cartes de Tarification des Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="bg-white p-8 rounded-3xl shadow-2xl border border-blue-100 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 + index * 0.15 }}
                        whileHover={{ boxShadow: "0 20px 30px rgba(0,0,0,0.18)" }}
                    >
                        {/* Background wave / design element */}
                        <div className="absolute top-0 left-0 w-full h-24 bg-blue-500 transform -skew-y-3 origin-top-left -z-10 rounded-t-3xl"></div>
                        <div className="absolute bottom-0 right-0 w-full h-24 bg-blue-500 transform skew-y-3 origin-bottom-right -z-10 rounded-b-3xl"></div>


                        <div className="p-4 rounded-full bg-white text-blue-700 mb-6 border-4 border-blue-200 z-10">
                            <service.icon className="text-5xl" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-3">{service.name}</h3>
                        <p className="text-gray-700 mb-6 flex-grow leading-relaxed">{service.description}</p>

                        <div className="text-blue-600 text-4xl font-extrabold mb-6 animate-pulse">
                            {service.priceBasis}
                        </div>

                        <ul className="text-left text-gray-700 space-y-3 w-full mb-8 list-none">
                            {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start">
                                    <FaCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="bg-gray-50 text-gray-800 p-4 rounded-lg w-full mb-8 text-base">
                            <p className="font-semibold mb-2">Ce service est idéal pour :</p>
                            <p>{service.bestFor}</p>
                        </div>

                        <Link href="/contact" passHref>
                            <motion.button
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg text-lg shadow-md transition-all duration-300 flex items-center justify-center"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Obtenir un Devis Gratuit
                                <FaQuoteRight className="ml-3" />
                            </motion.button>
                        </Link>
                    </motion.div>
                ))}
            </div>

            {/* Section sur les Frais Additionnels */}
            <motion.div
                className="bg-gradient-to-br from-indigo-500 to-blue-600 text-white p-12 rounded-3xl shadow-xl max-w-5xl mx-auto"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
            >
                <h2 className="text-4xl font-bold text-center mb-10">
                    Important : Ce qu'il Faut Savoir
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Item 1: Douanes */}
                    <div className="flex items-start">
                        <FaQuestionCircle className="text-emerald-300 text-3xl mr-4 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-2xl font-semibold mb-2">Droits de Douane & Taxes</h3>
                            <p className="text-lg leading-relaxed opacity-90">
                                Les droits de douane et taxes d'importation à Goma sont généralement à la charge du destinataire. Nous vous guiderons et pourrons fournir des estimations pour éviter toute surprise.
                            </p>
                        </div>
                    </div>
                    {/* Item 2: Assurance */}
                    <div className="flex items-start">
                        <FaQuestionCircle className="text-emerald-300 text-3xl mr-4 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-2xl font-semibold mb-2">Assurance Colis</h3>
                            <p className="text-lg leading-relaxed opacity-90">
                                Protégez vos biens ! Une assurance complémentaire est fortement recommandée pour une tranquillité d'esprit totale. Elle est souscriptible au moment de l'envoi.
                            </p>
                        </div>
                    </div>
                    {/* Item 3: Frais Spécifiques */}
                    <div className="flex items-start">
                        <FaQuestionCircle className="text-emerald-300 text-3xl mr-4 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-2xl font-semibold mb-2">Frais Spécifiques</h3>
                            <p className="text-lg leading-relaxed opacity-90">
                                Des frais additionnels peuvent s'appliquer pour les marchandises dangereuses, les articles surdimensionnés ou les exigences de livraison particulières. Nous vous en informerons toujours à l'avance.
                            </p>
                        </div>
                    </div>
                    {/* Item 4: Devis Personnalisé */}
                    <div className="flex items-start">
                        <FaQuestionCircle className="text-emerald-300 text-3xl mr-4 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-2xl font-semibold mb-2">Devis Personnalisé</h3>
                            <p className="text-lg leading-relaxed opacity-90">
                                Pour les envois complexes ou les demandes spécifiques, un devis personnalisé est la meilleure solution pour obtenir le prix le plus précis et adapté.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Appel à l'Action Final */}
            <motion.div
                className="text-center mt-20 bg-blue-700 text-white py-16 rounded-3xl shadow-xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
            >
                <h2 className="text-5xl font-bold mb-6 leading-tight">
                    Prêt à Expédier ?
                </h2>
                <p className="text-xl mb-10 max-w-3xl mx-auto opacity-95">
                    Obtenez une estimation précise pour votre envoi unique. Notre équipe est là pour vous offrir un service sur mesure et sans tracas.
                </p>
                <Link href="/contact" passHref>
                    <motion.button
                        className="inline-block bg-white text-blue-700 font-bold py-4 px-12 rounded-full text-2xl shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Demander un Devis Maintenant
                    </motion.button>
                </Link>
            </motion.div>
        </div>
    );
}