// components/layout/Navbar.jsx
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes, FaShippingFast } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const mobileMenuVariants = {
        hidden: { opacity: 0, x: "100%" },
        visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
        exit: { opacity: 0, x: "100%", transition: { duration: 0.2, ease: "easeIn" } },
    };

    return (
        <motion.nav
            className="bg-blue-800 p-4 shadow-md sticky top-0 z-50"
            initial="hidden"
            animate="visible"
            variants={navVariants}
        >
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center text-white text-2xl font-bold">
                    <FaShippingFast className="mr-2 text-yellow-400" /> AWS
                </Link>

                {/* Menu Desktop */}
                <div className="hidden md:flex space-x-6">
                    <Link href="/" className="text-white hover:text-yellow-400 transition duration-300">Accueil</Link>
                    <Link href="/services" className="text-white hover:text-yellow-400 transition duration-300">Services</Link>
                    <Link href="/tarifs" className="text-white hover:text-yellow-400 transition duration-300">Tarifs</Link>
                    <Link href="/suivi" className="text-white hover:text-yellow-400 transition duration-300">Suivi</Link>
                    <Link href="/contact" className="text-white hover:text-yellow-400 transition duration-300">Contact</Link>
                    <Link href="/faq" className="text-white hover:text-yellow-400 transition duration-300">FAQ</Link>
                    <motion.a
                        href="/devis"
                        className="bg-yellow-500 text-blue-900 px-4 py-2 rounded-full font-semibold hover:bg-yellow-400 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Obtenir un Devis
                    </motion.a>
                </div>

                {/* Bouton Menu Mobile */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Menu Mobile (affiché conditionnellement avec Framer Motion) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="md:hidden bg-blue-700 mt-4 py-2 px-4 space-y-2 rounded-md"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={mobileMenuVariants}
                    >
                        <Link href="/" className="block text-white hover:text-yellow-400 py-2" onClick={() => setIsOpen(false)}>Accueil</Link>
                        <Link href="/services" className="block text-white hover:text-yellow-400 py-2" onClick={() => setIsOpen(false)}>Services</Link>
                        <Link href="/tarifs" className="block text-white hover:text-yellow-400 py-2" onClick={() => setIsOpen(false)}>Tarifs</Link>
                        <Link href="/suivi" className="block text-white hover:text-yellow-400 py-2" onClick={() => setIsOpen(false)}>Suivi</Link>
                        <Link href="/contact" className="block text-white hover:text-yellow-400 py-2" onClick={() => setIsOpen(false)}>Contact</Link>
                        <Link href="/faq" className="block text-white hover:text-yellow-400 py-2" onClick={() => setIsOpen(false)}>FAQ</Link>
                        <motion.a
                            href="/devis"
                            className="block bg-yellow-500 text-blue-900 px-4 py-2 mt-2 rounded-full font-semibold text-center hover:bg-yellow-400 transition-colors duration-300"
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