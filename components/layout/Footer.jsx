import Link from "next/link";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12"> {/* Darker background, lighter text for contrast */}
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* Bloc "À propos" */}
                <div className="flex flex-col items-start">
                    <h3 className="text-xl font-bold text-white mb-4">À propos d'AWS</h3> {/* Larger, bolder title */}
                    <p className="text-sm leading-relaxed mb-4">
                        Afrika World Services est votre agence de livraison de confiance, spécialisée dans l'expédition de la Belgique (Rue Brogniez 207, 1070 Anderlecht) jusqu'à Goma en République Démocratique du Congo. Nous assurons un service rapide, sécurisé et transparent pour tous vos envois.
                    </p>
                    <p className="text-xs text-gray-400">© {new Date().getFullYear()} Afrika World Services</p>
                </div>

                {/* Bloc "Navigations Rapides" */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">Navigations Rapides</h3>
                    <ul className="space-y-3"> {/* Increased spacing */}
                        <li>
                            <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center">
                                <span className="mr-2 text-sm">Accueil</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center">
                                <span className="mr-2 text-sm">Nos Services</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/tracking" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center">
                                <span className="mr-2 text-sm">Suivi Colis</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/tarifs" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center">
                                <span className="mr-2 text-sm">Nos Tarifs</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/devis" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center">
                                <span className="mr-2 text-sm">Demander un Devis</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/faq" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center">
                                <span className="mr-2 text-sm">FAQ</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center">
                                <span className="mr-2 text-sm">Contact</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Bloc "Informations Légales & Contact" */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">Informations & Contact</h3>
                    <ul className="space-y-3">
                        <li>
                            <Link href="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center">
                                <span className="mr-2 text-sm">Politique de confidentialité</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/terms" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center">
                                <span className="mr-2 text-sm">Conditions générales</span>
                            </Link>
                        </li>
                        <li className="mt-4">
                            <h4 className="font-semibold text-white mb-2">Contactez-nous</h4>
                        </li>
                        <li className="flex items-start text-sm">
                            <FaMapMarkerAlt className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
                            <span>Rue Brogniez 207, <br />1070 Anderlecht, Belgique</span>
                        </li>
                        <li className="flex items-center text-sm">
                            <FaEnvelope className="text-blue-400 mr-3" />
                            <a href="mailto:info@afrikaworldservices.com" className="hover:text-blue-400 transition-colors duration-200">info@afrikaworldservices.com</a>
                        </li>
                        <li className="flex items-center text-sm">
                            <FaPhoneAlt className="text-blue-400 mr-3" />
                            <a href="tel:+32465154669" className="hover:text-blue-400 transition-colors duration-200">+32 465 15 46 69</a>
                        </li>
                    </ul>
                </div>

                {/* Bloc "Connectez-vous & Newsletter" */}
                <div className="flex flex-col items-start">
                    <h3 className="text-xl font-bold text-white mb-4">Restons Connectés</h3>
                    {/* Social Media Icons */}
                    <div className="flex space-x-4 mb-8"> {/* Increased spacing and larger icons */}
                        <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200" aria-label="Suivez-nous sur Facebook">
                            <FaFacebook className="text-2xl" />
                        </a>
                        <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200" aria-label="Suivez-nous sur Twitter">
                            <FaTwitter className="text-2xl" />
                        </a>
                        <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200" aria-label="Suivez-nous sur Instagram">
                            <FaInstagram className="text-2xl" />
                        </a>
                        <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200" aria-label="Suivez-nous sur YouTube">
                            <FaYoutube className="text-2xl" />
                        </a>
                    </div>

                    {/* Newsletter Form */}
                    <h3 className="text-xl font-bold text-white mb-4">Newsletter</h3>
                    <p className="text-sm mb-4 leading-relaxed">
                        Recevez nos dernières actualités, offres spéciales et astuces d'expédition directement dans votre boîte de réception.
                    </p>
                    <form className="flex w-full">
                        <input
                            type="email"
                            placeholder="Votre adresse email"
                            className="bg-gray-800 text-white p-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow text-sm"
                            aria-label="Votre adresse email pour la newsletter"
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-r-lg font-semibold text-sm transition-colors duration-200"
                        >
                            S'abonner
                        </button>
                    </form>
                </div>
            </div>
            {/* Optional: Add a subtle line above the copyright if preferred */}
            {/* <div className="mt-8 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
                <p>© {new Date().getFullYear()} Afrika World Services. Tous droits réservés.</p>
            </div> */}
        </footer>
    );
}