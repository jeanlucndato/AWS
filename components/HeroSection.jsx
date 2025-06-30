// components/HeroSection.jsx
import { motion } from 'framer-motion';
import Link from 'next/link';
// Pas besoin d'importer useRouter ni les fichiers de traduction spécifiques à la langue
import { FaTruckMoving, FaSearch, FaArrowRight } from 'react-icons/fa';

// Déplacez le contenu directement ici ou gardez-le dans un fichier JSON fr/home.json
// Si vous le gardez dans home.json, importez-le simplement :
// import content from '../locales/fr/home.json';
// et utilisez content.hero_title_line1, etc.
const content = {
    hero_title_line1: "Votre Passerelle Logistique",
    hero_title_line2: "Belgique - RDC",
    hero_description: "Expédiez vos colis et marchandises en toute confiance avec Afrika World Services. Rapidité, Sécurité et Fiabilité garanties pour toutes vos livraisons vers Goma.",
    button_quote: "Obtenir un Devis",
    button_track: "Suivre mon Colis"
};


function HeroSection() {
    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.9,
                ease: "easeOut"
            }
        },
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delay: 0.6,
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.2
            }
        },
        hover: { scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 10 } },
        tap: { scale: 0.95 }
    };

    return (
        <section className="relative bg-gray-900 text-white py-24 md:py-40 overflow-hidden shadow-2xl">
            {/* Image de fond avec superposition de dégradé pour une meilleure lisibilité */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/image/propo5.jpg')" }}
            >
                {/* Superposition de dégradé pour un meilleur contraste du texte */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-800 opacity-80"></div>
            </div>

            {/* Conteneur de contenu */}
            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {content.hero_title_line1} <br className="hidden md:inline" /> {content.hero_title_line2}
                </motion.h1>
                <motion.p
                    className="text-lg md:text-2xl mb-12 max-w-3xl mx-auto opacity-90 drop-shadow-md"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.3, duration: 0.9 }}
                >
                    {content.hero_description}
                </motion.p>
                <motion.div
                    className="flex flex-col sm:flex-row justify-center items-center gap-6"
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <Link href="/devis" passHref>
                        <motion.button
                            className="inline-flex items-center bg-yellow-500 text-blue-900 px-10 py-5 rounded-full text-xl font-bold shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300"
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <FaTruckMoving className="mr-3 text-2xl" />
                            {content.button_quote}
                            <FaArrowRight className="ml-3 text-lg" />
                        </motion.button>
                    </Link>
                    <Link href="/suivi" passHref>
                        <motion.button
                            className="inline-flex items-center bg-transparent border-2 border-white text-white px-10 py-5 rounded-full text-xl font-bold shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-blue-900 focus:outline-none focus:ring-4 focus:ring-white"
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <FaSearch className="mr-3 text-2xl" />
                            {content.button_track}
                            <FaArrowRight className="ml-3 text-lg" />
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

export default HeroSection;