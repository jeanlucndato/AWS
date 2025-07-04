// components/layout/Footer.jsx
import Link from "next/link";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export default function Footer() {
    return (
        // La police par défaut du body (Roboto) sera appliquée ici si tu ne spécifies rien d'autre
        <footer className="bg-gray-900 text-gray-300 py-12 sm:py-16">
            <div className="container mx-auto px-6 sm:px-8 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
                {/* Bloc "À propos" */}
                <div className="flex flex-col items-start">
                    {/* Les h3 utiliseront automatiquement la police Poppins grâce à la règle dans globals.css */}
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">À propos d'AWS</h3>
                    <p className="text-sm leading-relaxed mb-4 text-gray-400">
                        Afrika World Services est votre agence de livraison de confiance, spécialisée dans l'expédition de la Belgique (Rue Brogniez 207, 1070 Anderlecht) jusqu'à Goma en République Démocratique du Congo. Nous assurons un service rapide, sécurisé et transparent pour tous vos envois.
                    </p>
                    <p className="text-xs text-gray-500 mt-auto">© {new Date().getFullYear()} Afrika World Services. Tous droits réservés.</p>
                </div>

                {/* Bloc "Navigations Rapides" */}
                <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">Navigations Rapides</h3>
                    <ul className="space-y-3">
                        <li>
                            <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                                <span className="mr-2 text-base group-hover:translate-x-1 transition-transform">Accueil</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                                <span className="mr-2 text-base group-hover:translate-x-1 transition-transform">Nos Services</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/suivi" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                                <span className="mr-2 text-base group-hover:translate-x-1 transition-transform">Suivi Colis</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/tarifs" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                                <span className="mr-2 text-base group-hover:translate-x-1 transition-transform">Nos Tarifs</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/devis" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                                <span className="mr-2 text-base group-hover:translate-x-1 transition-transform">Demander un Devis</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/faq" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                                <span className="mr-2 text-base group-hover:translate-x-1 transition-transform">FAQ</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                                <span className="mr-2 text-base group-hover:translate-x-1 transition-transform">Contact</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Bloc "Informations Légales & Contact" */}
                <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">Informations & Contact</h3>
                    <ul className="space-y-3">
                        <li>
                            <Link href="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                                <span className="mr-2 text-base group-hover:translate-x-1 transition-transform">Politique de confidentialité</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/terms" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                                <span className="mr-2 text-base group-hover:translate-x-1 transition-transform">Conditions générales</span>
                            </Link>
                        </li>
                        <li className="pt-4">
                            <h4 className="font-semibold text-white mb-2">Contactez-nous</h4> {/* h4 utilisera aussi la police des titres */}
                        </li>
                        <li className="flex items-start text-base">
                            <FaMapMarkerAlt className="text-blue-400 mr-3 mt-1 flex-shrink-0 text-lg" />
                            <address className="not-italic">Rue Brogniez 207, <br />1070 Anderlecht, Belgique</address>
                        </li>
                        <li className="flex items-center text-base">
                            <FaEnvelope className="text-blue-400 mr-3 text-lg" />
                            <a href="mailto:info@afrikaworldservices.com" className="hover:text-blue-400 transition-colors duration-200">info@afrikaworldservices.com</a>
                        </li>
                        <li className="flex items-center text-base">
                            <FaPhoneAlt className="text-blue-400 mr-3 text-lg" />
                            <a href="tel:+32465154669" className="hover:text-blue-400 transition-colors duration-200">+32 465 15 46 69</a>
                        </li>
                    </ul>
                </div>

                {/* Bloc "Connectez-vous & Newsletter" */}
                <div className="flex flex-col items-start">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">Restons Connectés</h3>
                    {/* Social Media Icons */}
                    <div className="flex space-x-4 mb-8">
                        <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200" aria-label="Suivez-nous sur Facebook">
                            <FaFacebook className="text-3xl" />
                        </a>
                        <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200" aria-label="Suivez-nous sur Twitter">
                            <FaTwitter className="text-3xl" />
                        </a>
                        <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200" aria-label="Suivez-nous sur Instagram">
                            <FaInstagram className="text-3xl" />
                        </a>
                        <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200" aria-label="Suivez-nous sur YouTube">
                            <FaYoutube className="text-3xl" />
                        </a>
                    </div>

                    {/* Newsletter Form */}
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">Newsletter</h3>
                    <p className="text-sm mb-4 leading-relaxed text-gray-400">
                        Recevez nos dernières actualités, offres spéciales et astuces d'expédition directement dans votre boîte de réception.
                    </p>
                    <form className="flex w-full max-w-sm">
                        <input
                            type="email"
                            placeholder="Votre adresse email"
                            className="bg-gray-800 text-white p-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow text-sm placeholder-gray-400"
                            aria-label="Votre adresse email pour la newsletter"
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-r-lg font-semibold text-sm transition-colors duration-200 flex items-center justify-center flex-shrink-0"
                        >
                            S'abonner <FaPaperPlane className="ml-2 text-base" />
                        </button>
                    </form>
                </div>
            </div>
            {/* Copyright below the main footer blocks for better separation */}
            <div className="mt-8 border-t border-gray-700 pt-6 text-center text-xs text-gray-500 px-6 sm:px-8 lg:px-10">
                <p>© {new Date().getFullYear()} Afrika World Services. Tous droits réservés.</p>
            </div>
        </footer>
    );
}