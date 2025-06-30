// pages/faq.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaQuestionCircle, FaShippingFast, FaDollarSign, FaUserTie, FaSyncAlt } from 'react-icons/fa'; // Added FaSyncAlt for updates
import Link from 'next/link';

// Données des FAQs, organisées par catégories
const faqData = [
    {
        category: "Généralités sur les services",
        icon: FaShippingFast,
        questions: [
            {
                question: "Quels sont les services d'expédition que vous proposez ?",
                answer: "Nous offrons des services de fret aérien express, de fret maritime économique, et de livraison de colis & petits paquets de la Belgique vers Goma, RDC. Nous proposons également des solutions logistiques intégrées et un support client dédié."
            },
            {
                question: "Quelle est la différence entre le fret aérien et le fret maritime ?",
                answer: "Le fret aérien est la solution la plus rapide (généralement 7-10 jours ouvrables) et convient aux envois urgents et de valeur. Le fret maritime est plus économique pour les gros volumes mais prend plus de temps (plusieurs semaines)."
            },
            {
                question: "Quelles sont les dimensions ou poids maximums autorisés pour les colis ?",
                answer: "Les restrictions varient selon le type de service (aérien ou maritime) et la nature de la marchandise. Veuillez nous contacter directement avec les détails de votre envoi pour obtenir des informations précises."
            }
        ]
    },
    {
        category: "Tarifs et Paiements",
        icon: FaDollarSign,
        questions: [
            {
                question: "Comment sont calculés vos tarifs ?",
                answer: "Nos tarifs sont basés sur le poids (réel ou volumétrique, le plus élevé des deux) et le type de service choisi (aérien ou maritime). Pour les envois spécifiques, un devis personnalisé est fourni pour une estimation précise."
            },
            {
                question: "Y a-t-il des frais cachés ou supplémentaires ?",
                answer: "Absolument pas. Nous nous engageons à une transparence totale. Les frais potentiels supplémentaires (droits de douane, taxes à l'arrivée, assurance optionnelle) sont clairement communiqués et expliqués avant tout envoi."
            },
            {
                question: "Quels sont les moyens de paiement acceptés ?",
                answer: "Nous acceptons les virements bancaires, et d'autres méthodes de paiement seront bientôt disponibles. Veuillez nous contacter pour les détails spécifiques."
            }
        ]
    },
    {
        category: "Suivi et Livraison",
        icon: FaSyncAlt,
        questions: [
            {
                question: "Comment puis-je suivre mon colis ?",
                answer: "Vous pouvez suivre votre colis en ligne via notre page de suivi. Il vous suffit d'entrer votre numéro de suivi unique fourni lors de l'expédition pour obtenir des mises à jour en temps réel."
            },
            {
                question: "Combien de temps prend la livraison à Goma ?",
                answer: "Pour le fret aérien, les délais sont généralement de 7 à 10 jours ouvrables. Pour le fret maritime, les délais sont plus longs et varient selon les départs. Nous vous fournirons une estimation lors de votre devis."
            },
            {
                question: "Comment se passe la livraison finale à Goma ?",
                answer: "Une fois votre colis arrivé à Goma et dédouané, notre équipe locale coordonne la livraison finale à l'adresse indiquée. Nous vous contacterons pour organiser la réception."
            }
        ]
    },
    {
        category: "Douanes et Réglementations",
        icon: FaUserTie,
        questions: [
            {
                question: "Qui est responsable des droits de douane et taxes à l'arrivée à Goma ?",
                answer: "Les droits de douane et taxes d'importation à Goma sont généralement à la charge du destinataire. Nous pouvons cependant vous conseiller et estimer ces frais."
            },
            {
                question: "Quels articles ne peuvent pas être expédiés ?",
                answer: "Certains articles sont restreints ou interdits à l'expédition (ex: armes, drogues, produits périssables sans emballage spécial, etc.). Nous vous fournirons une liste complète lors de votre demande de devis."
            },
            {
                question: "Avez-vous besoin de documents spécifiques pour l'envoi ?",
                answer: "Oui, des documents comme la facture commerciale, la liste de colisage et parfois d'autres certifications peuvent être nécessaires selon la nature et la valeur de votre envoi. Nous vous guiderons précisément."
            }
        ]
    }
];

const FAQItem = ({ question, answer, isOpen, toggleOpen }) => {
    return (
        <motion.div
            className="border-b border-gray-200 pb-4 mb-4 cursor-pointer"
            initial={false}
            animate={{ backgroundColor: isOpen ? "rgba(239, 246, 255, 1)" : "rgba(255, 255, 255, 1)" }} // bg-blue-50 vs bg-white
            transition={{ duration: 0.3 }}
            onClick={toggleOpen}
        >
            <motion.div
                className="flex justify-between items-center py-2"
                initial={false}
                animate={{ color: isOpen ? "#1D4ED8" : "#374151" }} // text-blue-700 vs text-gray-700
            >
                <h3 className="text-xl font-semibold">{question}</h3>
                <motion.span
                    initial={false}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-500"
                >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </motion.span>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
                transition={{ opacity: { duration: 0.3 }, height: { duration: 0.4 } }}
                className="overflow-hidden text-gray-700 pl-4 pr-8 text-lg leading-relaxed"
            >
                {isOpen && <p className="pt-2 pb-4">{answer}</p>}
            </motion.div>
        </motion.div>
    );
};

export default function FaqPage() {
    // État pour gérer l'ouverture/fermeture des réponses
    const [openIndex, setOpenIndex] = useState({});

    const toggleOpen = (categoryIndex, questionIndex) => {
        setOpenIndex(prev => ({
            ...prev,
            [`${categoryIndex}-${questionIndex}`]: !prev[`${categoryIndex}-${questionIndex}`]
        }));
    };

    return (
        <div className="container mx-auto px-4 py-16">
            {/* Section d'Introduction */}
            <motion.div
                className="text-center mb-16 bg-gradient-to-r from-teal-500 to-emerald-600 text-white p-12 rounded-3xl shadow-xl"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <h1 className="text-6xl font-extrabold leading-tight mb-4">
                    Vos Questions, Nos Réponses
                </h1>
                <p className="text-xl max-w-3xl mx-auto opacity-90">
                    Trouvez rapidement les informations dont vous avez besoin. Nous avons regroupé les questions les plus fréquentes pour vous offrir des réponses claires et concises.
                </p>
            </motion.div>

            {/* Catégories de FAQ */}
            <div className="max-w-4xl mx-auto">
                {faqData.map((category, catIndex) => (
                    <motion.div
                        key={catIndex}
                        className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 mb-12"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 + catIndex * 0.15 }}
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
                            <category.icon className="text-blue-600 mr-4 text-4xl" />
                            {category.category}
                        </h2>
                        <div className="space-y-6">
                            {category.questions.map((item, qIndex) => (
                                <FAQItem
                                    key={qIndex}
                                    question={item.question}
                                    answer={item.answer}
                                    isOpen={openIndex[`${catIndex}-${qIndex}`]}
                                    toggleOpen={() => toggleOpen(catIndex, qIndex)}
                                />
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Appel à l'Action Final */}
            <motion.div
                className="text-center mt-20 bg-blue-700 text-white py-16 rounded-3xl shadow-xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: faqData.length * 0.15 + 0.4 }}
            >
                <h2 className="text-5xl font-bold mb-6 leading-tight">
                    Une Question Non Répertoriée ?
                </h2>
                <p className="text-xl mb-10 max-w-3xl mx-auto opacity-95">
                    Notre équipe est là pour vous aider ! Contactez-nous directement pour toute demande spécifique ou assistance.
                </p>
                <Link href="/contact" passHref>
                    <motion.button
                        className="inline-block bg-white text-blue-700 font-bold py-4 px-12 rounded-full text-2xl shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Nous Contacter
                    </motion.button>
                </Link>
            </motion.div>
        </div>
    );
}