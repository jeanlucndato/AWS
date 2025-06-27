import Link from "next/link";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8 rounded-2xl p-2">
            <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between">
                {/* Bloc "About" (Gauche) */}
                <div className="w-full md:w-1/4 mb-4 md:mb-0">
                    <h3 className="font-semibold mb-2 text-sm">À propos</h3>
                    <p className="text-xs">
                        Entreprise spécialisée dans la construction de bâtiments écologiques et la vente de matériel solaire de haute qualité.
                    </p>
                    <p className="mt-1 text-xs">Certifications: ISO 14001, SolarPlus</p>
                    <p className="mt-2 text-xs">© {new Date().getFullYear()} GenTech</p>
                    <p className="mt-2 text-xs">@ <a href="https://jeanlucndato.github.io/resume/">Jeanluck</a> </p>
                </div>

                {/* Bloc "Navigations" (Centre) */}
                <div className="w-full md:w-1/4 flex flex-col md:flex-row md:justify-center mb-4 md:mb-0">
                    <div className="w-full md:w-1/2">
                        <h3 className="font-semibold mb-2 text-sm">Navigations</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link href="/" className="text-gray-300 hover:text-white text-xs">
                                    Accueil
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-300 hover:text-white text-xs">
                                    À propos
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-gray-300 hover:text-white text-xs">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/realisations" className="text-gray-300 hover:text-white text-xs">
                                    Réalisations
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-300 hover:text-white text-xs">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2">
                        <ul className="space-y-1 mt-4 md:mt-0">
                            <li>
                                <Link href="/privacy" className="text-gray-300 hover:text-white text-xs">
                                    Politique de confidentialité
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-gray-300 hover:text-white text-xs">
                                    Conditions d'utilisation
                                </Link>
                            </li>
                            {/* "Connect with us" placé ici */}
                            <li>
                                <div className="mb-4 md:mb-0">
                                    <h3 className="font-semibold mb-2 text-sm">Connect with us</h3>
                                    <div className="flex space-x-2">
                                        <a href="#" className="hover:text-gray-300">
                                            <FaFacebook className="text-xl" />
                                        </a>
                                        <a href="#" className="hover:text-gray-300">
                                            <FaTwitter className="text-xl" />
                                        </a>
                                        <a href="#" className="hover:text-gray-300">
                                            <FaInstagram className="text-xl" />
                                        </a>
                                        <a href="#" className="hover:text-gray-300">
                                            <FaYoutube className="text-xl" />
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bloc "Newsletter" (Droite) */}
                <div className="w-full md:w-1/4">
                    <h3 className="font-semibold mb-2 text-sm">Newsletter</h3>
                    <p className="text-xs mb-2">
                        Restez informé de nos dernières actualités et offres spéciales.
                    </p>
                    <form className="flex flex-col md:flex-row">
                        <input
                            type="email"
                            placeholder="Votre adresse email"
                            className="bg-gray-700 text-white p-1 rounded-l-md focus:outline-none flex-grow mb-1 md:mb-0 md:mr-1 text-xs"
                        />
                        <button className="bg-blue-500 hover:bg-emerald-500 text-white px-2 py-1 rounded-r-md text-xs">
                            S'abonner
                        </button>
                    </form>
                </div>
            </div>
        </footer>
    );
}

