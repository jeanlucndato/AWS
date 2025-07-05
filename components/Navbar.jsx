// components/layout/Navbar.jsx
import Link from 'next/link';
import { useState, useEffect } from 'react'; // <--- Assure-toi d'importer useEffect
import { FaBars, FaTimes, FaShippingFast } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // --- C'EST LE CODE CLÉ À AJOUTER OU À VÉRIFIER ---
    useEffect(() => {
        if (isOpen) {
            // Empêche le défilement du body lorsque le menu est ouvert
            document.body.style.overflow = 'hidden';
            // Optionnel: Empêche également le défilement du document HTML (certains navigateurs préfèrent cela)
            document.documentElement.style.overflow = 'hidden';
        } else {
            // Rétablit le défilement normal lorsque le menu est fermé
            document.body.style.overflow = ''; // ou 'auto'
            document.documentElement.style.overflow = ''; // ou 'auto'
        }

        // Fonction de nettoyage: s'exécute lorsque le composant est démonté ou avant que l'effet ne se réexécute
        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        };
    }, [isOpen]); // L'effet s'exécute chaque fois que 'isOpen' change

    const navVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const mobileMenuVariants = {
        hidden: { opacity: 0, x: "50%" },
        visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
        exit: { opacity: 0, x: "50%", transition: { duration: 0.2, ease: "easeIn" } },
    };

    return (
        <motion.nav
            className="bg-blue-800 p-4 shadow-lg sticky top-0 z-50"
            initial="hidden"
            animate="visible"
            variants={navVariants}
        >
            <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center text-white text-2xl md:text-3xl font-bold">
                    <FaShippingFast className="mr-2 text-yellow-400 text-3xl md:text-4xl" />
                    AWS
                </Link>

                {/* Menu Desktop */}
                <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                    <Link href="/" className="text-white text-lg hover:text-yellow-400 transition duration-300">Accueil</Link>
                    <Link href="/services" className="text-white text-lg hover:text-yellow-400 transition duration-300">Services</Link>
                    <Link href="/tarifs" className="text-white text-lg hover:text-yellow-400 transition duration-300">Tarifs</Link>
                    <Link href="/suivi" className="text-white text-lg hover:text-yellow-400 transition duration-300">Suivi</Link>
                    <Link href="/contact" className="text-white text-lg hover:text-yellow-400 transition duration-300">Contact</Link>
                    <motion.a
                        href="/devis"
                        className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors duration-300 text-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Obtenir un Devis
                    </motion.a>
                </div>

                {/* Bouton Menu Mobile */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none p-2 rounded-md hover:bg-blue-700">
                        {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
                    </button>
                </div>
            </div>

            {/* Menu Mobile (affiché conditionnellement avec Framer Motion) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="md:hidden bg-blue-700 absolute top-full left-0 w-full py-4 px-6 space-y-4 shadow-lg rounded-b-lg"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={mobileMenuVariants}
                    >
                        <Link href="/" className="block text-white text-lg hover:text-yellow-400 py-2 border-b border-blue-600 last:border-b-0" onClick={() => setIsOpen(false)}>Accueil</Link>
                        <Link href="/services" className="block text-white text-lg hover:text-yellow-400 py-2 border-b border-blue-600 last:border-b-0" onClick={() => setIsOpen(false)}>Services</Link>
                        <Link href="/tarifs" className="block text-white text-lg hover:text-yellow-400 py-2 border-b border-blue-600 last:border-b-0" onClick={() => setIsOpen(false)}>Tarifs</Link>
                        <Link href="/suivi" className="block text-white text-lg hover:text-yellow-400 py-2 border-b border-blue-600 last:border-b-0" onClick={() => setIsOpen(false)}>Suivi</Link>
                        <Link href="/contact" className="block text-white text-lg hover:text-yellow-400 py-2 border-b border-blue-600 last:border-b-0" onClick={() => setIsOpen(false)}>Contact</Link>
                        <Link href="/faq" className="block text-white text-lg hover:text-yellow-400 py-2 border-b border-blue-600 last:border-b-0" onClick={() => setIsOpen(false)}>FAQ</Link>
                        <motion.a
                            href="/devis"
                            className="block bg-yellow-500 text-blue-900 px-6 py-3 mt-4 rounded-full font-semibold text-center hover:bg-yellow-400 transition-colors duration-300 text-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsOpen(false)}
                        >
                            Obtenir un Devis
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}

export default Navbar;