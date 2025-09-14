// pages/contact.jsx
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
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
        console.log('Form submitted:', formData);
        alert('Votre message a été envoyé avec succès ! Nous vous répondrons bientôt.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <>
            <Navbar />

            <div className="container mx-auto px-6 py-16 bg-gray-50 font-sans max-w-7xl">
                {/* Hero Section */}
                <motion.div
                    className="text-center mb-16 pt-10 px-4 sm:px-6 lg:px-8"
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h1 className="text-5xl sm:text-6xl font-heading font-extrabold text-gray-900 mb-4 leading-tight">
                        Contactez-nous <span className="text-blue-700">dès maintenant</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-700 tracking-wide">
                        Nous sommes là pour répondre à toutes vos questions et vous aider avec vos envois de la Belgique à Goma.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 items-start">
                    {/* Left Column: Contact Information */}
                    <motion.div
                        className="bg-gradient-to-br from-blue-700 to-blue-900 text-white p-10 rounded-3xl shadow-2xl flex flex-col justify-between h-full"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div>
                            <h2 className="text-4xl font-heading font-bold mb-8 tracking-tight">Informations de Contact</h2>
                            <p className="text-lg mb-10 leading-relaxed opacity-90 tracking-wide">
                                N'hésitez pas à nous joindre par téléphone, email ou à visiter nos bureaux. Notre équipe est prête à vous assister.
                            </p>

                            <div className="space-y-8 text-lg">
                                <div className="flex items-start">
                                    <FaMapMarkerAlt className="text-emerald-300 text-3xl mt-1 mr-5 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-heading font-semibold text-2xl mb-1">Adresse Principale (Belgique)</h3>
                                        <address className="not-italic text-gray-200 text-lg leading-relaxed">
                                            Rue Brogniez 207, <br />1070 Anderlecht, Belgique
                                        </address>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <FaEnvelope className="text-emerald-300 text-3xl mr-5 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-heading font-semibold text-2xl mb-1">Email</h3>
                                        <p>
                                            <a href="mailto:info@afrikaworldservices.com" className="hover:underline text-gray-200 text-lg">
                                                info@afrikaworldservices.com
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <FaPhoneAlt className="text-emerald-300 text-3xl mr-5 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-heading font-semibold text-2xl mb-1">Téléphone</h3>
                                        <p>
                                            <a href="tel:+32465154669" className="hover:underline text-gray-200 text-lg">
                                                +32 465 15 46 69
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                {/* Bouton WhatsApp */}
                                <div className="flex items-center">
                                    <FaWhatsapp className="text-green-400 text-3xl mr-5 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-heading font-semibold text-2xl mb-2">Contact WhatsApp</h3>
                                        <a
                                            href="https://wa.me/32465154669"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block bg-green-500 hover:bg-green-600 transition-colors duration-300 text-white font-semibold py-3 px-6 rounded-full shadow-lg text-lg tracking-wide"
                                        >
                                            Discuter sur WhatsApp
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-14">
                            <h3 className="font-heading font-semibold text-3xl mb-6 tracking-wide">Suivez-nous sur les réseaux sociaux</h3>
                            <div className="flex space-x-8">
                                <a href="#" className="text-white hover:text-emerald-300 transition-colors duration-300 transform hover:scale-110" aria-label="Facebook">
                                    <FaFacebookF className="text-4xl" />
                                </a>
                                <a href="#" className="text-white hover:text-emerald-300 transition-colors duration-300 transform hover:scale-110" aria-label="Twitter">
                                    <FaTwitter className="text-4xl" />
                                </a>
                                <a href="#" className="text-white hover:text-emerald-300 transition-colors duration-300 transform hover:scale-110" aria-label="Instagram">
                                    <FaInstagram className="text-4xl" />
                                </a>
                                <a href="#" className="text-white hover:text-emerald-300 transition-colors duration-300 transform hover:scale-110" aria-label="LinkedIn">
                                    <FaLinkedinIn className="text-4xl" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-200 h-full"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <h2 className="text-4xl font-heading font-bold text-gray-900 mb-10 text-center tracking-tight">
                            Envoyez-nous un Message
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div>
                                <label htmlFor="name" className="block text-gray-800 text-lg font-semibold mb-3">
                                    Nom Complet
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-3 focus:ring-blue-400 focus:border-transparent outline-none transition duration-300 text-gray-700 text-lg"
                                    placeholder="Votre nom"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-gray-800 text-lg font-semibold mb-3">
                                    Adresse Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-3 focus:ring-blue-400 focus:border-transparent outline-none transition duration-300 text-gray-700 text-lg"
                                    placeholder="votre.email@exemple.com"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-gray-800 text-lg font-semibold mb-3">
                                    Sujet
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-3 focus:ring-blue-400 focus:border-transparent outline-none transition duration-300 text-gray-700 text-lg"
                                    placeholder="Sujet de votre message"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-gray-800 text-lg font-semibold mb-3">
                                    Votre Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="7"
                                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-3 focus:ring-blue-400 focus:border-transparent outline-none transition duration-300 text-gray-700 resize-y text-lg"
                                    placeholder="Décrivez votre besoin ou question en détail..."
                                    required
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-4 rounded-xl text-xl shadow-lg transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2"
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                Envoyer le Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

                {/* Map Section */}
                <motion.div
                    className="mt-20 rounded-3xl overflow-hidden shadow-2xl border-4 border-blue-100 bg-white p-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <h2 className="text-3xl font-heading font-bold text-center text-gray-900 mb-8 tracking-tight">
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
