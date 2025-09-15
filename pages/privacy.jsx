import React from 'react';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';

function PolitiqueConfidentialite() {
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const listVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const listItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <>
            <Navbar />
            <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 md:p-12">
                    <motion.h1
                        className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 border-b-4 border-yellow-400 pb-2"
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                    >
                        Votre Confidentialité, Notre Engagement
                    </motion.h1>
                    <motion.p
                        className="text-gray-600 mb-8 text-lg"
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                    >
                        Chez <span className="font-bold text-blue-800">AWS</span>, votre confiance est notre plus grande priorité. Nous souhaitons vous expliquer de manière simple et transparente comment nous protégeons vos données. Après tout, vos informations personnelles sont tout aussi précieuses que les colis que nous expédions !
                    </motion.p>

                    <div className="space-y-10">
                        <motion.section
                            initial="hidden"
                            animate="visible"
                            variants={textVariants}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
                                1. Ce que nous collectons, et pourquoi
                            </h2>
                            <p className="text-gray-700 mb-4">
                                Pour que votre colis arrive à bon port, nous collectons des informations essentielles. Chaque donnée a un but précis :
                            </p>
                            <motion.ul
                                className="list-disc list-inside space-y-2 text-gray-700"
                                initial="hidden"
                                animate="visible"
                                variants={listVariants}
                            >
                                <motion.li variants={listItemVariants}><span className="font-semibold text-blue-900">Vos coordonnées</span> : Nom, adresse et numéro de téléphone. Indispensables pour le suivi et la livraison, c'est comme la carte d'identité de votre colis.</motion.li>
                                <motion.li variants={listItemVariants}><span className="font-semibold text-blue-900">Détails de vos envois</span> : Le contenu, le poids et les adresses de destination. Cela nous permet de calculer le tarif et de nous assurer que tout est en ordre pour le voyage de votre marchandise.</motion.li>
                                <motion.li variants={listItemVariants}><span className="font-semibold text-blue-900">Infos techniques (les cookies)</span> : Nous utilisons des cookies pour optimiser votre navigation sur notre site. Ils nous aident à améliorer l'expérience utilisateur et à repérer d'éventuels bugs. C'est un peu comme une boussole pour notre site.</motion.li>
                            </motion.ul>
                        </motion.section>

                        <motion.section
                            initial="hidden"
                            animate="visible"
                            variants={textVariants}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
                                2. Une utilisation simple et transparente
                            </h2>
                            <p className="text-gray-700">
                                Nous utilisons vos informations uniquement pour vous offrir le meilleur service possible. Que ce soit pour vous tenir au courant de l'avancement de votre envoi, répondre à vos questions ou pour garantir la sécurité de vos données, tout est fait dans votre intérêt.
                            </p>
                        </motion.section>

                        <motion.section
                            initial="hidden"
                            animate="visible"
                            variants={textVariants}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
                                3. Nous ne partageons que pour la bonne cause
                            </h2>
                            <p className="text-gray-700">
                                Vos données ne sont ni vendues, ni louées, jamais ! Nous les partageons uniquement avec des partenaires de confiance comme <span className="font-semibold text-orange-500">Mangonets</span>, quand c'est absolument nécessaire pour que votre livraison soit un succès.
                            </p>
                        </motion.section>

                        <motion.section
                            initial="hidden"
                            animate="visible"
                            variants={textVariants}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
                                4. Vos données, vos droits
                            </h2>
                            <p className="text-gray-700">
                                Vous êtes le seul maître de vos informations. Vous pouvez à tout moment y accéder, les modifier ou nous demander de les supprimer. C'est votre droit, et nous nous engageons à le respecter.
                            </p>
                        </motion.section>

                        <motion.section
                            initial="hidden"
                            animate="visible"
                            variants={textVariants}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
                                5. On reste en contact
                            </h2>
                            <p className="text-gray-700">
                                Des questions ? Des doutes ? N'hésitez pas à nous contacter. Nous sommes là pour vous répondre et vous rassurer.
                            </p>
                        </motion.section>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PolitiqueConfidentialite;