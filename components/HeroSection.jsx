// components/HeroSection.jsx
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaTruckMoving, FaSearch, FaArrowRight } from 'react-icons/fa';

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
            transition: { duration: 1, ease: "easeOut" }
        },
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.85 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { delay: 0.7, duration: 0.6, ease: "easeOut", staggerChildren: 0.15 }
        },
        hover: { scale: 1.07, transition: { type: "spring", stiffness: 400, damping: 12 } },
        tap: { scale: 0.95 }
    };

    return (
        <section className="relative bg-gray-900 text-white py-28 md:py-44 overflow-hidden shadow-2xl">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/image/propo5.jpg')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-800 opacity-85"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
                <motion.h1
                    className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-8 leading-tight drop-shadow-xl tracking-tight"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {content.hero_title_line1} <br className="hidden md:inline" /> <span className="text-yellow-400">{content.hero_title_line2}</span>
                </motion.h1>

                <motion.p
                    className="text-lg sm:text-xl md:text-2xl mb-14 max-w-3xl mx-auto opacity-90 drop-shadow-md leading-relaxed"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.35, duration: 1 }}
                >
                    {content.hero_description}
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row justify-center items-center gap-7 sm:gap-10"
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <Link href="/devis" passHref>
                        <motion.button
                            className="inline-flex items-center bg-yellow-500 text-blue-900 px-12 py-5 rounded-full text-2xl font-bold shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300"
                            whileHover="hover"
                            whileTap="tap"
                            aria-label="Obtenir un devis"
                        >
                            <FaTruckMoving className="mr-4 text-3xl" />
                            {content.button_quote}
                            <FaArrowRight className="ml-4 text-lg" />
                        </motion.button>
                    </Link>

                    <Link href="/suivi" passHref>
                        <motion.button
                            className="inline-flex items-center bg-transparent border-2 border-white text-white px-12 py-5 rounded-full text-2xl font-bold shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-blue-900 focus:outline-none focus:ring-4 focus:ring-white"
                            whileHover="hover"
                            whileTap="tap"
                            aria-label="Suivre mon colis"
                        >
                            <FaSearch className="mr-4 text-3xl" />
                            {content.button_track}
                            <FaArrowRight className="ml-4 text-lg" />
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

export default HeroSection;
