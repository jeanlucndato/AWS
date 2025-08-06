// pages/contact.jsx
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ici tu enverrais les données du formulaire à ton backend
        console.log('Form submitted:', formData);
        alert('Votre message a été envoyé avec succès ! Nous vous répondrons bientôt.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <>
            <Navbar />

            <div className="container mx-auto px-6 py-12 sm:py-16 bg-gray-50 font-sans">
                {/* Hero Section */}
                <motion.div
                    className="text-center mb-12 sm:mb-16 pt-8"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-gray-800 leading-tight mb-4">
                        Contactez-nous <span className="text-blue-700">dès maintenant</span>
                    </h1>
                    <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto px-4">
                        Nous sommes là pour répondre à toutes vos questions et vous aider avec vos envois de la Belgique à Goma.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-start">
                    {/* Left Column: Contact Information */}
                    <motion.div
                        className="bg-gradient-to-br from-blue-700 to-blue-900 text-white p-8 sm:p-10 rounded-2xl shadow-xl flex flex-col justify-between h-full"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">Informations de Contact</h2>
                            <p className="text-base sm:text-lg mb-8 leading-relaxed opacity-90">
                                N'hésitez pas à nous joindre par téléphone, email ou à visiter nos bureaux. Notre équipe est prête à vous assister.
                            </p>

                            <div className="space-y-6 text-base sm:text-lg">
                                <div className="flex items-start">
                                    <FaMapMarkerAlt className="text-emerald-300 text-2xl mt-1 mr-4 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-heading font-semibold text-xl">Adresse Principale (Belgique)</h3>
                                        <address className="not-italic text-gray-200">
                                            Rue Brogniez 207, <br />1070 Anderlecht, Belgique
                                        </address>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <FaEnvelope className="text-emerald-300 text-2xl mr-4 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-heading font-semibold text-xl">Email</h3>
                                        <p>
                                            <a href="mailto:info@afrikaworldservices.com" className="hover:underline text-gray-200">
                                                info@afrikaworldservices.com
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <FaPhoneAlt className="text-emerald-300 text-2xl mr-4 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-heading font-semibold text-xl">Téléphone</h3>
                                        <p>
                                            <a href="tel:+32465154669" className="hover:underline text-gray-200">
                                                +32 465 15 46 69
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                {/* Bouton WhatsApp */}
                                <div className="flex items-center">
                                    <FaPhoneAlt className="text-green-400 text-2xl mr-4 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-heading font-semibold text-xl">Appel WhatsApp</h3>
                                        <p>
                                            <a
                                                href="https://wa.me/32465154669"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-block mt-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                                            >
                                                Appeler via WhatsApp
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 sm:mt-12">
                            <h3 className="font-heading font-semibold text-2xl mb-4">Suivez-nous sur les réseaux sociaux</h3>
                            <div className="flex space-x-5 sm:space-x-6">
                                <a href="#" className="text-white hover:text-emerald-300 transition-colors duration-300 transform hover:scale-110" aria-label="Notre page Facebook">
                                    <FaFacebookF className="text-3xl sm:text-4xl" />
                                </a>
                                <a href="#" className="text-white hover:text-emerald-300 transition-colors duration-300 transform hover:scale-110" aria-label="Notre page Twitter">
                                    <FaTwitter className="text-3xl sm:text-4xl" />
                                </a>
                                <a href="#" className="text-white hover:text-emerald-300 transition-colors duration-300 transform hover:scale-110" aria-label="Notre page Instagram">
                                    <FaInstagram className="text-3xl sm:text-4xl" />
                                </a>
                                <a href="#" className="text-white hover:text-emerald-300 transition-colors duration-300 transform hover:scale-110" aria-label="Notre page LinkedIn">
                                    <FaLinkedinIn className="text-3xl sm:text-4xl" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-gray-200 h-full"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-8 text-center">
                            Envoyez-nous un Message
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7">
                            <div>
                                <label htmlFor="name" className="block text-gray-800 text-base sm:text-lg font-semibold mb-2">
                                    Nom Complet
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 sm:px-5 sm:py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700 text-base"
                                    placeholder="Votre nom"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-800 text-base sm:text-lg font-semibold mb-2">
                                    Adresse Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 sm:px-5 sm:py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700 text-base"
                                    placeholder="votre.email@exemple.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-gray-800 text-base sm:text-lg font-semibold mb-2">
                                    Sujet
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 sm:px-5 sm:py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700 text-base"
                                    placeholder="Sujet de votre message"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-800 text-base sm:text-lg font-semibold mb-2">
                                    Votre Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="6"
                                    className="w-full px-4 py-3 sm:px-5 sm:py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700 resize-y text-base"
                                    placeholder="Décrivez votre besoin ou question en détail..."
                                    required
                                ></textarea>
                            </div>
                            <motion.button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 sm:py-4 px-6 rounded-lg text-lg sm:text-xl shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Envoyer le Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

                {/* Map Section */}
                <motion.div
                    className="mt-16 sm:mt-20 rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-100 bg-white p-4 sm:p-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <h2 className="text-3xl sm:text-2xl font-heading font-bold text-center text-gray-900 mb-6 sm:mb-8">
                        Retrouvez-nous sur la <span className="text-blue-700">Carte</span>
                    </h2>

                    <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.824888806283!2d4.30526951569429!3d50.83515827953258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c2f0f0f0f0f0%3A0x1234567890abcdef!2sRue%20Brogniez%20207%2C%201070%20Anderlecht%2C%20Belgium!5e0!3m2!1sen!2scd!4v1678901234567!5m2!1sen!2scd"
                            width="100%"
                            height="100%"
                            style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Afrika World Services Location"
                        ></iframe>
                    </div>
                </motion.div>
            </div>
        </>
    );
}
