// pages/contact.jsx
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useState } from 'react';

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
        // Here you would typically send the form data to your backend service
        // For demonstration, we'll just log it and reset the form.
        console.log('Form submitted:', formData);
        alert('Votre message a été envoyé avec succès ! Nous vous répondrons bientôt.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (

        <div className="container mx-auto px-4 py-16">
            {/* Hero Section */}
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <h1 className="text-6xl font-extrabold text-blue-800 leading-tight mb-4">
                    Contactez-nous
                </h1>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                    Nous sommes là pour répondre à toutes vos questions et vous aider avec vos envois de la Belgique à Goma.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Left Column: Contact Information */}
                <motion.div
                    className="bg-gradient-to-br from-blue-700 to-blue-900 text-white p-10 rounded-2xl shadow-xl flex flex-col justify-between"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div>
                        <h2 className="text-4xl font-bold mb-6">Informations de Contact</h2>
                        <p className="text-lg mb-8 leading-relaxed">
                            N'hésitez pas à nous joindre par téléphone, email ou à visiter nos bureaux. Notre équipe est prête à vous assister.
                        </p>

                        <div className="space-y-6 text-lg">
                            <div className="flex items-start">
                                <FaMapMarkerAlt className="text-emerald-300 text-2xl mt-1 mr-4 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold">Adresse Principale (Belgique)</h3>
                                    <p>Rue Brogniez 207, 1070 Anderlecht, Belgique</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <FaEnvelope className="text-emerald-300 text-2xl mr-4 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold">Email</h3>
                                    <p><a href="mailto:info@afrikaworldservices.com" className="hover:underline">info@afrikaworldservices.com</a></p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <FaPhoneAlt className="text-emerald-300 text-2xl mr-4 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold">Téléphone</h3>
                                    <p><a href="tel:+32465154669" className="hover:underline">+32 465 15 46 69</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <h3 className="font-semibold text-2xl mb-4">Suivez-nous sur les réseaux sociaux</h3>
                        <div className="flex space-x-6">
                            <a href="#" className="text-white hover:text-emerald-300 transition-colors duration-300">
                                <FaFacebookF className="text-3xl" />
                            </a>
                            <a href="#" className="text-white hover:text-emerald-300 transition-colors duration-300">
                                <FaTwitter className="text-3xl" />
                            </a>
                            <a href="#" className="text-white hover:text-emerald-300 transition-colors duration-300">
                                <FaInstagram className="text-3xl" />
                            </a>
                            <a href="#" className="text-white hover:text-emerald-300 transition-colors duration-300">
                                <FaLinkedinIn className="text-3xl" />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: Contact Form */}
                <motion.div
                    className="bg-white p-10 rounded-2xl shadow-xl border border-gray-200"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Envoyez-nous un Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-gray-800 text-lg font-semibold mb-2">Nom Complet</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700"
                                placeholder="Votre nom"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-800 text-lg font-semibold mb-2">Adresse Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700"
                                placeholder="votre.email@exemple.com"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-gray-800 text-lg font-semibold mb-2">Sujet</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700"
                                placeholder="Sujet de votre message"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-800 text-lg font-semibold mb-2">Votre Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="6"
                                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700 resize-y"
                                placeholder="Décrivez votre besoin ou question en détail..."
                                required
                            ></textarea>
                        </div>
                        <motion.button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg text-xl shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
                className="mt-20 rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-100"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-10 mt-10">
                    Retrouvez-nous sur la Carte
                </h2>
                <div className="relative" style={{ paddingBottom: '45%', height: 0 }}>
                    {/* Placeholder for Google Map Embed */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.612140880313!2d4.301389476717457!3d50.81711227160759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c54d5d5d5d5d%3A0x6b7b7b7b7b7b7b7b!2sRue%20Brogniez%20207%2C%201070%20Anderlecht%2C%20Belgium!5e0!3m2!1sen!2scd!4v1700000000000!5m2!1sen!2scd"
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
    );
}