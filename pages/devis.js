// pages/devis.jsx
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { FaPaperPlane, FaBoxOpen, FaClipboardList, FaTruckLoading, FaComments } from 'react-icons/fa';

export default function DevisPage() {
    const [formData, setFormData] = useState({
        nom: '',
        email: '',
        telephone: '',
        typeEnvoi: '', // Air, Maritime, Petit Paquet
        poidsEstime: '',
        volumeEstime: '',
        descriptionColis: '',
        adresseDepart: '',
        adresseArrivee: '',
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

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        try {
            // Ici, vous enverriez les données à votre backend
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
            setFormData({ // Réinitialiser le formulaire après succès
                nom: '', email: '', telephone: '', typeEnvoi: '',
                poidsEstime: '', volumeEstime: '', descriptionColis: '',
                adresseDepart: '', adresseArrivee: '', dateSouhaitee: '',
                besoinsSpecifiques: '',
            });

        } catch (error) {
            console.error('Erreur de soumission:', error);
            setSubmissionStatus('error');
        }
    };

    return (
        <div className="container mx-auto px-4 py-16">
            {/* Section d'Introduction */}
            <motion.div
                className="text-center mb-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-12 rounded-3xl shadow-xl"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <h1 className="text-6xl font-extrabold leading-tight mb-4">
                    Demandez Votre Devis Gratuit
                </h1>
                <p className="text-xl max-w-3xl mx-auto opacity-90">
                    Obtenez une estimation précise et personnalisée pour vos envois de la Belgique à Goma. Remplissez le formulaire ci-dessous, et notre équipe vous contactera rapidement !
                </p>
            </motion.div>

            <motion.div
                className="bg-white p-10 rounded-2xl shadow-2xl border border-blue-100 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                    Dites-nous en Plus sur Votre Envoi
                </h2>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {/* Informations Personnelles */}
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center">
                            <FaClipboardList className="mr-3" /> Vos Coordonnées
                        </h3>
                    </div>
                    <div>
                        <label htmlFor="nom" className="block text-gray-800 text-lg font-semibold mb-2">Nom Complet</label>
                        <input type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange}
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700"
                            placeholder="Votre nom" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-800 text-lg font-semibold mb-2">Adresse Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700"
                            placeholder="votre.email@exemple.com" required />
                    </div>
                    <div className="md:col-span-2">
                        <label htmlFor="telephone" className="block text-gray-800 text-lg font-semibold mb-2">Numéro de Téléphone</label>
                        <input type="tel" id="telephone" name="telephone" value={formData.telephone} onChange={handleChange}
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700"
                            placeholder="+32 4XX XX XX XX" required />
                    </div>

                    {/* Détails de l'Envoi */}
                    <div className="md:col-span-2 mt-8">
                        <h3 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center">
                            <FaBoxOpen className="mr-3" /> Détails de Votre Colis
                        </h3>
                    </div>
                    <div>
                        <label htmlFor="typeEnvoi" className="block text-gray-800 text-lg font-semibold mb-2">Type d'Envoi Souhaité</label>
                        <select id="typeEnvoi" name="typeEnvoi" value={formData.typeEnvoi} onChange={handleChange}
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700"
                            required>
                            <option value="">Sélectionnez un type</option>
                            <option value="Air">Fret Aérien Express</option>
                            <option value="Maritime">Fret Maritime Économique</option>
                            <option value="Petit Paquet">Colis & Petits Paquets</option>
                            <option value="Autre">Autre (précisez ci-dessous)</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="poidsEstime" className="block text-gray-800 text-lg font-semibold mb-2">Poids Estimé (kg)</label>
                        <input type="number" id="poidsEstime" name="poidsEstime" value={formData.poidsEstime} onChange={handleChange}
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700"
                            placeholder="Ex: 10 kg" min="0" required />
                    </div>
                    <div>
                        <label htmlFor="volumeEstime" className="block text-gray-800 text-lg font-semibold mb-2">Volume Estimé (m³ ou cm³)</label>
                        <input type="text" id="volumeEstime" name="volumeEstime" value={formData.volumeEstime} onChange={handleChange}
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700"
                            placeholder="Ex: 0.5 m³ ou 50x30x20 cm" />
                    </div>
                    <div className="md:col-span-2">
                        <label htmlFor="descriptionColis" className="block text-gray-800 text-lg font-semibold mb-2">Description du Contenu du Colis</label>
                        <textarea id="descriptionColis" name="descriptionColis" value={formData.descriptionColis} onChange={handleChange} rows="4"
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700 resize-y"
                            placeholder="Ex: Vêtements, documents, effets personnels, pièces auto..." required></textarea>
                    </div>

                    {/* Adresses */}
                    <div className="md:col-span-2 mt-8">
                        <h3 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center">
                            <FaTruckLoading className="mr-3" /> Itinéraire
                        </h3>
                    </div>
                    <div>
                        <label htmlFor="adresseDepart" className="block text-gray-800 text-lg font-semibold mb-2">Adresse de Départ (Belgique)</label>
                        <input type="text" id="adresseDepart" name="adresseDepart" value={formData.adresseDepart} onChange={handleChange}
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700"
                            placeholder="Adresse complète en Belgique" required />
                    </div>
                    <div>
                        <label htmlFor="adresseArrivee" className="block text-gray-800 text-lg font-semibold mb-2">Adresse d'Arrivée (Goma, RDC)</label>
                        <input type="text" id="adresseArrivee" name="adresseArrivee" value={formData.adresseArrivee} onChange={handleChange}
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700"
                            placeholder="Adresse complète à Goma" required />
                    </div>
                    <div className="md:col-span-2">
                        <label htmlFor="dateSouhaitee" className="block text-gray-800 text-lg font-semibold mb-2">Date d'Envoi Souhaitée (optionnel)</label>
                        <input type="date" id="dateSouhaitee" name="dateSouhaitee" value={formData.dateSouhaitee} onChange={handleChange}
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700" />
                    </div>

                    {/* Besoins Spécifiques */}
                    <div className="md:col-span-2 mt-8">
                        <h3 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center">
                            <FaComments className="mr-3" /> Besoins Spécifiques
                        </h3>
                    </div>
                    <div className="md:col-span-2">
                        <label htmlFor="besoinsSpecifiques" className="block text-gray-800 text-lg font-semibold mb-2">Informations Complémentaires (optionnel)</label>
                        <textarea id="besoinsSpecifiques" name="besoinsSpecifiques" value={formData.besoinsSpecifiques} onChange={handleChange} rows="4"
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-700 resize-y"
                            placeholder="Ex: Marchandises fragiles, besoin d'assurance spéciale, dates de livraison impératives..."></textarea>
                    </div>

                    {/* Bouton de Soumission */}
                    <motion.div className="md:col-span-2 mt-8 text-center">
                        <motion.button
                            type="submit"
                            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            disabled={submissionStatus === 'submitting'}
                        >
                            {submissionStatus === 'submitting' ? (
                                <>
                                    <FaPaperPlane className="animate-pulse mr-3" /> Envoi en cours...
                                </>
                            ) : (
                                <>
                                    <FaPaperPlane className="mr-3" /> Demander Mon Devis
                                </>
                            )}
                        </motion.button>
                    </motion.div>

                    {/* Messages de Statut */}
                    {submissionStatus === 'success' && (
                        <motion.div
                            className="md:col-span-2 text-center bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg mt-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="font-bold text-xl mb-2">Devis Envoyé avec Succès !</h3>
                            <p>Merci pour votre demande. Nous l'examinons attentivement et vous contacterons très bientôt avec une estimation personnalisée.</p>
                        </motion.div>
                    )}

                    {submissionStatus === 'error' && (
                        <motion.div
                            className="md:col-span-2 text-center bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg mt-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="font-bold text-xl mb-2">Erreur lors de l'envoi !</h3>
                            <p>Désolé, une erreur est survenue lors de l'envoi de votre demande. Veuillez réessayer plus tard ou nous contacter directement.</p>
                        </motion.div>
                    )}
                </form>
            </motion.div>

            {/* Section Informations Complémentaires / FAQ Rapide */}
            <motion.div
                className="text-center mt-20 bg-blue-50 py-12 rounded-xl shadow-inner max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
            >
                <h2 className="text-3xl font-bold text-blue-800 mb-4">
                    Besoin d'Aide pour Remplir le Formulaire ?
                </h2>
                <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                    Notre équipe est disponible pour vous guider à chaque étape. N'hésitez pas à nous contacter si vous avez des questions spécifiques sur votre envoi ou sur les informations à fournir.
                </p>
                <Link href="/contact" passHref>
                    <motion.button
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
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