// components/layout/Footer.jsx
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-8 mt-auto">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Section 1: À propos d'AWS */}
                <div>
                    <h3 className="text-xl font-bold mb-4 text-yellow-400">African Web Services</h3>
                    <p className="text-gray-400 text-sm">
                        Votre partenaire de confiance pour des services de shipping rapides et sécurisés de la Belgique vers la République Démocratique du Congo.
                    </p>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="text-gray-400 hover:text-white transition duration-300"><FaFacebook size={24} /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition duration-300"><FaTwitter size={24} /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition duration-300"><FaLinkedin size={24} /></a>
                    </div>
                </div>

                {/* Section 2: Liens Rapides */}
                <div>
                    <h3 className="text-xl font-bold mb-4 text-yellow-400">Liens Rapides</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li><Link href="/services" className="hover:text-white transition duration-300">Nos Services</Link></li>
                        <li><Link href="/tarifs" className="hover:text-white transition duration-300">Tarifs</Link></li>
                        <li><Link href="/suivi" className="hover:text-white transition duration-300">Suivi Colis</Link></li>
                        <li><Link href="/faq" className="hover:text-white transition duration-300">FAQ</Link></li>
                        <li><Link href="/cgv" className="hover:text-white transition duration-300">Conditions Générales de Vente</Link></li>
                    </ul>
                </div>

                {/* Section 3: Contact */}
                <div>
                    <h3 className="text-xl font-bold mb-4 text-yellow-400">Nous Contacter</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li className="flex items-center"><FaMapMarkerAlt className="mr-2" /> 123 Rue de la Belgique, Bruxelles</li>
                        <li className="flex items-center"><FaEnvelope className="mr-2" /> info@africanwebservices.com</li>
                        <li className="flex items-center"><FaPhone className="mr-2" /> +32 123 45 67 89</li>
                        <li className="flex items-center"><FaMapMarkerAlt className="mr-2" /> Av. des Poids Lourds, Goma, RDC</li> {/* Ajout de l'adresse RDC */}
                        <li className="flex items-center"><FaPhone className="mr-2" /> +243 890 123 456</li> {/* Ajout du numéro RDC */}
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
                &copy; {currentYear} African Web Services. Tous droits réservés.
            </div>
        </footer>
    );
}

export default Footer;