import React from 'react';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';

function TermesConditions() {
    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const textVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <>
            <Navbar />
            <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 md:p-12">
                    <motion.h1
                        className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 border-b-4 border-yellow-400 pb-2"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1, transition: { duration: 0.7, delay: 0.2 } }}
                    >
                        Nos Engagements et Vos Responsabilités
                    </motion.h1>

                    <motion.p
                        className="text-gray-600 mb-8 text-lg"
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                    >
                        Bienvenue chez **AWS** ! Pour que notre collaboration soit un succès, nous avons mis en place quelques règles simples. En utilisant nos services, vous acceptez ces conditions. Pas de jargon compliqué, juste un accord clair et juste pour protéger chacun.
                    </motion.p>

                    <div className="space-y-12">
                        {/* Section 1 */}
                        <motion.section
                            variants={sectionVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
                                1. Nos Services : Simples et Efficaces
                            </h2>
                            <p className="text-gray-700">
                                Nous nous engageons à prendre en charge l'import-export de vos colis entre la Belgique et Goma, avec le plus grand soin. Notre service inclut le transport, le suivi et la livraison sécurisée. Nous faisons tout pour que vos colis arrivent à destination dans les meilleurs délais.
                            </p>
                        </motion.section>

                        {/* Section 2 */}
                        <motion.section
                            variants={sectionVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
                                2. Vos Responsabilités : Un Partenariat Basé sur la Confiance
                            </h2>
                            <p className="text-gray-700">
                                Pour que tout se passe bien, il est essentiel que vous fournissiez des informations exactes sur vos colis (contenu, poids, adresses). Assurez-vous que les articles envoyés sont conformes à la loi et ne sont pas considérés comme dangereux ou illégaux.
                            </p>
                        </motion.section>

                        {/* Section 3 */}
                        <motion.section
                            variants={sectionVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
                                3. Paiements et Tarifs : Zéro Surprise
                            </h2>
                            <p className="text-gray-700">
                                Nos tarifs sont clairs et détaillés sur notre site. Le paiement doit être effectué avant l'expédition du colis. Toutes les informations relatives aux coûts et aux méthodes de paiement vous seront communiquées de manière transparente.
                            </p>
                        </motion.section>

                        {/* Section 4 */}
                        <motion.section
                            variants={sectionVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
                                4. Limitations de Responsabilité : La Clarté Avant Tout
                            </h2>
                            <p className="text-gray-700">
                                Nous prenons le plus grand soin de vos colis, mais nous ne pouvons pas être tenus responsables des retards ou des pertes causés par des circonstances imprévisibles (force majeure, douanes, etc.). En cas de dommage, notre responsabilité est limitée au montant de l'indemnisation prévue par nos conditions de service.
                            </p>
                        </motion.section>

                        {/* Section 5 */}
                        <motion.section
                            variants={sectionVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
                                5. Modifications : Un Service en Constante Évolution
                            </h2>
                            <p className="text-gray-700">
                                Nous nous réservons le droit de mettre à jour ces termes pour améliorer nos services. Nous vous encourageons à les consulter régulièrement. Les modifications ne prendront effet qu'après leur publication sur notre site.
                            </p>
                        </motion.section>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TermesConditions;