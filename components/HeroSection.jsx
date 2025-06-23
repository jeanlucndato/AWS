// components/HeroSection.jsx
import { motion } from 'framer-motion';
import Link from 'next/link'; // Importez Link de 'next/link'

function HeroSection() {
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { delay: 0.5, duration: 0.5, ease: "easeOut" } },
        hover: { scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 10 } },
        tap: { scale: 0.95 }
    };

    return (
        <section className="relative bg-gradient-to-r from-blue-900 to-blue-600 text-white py-20 md:py-32 overflow-hidden rounded-lg shadow-xl">
            {/* Image de fond avec opacité - Assurez-vous que '/images/kinshasa.jpg' existe dans votre dossier public */}
            <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/images/kinshasa.jpg')" }}></div>
            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.h1
                    className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                >
                    Votre Passerelle Logistique <br /> Belgique - RDC
                </motion.h1>
                <motion.p
                    className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    Expédiez vos colis et marchandises en toute confiance avec African Web Services. Rapidité, Sécurité et Fiabilité.
                </motion.p>
                <motion.div
                    className="flex justify-center flex-wrap gap-4"
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <Link href="/devis" passHref>
                        <motion.button
                            className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-400 transition-colors"
                            whileHover="hover"
                            whileTap="tap"
                        >
                            Obtenir un Devis
                        </motion.button>
                    </Link>
                    <Link href="/suivi" passHref>
                        <motion.button
                            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-blue-900 transition-colors"
                            whileHover="hover"
                            whileTap="tap"
                        >
                            Suivre mon Colis
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

export default HeroSection;