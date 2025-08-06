// components/layout/Navbar.jsx
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // Importe useRouter pour écouter les changements de route
import { FaBars, FaTimes, FaShippingFast } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter(); // Initialise le hook useRouter

    // Effet pour gérer le défilement du body et fermer le menu lors d'un changement de route
    useEffect(() => {
        if (isOpen) {
            // Empêche le défilement du body lorsque le menu est ouvert
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            // Rétablit le défilement normal lorsque le menu est fermé
            document.body.style.overflow = ''; // Réinitialise à la valeur par défaut
            document.documentElement.style.overflow = ''; // Réinitialise à la valeur par défaut
        }

        // Écoute les changements de route pour fermer le menu mobile
        // Ceci est crucial pour s'assurer que le défilement est restauré même si l'utilisateur navigue
        const handleRouteChange = () => {
            setIsOpen(false); // Ferme le menu
        };

        router.events.on('routeChangeStart', handleRouteChange); // S'abonne à l'événement

        // Fonction de nettoyage: s'exécute lorsque le composant est démonté ou avant que l'effet ne se réexécute
        return () => {
            document.body.style.overflow = ''; // Assure que le défilement est restauré au démontage
            document.documentElement.style.overflow = ''; // Assure que le défilement est restauré au démontage
            router.events.off('routeChangeStart', handleRouteChange); // Désabonne l'écouteur d'événements
        };
    }, [isOpen, router.events]); // L'effet s'exécute chaque fois que 'isOpen' ou 'router.events' change

    const navVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const mobileMenuVariants = {
        // Commence complètement hors écran à droite
        hidden: { opacity: 0, x: "100%" },
        // Glisse en place
        visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
        // Glisse hors écran à droite à la sortie
        exit: { opacity: 0, x: "100%", transition: { duration: 0.2, ease: "easeIn" } },
    };

    return (
        <motion.nav
            // Ajout de z-50 pour s'assurer que la barre de navigation principale est toujours au-dessus
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
                        // Utilise 'fixed' pour qu'il couvre toute la fenêtre visible
                        // 'inset-0' le fait s'étendre sur tout l'écran
                        // 'top-[64px]' le positionne juste en dessous de la barre de navigation principale (ajuste si la hauteur de ta nav est différente)
                        // 'overflow-y-auto' permet le défilement du contenu du menu si nécessaire
                        // 'z-40' le place au-dessus du contenu de la page mais en dessous de la barre de navigation principale (qui est z-50)
                        className="md:hidden bg-blue-700 fixed inset-0 top-[64px] py-4 px-6 space-y-4 shadow-lg overflow-y-auto z-40"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={mobileMenuVariants}
                    >
                        {/* Liens du menu mobile */}
                        <Link href="/" className="block text-white text-lg hover:text-yellow-400 py-2 border-b border-blue-600 last:border-b-0" onClick={() => setIsOpen(false)}>Accueil</Link>
                        <Link href="/services" className="block text-white text-lg hover:text-yellow-400 py-2 border-b border-blue-600 last:border-b-0" onClick={() => setIsOpen(false)}>Services</Link>
                        <Link href="/tarifs" className="block text-white text-lg hover:text-yellow-400 py-2 border-b border-blue-600 last:border-b-0" onClick={() => setIsOpen(false)}>Tarifs</Link>
                        <Link href="/suivi" className="block text-white text-lg hover:text-yellow-400 py-2 border-b border-blue-600 last:border-b-0" onClick={() => setIsOpen(false)}>Suivi</Link>
                        <Link href="/contact" className="block text-white text-lg hover:text-yellow-400 py-2 border-b border-blue-600 last:border-b-0" onClick={() => setIsOpen(false)}>Contact</Link>

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