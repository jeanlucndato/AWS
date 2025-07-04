// pages/devis.jsx
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { FaPaperPlane, FaBoxOpen, FaClipboardList, FaTruckLoading, FaComments, FaCheckCircle, FaExclamationCircle, FaSpinner } from 'react-icons/fa'; // Added success/error icons

export default function DevisPage() {
    const [formData, setFormData] = useState({
        nom: '',
        email: '',
        telephone: '',
        typeEnvoi: '', // Air, Maritime, Petit Paquet
        poidsEstime: '',
        volumeEstime: '',
        descriptionColis: '',
        adresseDepart: '', // Will default to Belgium for clarity based on prompt
        adresseArrivee: '', // Will default to Goma, RDC for clarity based on prompt
        dateSouhaitee: '',
        besoinsSpecifiques: '',
    });

    const [submissionStatus, setSubmissionStatus] = useState(null); // 'idle', 'submitting', 'success', 'error'

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmissionStatus('submitting');

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2500)); // Increased simulation time for better UX

            // Here, you would send the data to your backend
            // const response = await fetch('/api/submit-devis', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(formData),
            // });

            // if (!response.ok) {
            //     throw new Error('Erreur lors de l\'envoi du devis');
            // }

            // const result = await response.json();
            // console.log('Devis soumis avec succès:', result);

            setSubmissionStatus('success');
            // Optionally reset form after a short delay for user to see success message
            setTimeout(() => {
                setFormData({
                    nom: '', email: '', telephone: '', typeEnvoi: '',
                    poidsEstime: '', volumeEstime: '', descriptionColis: '',
                    adresseDepart: '', adresseArrivee: '', dateSouhaitee: '',
                    besoinsSpecifiques: '',
                });
                setSubmissionStatus(null); // Return to idle
            }, 5000); // Reset after 5 seconds
        } catch (error) {
            console.error('Erreur de soumission:', error);
            setSubmissionStatus('error');
            setTimeout(() => setSubmissionStatus(null), 5000); // Reset after 5 seconds
        }
    };

    return (
        // Main container with generous padding and light background for softness
        <div className="container mx-auto px-6 py-12 sm:py-16 bg-gray-50 font-sans">
            {/* Introduction Section */}
            <motion.div
                className="text-center mb-12 sm:mb-16 bg-gradient-to-r from-teal-500 to-emerald-600 text-white p-8 sm:p-12 rounded-3xl shadow-xl mx-auto max-w-4xl"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold leading-tight mb-4">
                    Demandez Votre <span className="text-yellow-200">Devis Gratuit</span>
                </h1>
                <p className="text-base sm:text-lg max-w-3xl mx-auto opacity-90 px-4">
                    Obtenez une estimation précise et personnalisée pour vos envois de la Belgique à Goma. Remplissez le formulaire ci-dessous, et notre équipe vous contactera rapidement !
                </p>
            </motion.div>

            <motion.div
                className="bg-white p-6 sm:p-10 rounded-2xl shadow-2xl border border-blue-100 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
                    Dites-nous en Plus sur Votre Envoi
                </h2>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {/* Personal Information */}
                    <div className="md:col-span-2">
                        <h3 className="text-xl sm:text-2xl font-heading font-semibold text-blue-700 mb-4 flex items-center border-b pb-2 border-gray-200">
                            <FaClipboardList className="mr-3 text-blue-600" /> Vos Coordonnées
                        </h3>
                    </div>
                    <div>
                        <label htmlFor="nom" className="block text-gray-800 text-base sm:text-lg font-medium mb-2">Nom Complet</label>
                        <input type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange}
                            className="w-full px-4 py-2.5 sm:px-5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700 placeholder-gray-400"
                            placeholder="Votre nom" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-800 text-base sm:text-lg font-medium mb-2">Adresse Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                            className="w-full px-4 py-2.5 sm:px-5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700 placeholder-gray-400"
                            placeholder="votre.email@exemple.com" required />
                    </div>
                    <div className="md:col-span-2">
                        <label htmlFor="telephone" className="block text-gray-800 text-base sm:text-lg font-medium mb-2">Numéro de Téléphone</label>
                        <input type="tel" id="telephone" name="telephone" value={formData.telephone} onChange={handleChange}
                            className="w-full px-4 py-2.5 sm:px-5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700 placeholder-gray-400"
                            placeholder="+32 4XX XX XX XX" required />
                    </div>

                    {/* Shipment Details */}
                    <div className="md:col-span-2 mt-8">
                        <h3 className="text-xl sm:text-2xl font-heading font-semibold text-blue-700 mb-4 flex items-center border-b pb-2 border-gray-200">
                            <FaBoxOpen className="mr-3 text-blue-600" /> Détails de Votre Colis
                        </h3>
                    </div>
                    <div>
                        <label htmlFor="typeEnvoi" className="block text-gray-800 text-base sm:text-lg font-medium mb-2">Type d'Envoi Souhaité</label>
                        <select id="typeEnvoi" name="typeEnvoi" value={formData.typeEnvoi} onChange={handleChange}
                            className="w-full px-4 py-2.5 sm:px-5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700 appearance-none bg-white pr-8" // appearance-none for custom arrow
                            required>
                            <option value="">Sélectionnez un type</option>
                            <option value="Air">Fret Aérien Express</option>
                            <option value="Maritime">Fret Maritime Économique</option>
                            <option value="Petit Paquet">Colis & Petits Paquets</option>
                            <option value="Autre">Autre (précisez ci-dessous)</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="poidsEstime" className="block text-gray-800 text-base sm:text-lg font-medium mb-2">Poids Estimé (kg)</label>
                        <input type="number" id="poidsEstime" name="poidsEstime" value={formData.poidsEstime} onChange={handleChange}
                            className="w-full px-4 py-2.5 sm:px-5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700 placeholder-gray-400"
                            placeholder="Ex: 10" min="0" required /> {/* Removed "kg" from placeholder, added min */}
                    </div>
                    <div>
                        <label htmlFor="volumeEstime" className="block text-gray-800 text-base sm:text-lg font-medium mb-2">Volume Estimé (m³ ou cm³)</label>
                        <input type="text" id="volumeEstime" name="volumeEstime" value={formData.volumeEstime} onChange={handleChange}
                            className="w-full px-4 py-2.5 sm:px-5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700 placeholder-gray-400"
                            placeholder="Ex: 0.5 m³ ou 50x30x20 cm" />
                    </div>
                    <div className="md:col-span-2">
                        <label htmlFor="descriptionColis" className="block text-gray-800 text-base sm:text-lg font-medium mb-2">Description du Contenu du Colis</label>
                        <textarea id="descriptionColis" name="descriptionColis" value={formData.descriptionColis} onChange={handleChange} rows="4"
                            className="w-full px-4 py-2.5 sm:px-5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700 resize-y placeholder-gray-400"
                            placeholder="Ex: Vêtements, documents, effets personnels, pièces auto..." required></textarea>
                    </div>

                    {/* Addresses */}
                    <div className="md:col-span-2 mt-8">
                        <h3 className="text-xl sm:text-2xl font-heading font-semibold text-blue-700 mb-4 flex items-center border-b pb-2 border-gray-200">
                            <FaTruckLoading className="mr-3 text-blue-600" /> Itinéraire de l'Envoi
                        </h3>
                    </div>
                    <div>
                        <label htmlFor="adresseDepart" className="block text-gray-800 text-base sm:text-lg font-medium mb-2">Adresse de Départ (Belgique)</label>
                        <input type="text" id="adresseDepart" name="adresseDepart" value={formData.adresseDepart} onChange={handleChange}
                            className="w-full px-4 py-2.5 sm:px-5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700 placeholder-gray-400"
                            placeholder="Adresse complète en Belgique (ex: Bruxelles)" required />
                    </div>
                    <div>
                        <label htmlFor="adresseArrivee" className="block text-gray-800 text-base sm:text-lg font-medium mb-2">Adresse d'Arrivée (Goma, RDC)</label>
                        <input type="text" id="adresseArrivee" name="adresseArrivee" value={formData.adresseArrivee} onChange={handleChange}
                            className="w-full px-4 py-2.5 sm:px-5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700 placeholder-gray-400"
                            placeholder="Adresse complète à Goma" required />
                    </div>
                    <div className="md:col-span-2">
                        <label htmlFor="dateSouhaitee" className="block text-gray-800 text-base sm:text-lg font-medium mb-2">Date d'Envoi Souhaitée (optionnel)</label>
                        <input type="date" id="dateSouhaitee" name="dateSouhaitee" value={formData.dateSouhaitee} onChange={handleChange}
                            className="w-full px-4 py-2.5 sm:px-5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700 placeholder-gray-400" />
                    </div>

                    {/* Specific Needs */}
                    <div className="md:col-span-2 mt-8">
                        <h3 className="text-xl sm:text-2xl font-heading font-semibold text-blue-700 mb-4 flex items-center border-b pb-2 border-gray-200">
                            <FaComments className="mr-3 text-blue-600" /> Informations Complémentaires
                        </h3>
                    </div>
                    <div className="md:col-span-2">
                        <label htmlFor="besoinsSpecifiques" className="block text-gray-800 text-base sm:text-lg font-medium mb-2">Besoin ou Détail Spécifique (optionnel)</label>
                        <textarea id="besoinsSpecifiques" name="besoinsSpecifiques" value={formData.besoinsSpecifiques} onChange={handleChange} rows="4"
                            className="w-full px-4 py-2.5 sm:px-5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700 resize-y placeholder-gray-400"
                            placeholder="Ex: Marchandises fragiles, besoin d'assurance spéciale, dates de livraison impératives..."></textarea>
                    </div>

                    {/* Submission Button */}
                    <motion.div className="md:col-span-2 mt-8 text-center">
                        <motion.button
                            type="submit"
                            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold py-3.5 px-8 sm:py-4 sm:px-10 rounded-full text-lg sm:text-xl shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            whileHover={{ scale: submissionStatus !== 'submitting' ? 1.02 : 1 }}
                            whileTap={{ scale: submissionStatus !== 'submitting' ? 0.98 : 1 }}
                            disabled={submissionStatus === 'submitting'}
                        >
                            {submissionStatus === 'submitting' ? (
                                <>
                                    <FaSpinner className="animate-spin mr-3 text-white" /> Envoi en cours...
                                </>
                            ) : (
                                <>
                                    <FaPaperPlane className="mr-3" /> Demander Mon Devis
                                </>
                            )}
                        </motion.button>
                    </motion.div>

                    {/* Status Messages */}
                    {submissionStatus === 'success' && (
                        <motion.div
                            className="md:col-span-2 text-center bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg mt-6 flex items-center justify-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <FaCheckCircle className="text-green-500 mr-3 text-2xl" />
                            <div>
                                <h3 className="font-heading font-bold text-lg sm:text-xl mb-1">Devis Envoyé avec Succès !</h3>
                                <p className="text-sm sm:text-base">Merci pour votre demande. Nous l'examinons attentivement et vous contacterons très bientôt avec une estimation personnalisée.</p>
                            </div>
                        </motion.div>
                    )}

                    {submissionStatus === 'error' && (
                        <motion.div
                            className="md:col-span-2 text-center bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg mt-6 flex items-center justify-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <FaExclamationCircle className="text-red-500 mr-3 text-2xl" />
                            <div>
                                <h3 className="font-heading font-bold text-lg sm:text-xl mb-1">Erreur lors de l'envoi !</h3>
                                <p className="text-sm sm:text-base">Désolé, une erreur est survenue lors de l'envoi de votre demande. Veuillez réessayer plus tard ou nous contacter directement.</p>
                            </div>
                        </motion.div>
                    )}
                </form>
            </motion.div>

            {/* Additional Info / Quick FAQ Section */}
            <motion.div
                className="text-center mt-16 sm:mt-20 bg-blue-50 py-10 sm:py-12 rounded-xl shadow-inner max-w-4xl mx-auto px-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
            >
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-blue-800 mb-4">
                    Besoin d'Aide pour Remplir le Formulaire ?
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-6 max-w-2xl mx-auto px-4">
                    Notre équipe est disponible pour vous guider à chaque étape. N'hésitez pas à nous contacter si vous avez des questions spécifiques sur votre envoi ou sur les informations à fournir.
                </p>
                <Link href="/contact" passHref>
                    <motion.button
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold py-3 px-8 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Parler à un Expert
                    </motion.button>
                </Link>
            </motion.div>
        </div>
    );
}