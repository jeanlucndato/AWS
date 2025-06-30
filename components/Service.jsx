// pages/services.jsx
import { motion } from 'framer-motion';
import { FaPlane, FaShip, FaBox, FaTruck, FaGlobe, FaHandshake } from 'react-icons/fa';
import Image from 'next/image';
import dynamic from 'next/dynamic'; // For client-side rendering if ServiceCard has browser-specific code

// Dynamically import ServiceCard to ensure it's rendered on the client-side
// This helps prevent 'ReferenceError: Image is not defined' or similar SSR issues
const ServiceCard = dynamic(() => import('../components/ServiceCard'), { ssr: false });

export default function ServicesPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <motion.h1
                className="text-6xl font-extrabold text-center mb-8 text-blue-800 leading-tight"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                Vos Colis, Notre Engagement.
            </motion.h1>

            <motion.p
                className="text-center text-xl text-gray-700 max-w-4xl mx-auto mb-16 px-4"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                Chez **Afrika World Services**, nous sommes le pont entre la Belgique et Goma. Nous offrons une gamme complète de solutions logistiques conçues pour acheminer vos biens en toute sécurité et efficacité.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {/* Service 1: Fret Aérien Express */}
                <ServiceCard
                    icon={FaPlane}
                    title="Fret Aérien Express"
                    description="La solution la plus rapide pour vos envois urgents de la Belgique vers Goma. Vos colis prennent leur envol en toute priorité."
                    features={[
                        "Délais de livraison ultra-courts",
                        "Suivi aérien en temps réel",
                        "Sécurité maximale pour marchandises sensibles",
                        "Départs réguliers"
                    ]}
                    colorClass="text-purple-600"
                />

                {/* Service 2: Fret Maritime Économique */}
                <ServiceCard
                    icon={FaShip}
                    title="Fret Maritime Économique"
                    description="Idéal pour les grands volumes et les envois non urgents. Une solution fiable et économique par voie maritime."
                    features={[
                        "Optimisé pour les gros volumes (FCL/LCL)",
                        "Coûts réduits et prévisibles",
                        "Options de groupage flexibles",
                        "Couverture globale"
                    ]}
                    colorClass="text-green-600"
                />

                {/* Service 3: Colis & Petits Paquets */}
                <ServiceCard
                    icon={FaBox}
                    title="Colis & Petits Paquets"
                    description="Qu'il s'agisse de documents importants ou de cadeaux, nous traitons chaque petit envoi avec le plus grand soin."
                    features={[
                        "Pour toutes tailles et poids",
                        "Service porte-à-porte disponible",
                        "Emballage sécurisé et adapté",
                        "Notifications d'avancement"
                    ]}
                    colorClass="text-orange-600"
                />

                {/* Service 4: Logistique Intégrée */}
                <ServiceCard
                    icon={FaTruck}
                    title="Logistique Intégrée"
                    description="De la collecte à votre porte en Belgique jusqu'à la livraison finale à Goma, nous gérons toute la chaîne logistique."
                    features={[
                        "Collecte à domicile ou en entrepôt",
                        "Gestion complète des formalités douanières",
                        "Livraison finale à destination",
                        "Coordination fluide"
                    ]}
                    colorClass="text-red-600"
                />

                {/* Service 5: Solutions sur Mesure */}
                <ServiceCard
                    icon={FaGlobe}
                    title="Solutions sur Mesure"
                    description="Vos besoins sont uniques ? Nous créons des plans logistiques personnalisés, parfaitement adaptés à votre activité."
                    features={[
                        "Consultation et analyse expertes",
                        "Itinéraires optimisés sur mesure",
                        "Gestion de projets complexes",
                        "Flexibilité inégalée"
                    ]}
                    colorClass="text-cyan-600"
                />

                {/* Service 6: Support Client Dévoué */}
                <ServiceCard
                    icon={FaHandshake}
                    title="Support Client Dévoué"
                    description="Notre équipe est à votre écoute pour vous accompagner à chaque étape, de la prise de commande à la livraison."
                    features={[
                        "Assistance personnalisée 7j/7",
                        "Réponses rapides et claires",
                        "Conseils d'experts en logistique",
                        "Satisfaction garantie"
                    ]}
                    colorClass="text-indigo-600"
                />
            </div>

            <motion.div
                className="text-center mt-16"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
            >
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Prêt à Expédier avec Confiance ?</h2>
                <p className="text-lg text-gray-600 mb-6">Contactez-nous dès aujourd'hui pour obtenir un devis gratuit et découvrir comment nous pouvons simplifier vos envois.</p>
                <a
                    href="/contact"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                    Demander un Devis
                </a>
            </motion.div>
        </div>
    );
}