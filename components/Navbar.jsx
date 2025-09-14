// components/layout/Navbar.jsx
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FaBars, FaTimes, FaShippingFast } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }

        const handleRouteChange = () => {
            setIsOpen(false);
        };

        router.events.on('routeChangeStart', handleRouteChange);

        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
            router.events.off('routeChangeStart', handleRouteChange);
        };
    }, [isOpen, router.events]);

    const navVariants = {
        hidden: { opacity: 0, y: -25 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    const mobileMenuVariants = {
        hidden: { opacity: 0, x: '100%' },
        visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' } },
        exit: { opacity: 0, x: '100%', transition: { duration: 0.2, ease: 'easeIn' } },
    };

    return (
        <motion.nav
            className="bg-blue-800 p-5 shadow-lg sticky top-0 z-50"
            initial="hidden"
            animate="visible"
            variants={navVariants}
        >
            <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Logo */}
                <Link href="/" className="flex items-center text-white text-3xl md:text-4xl font-extrabold tracking-wide">
                    <FaShippingFast className="mr-3 text-yellow-400 text-4xl md:text-5xl" />
                    AWS
                </Link>

                {/* Menu Desktop */}
                <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
                    {[
                        { href: '/', label: 'Accueil' },
                        { href: '/services', label: 'Services' },
                        { href: '/tarifs', label: 'Tarifs' },
                        // { href: '/suivi', label: 'Suivi' },
                        { href: '/contact', label: 'Contact' },
                    ].map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className="text-white text-lg font-semibold hover:text-yellow-400 transition duration-300"
                        >
                            {label}
                        </Link>
                    ))}

                    <motion.a
                        href="https://mangonets.com/"
                        className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-400 transition-colors duration-300 text-lg shadow-md"
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ scale: 1 }}
                        animate={{
                            scale: [1, 1.05, 1],
                            transition: {
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        }}
                    >
                        Achetez sur Mangonets

                    </motion.a>
                </div>

                {/* Bouton Menu Mobile */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none p-2 rounded-md hover:bg-blue-700 active:ring-2 active:ring-yellow-400 transition"
                        aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                    >
                        {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
                    </button>
                </div>
            </div>

            {/* Menu Mobile */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="md:hidden fixed inset-0 top-[64px] bg-blue-700 py-6 px-8 space-y-6 shadow-2xl overflow-y-auto z-40"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={mobileMenuVariants}
                    >
                        {[
                            { href: '/', label: 'Accueil' },
                            { href: '/services', label: 'Services' },
                            { href: '/tarifs', label: 'Tarifs' },
                            // { href: '/suivi', label: 'Suivi' },
                            { href: '/contact', label: 'Contact' },
                        ].map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className="block text-white text-xl font-semibold hover:text-yellow-400 py-3 border-b border-blue-600 last:border-b-0 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {label}
                            </Link>
                        ))}

                        <motion.a
                            href="https://mangonets.com/"
                            className="block bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-center hover:bg-orange-400 transition-colors duration-300 text-xl shadow-md"
                            whileHover={{ scale: 1.06 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsOpen(false)}
                            initial={{ scale: 1 }}
                            animate={{
                                scale: [1, 1.05, 1], // Anime de la taille normale, à légèrement plus grande, puis revient à la normale
                                transition: {
                                    duration: 1.5,
                                    repeat: Infinity, // Répète l'animation à l'infini
                                    ease: "easeInOut"
                                }
                            }}
                        >
                            Achetez sur Mangonets
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}

export default Navbar;
