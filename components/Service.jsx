// pages/services.jsx
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard'; // Assurez-vous du chemin correct
import { FaTruck, FaBox, FaGlobe, FaPlane, FaShip, FaMoneyBillAlt } from 'react-icons/fa';

export default function ServicesPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <motion.h1
                className="text-5xl font-extrabold text-center mb-12 text-blue-900"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                Nos Services Complets
            </motion.h1>

            <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-16">
                Chez African Web Services, nous nous engageons à offrir une gamme complète de solutions logistiques
                pour répondre à tous vos besoins d'expédition de la Belgique vers la République Démocratique du Congo.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <ServiceCard
                    icon={FaPlane}
                    title="Fret Aérien Express"
                    description="Pour vos envois urgents, notre service de fret aérien garantit une livraison rapide et sécurisée."
                    features={[
                        "Délais de livraison courts",
                        "Suivi en temps réel par vol",
                        "Idéal pour les marchandises sensibles"
                    ]}
                />
                <ServiceCard
                    icon={FaShip}
                    title="Fret Maritime Économique"
                    description="Solution la plus rentable pour les gros volumes et les marchandises non urgentes."
                    features={[
                        "Capacité de chargement élevée (FCL/LCL)",
                        "Coûts réduits",
                        "Option groupage disponible"
                    ]}
                />
                <ServiceCard
                    icon={FaBox}
                    title="Services de Colis et Petits Paquets"
                    description="Que ce soit pour des documents importants ou des petits colis personnels, nous avons une solution adaptée."
                    features={[
                        "Envois de toutes tailles",
                        "Option porte-à-porte",
                        "Assurance disponible"
                    ]}
                />
                <ServiceCard
                    icon={FaTruck}
                    title="Logistique Intégrée"
                    description="De la collecte en Belgique à la livraison finale en RDC, nous gérons toute la chaîne logistique."
                    features={[
                        "Collecte à domicile ou en entrepôt",
                        "Gestion des formalités douanières",
                        "Livraison finale à l'adresse du destinataire"
                    ]}
                />
                <ServiceCard
                    icon={FaGlobe}
                    title="Solutions sur Mesure"
                    description="Des besoins spécifiques ? Nous élaborons des plans logistiques personnalisés pour votre entreprise."
                    features={[
                        "Consultation experte",
                        "Itinéraires optimisés",
                        "Gestion de projets complexes"
                    ]}
                />
                <ServiceCard
                    icon={FaMoneyBillAlt}
                    title="Tarification Transparente"
                    description="Des prix clairs, sans frais cachés, pour vous permettre de planifier votre budget en toute confiance."
                    features={[
                        "Devis gratuit et rapide",
                        "Pas de frais imprévus",
                        "Options d'assurance claires"
                    ]}
                />
            </div>
        </div>
    );
}