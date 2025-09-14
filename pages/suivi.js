// pages/tracking.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import {
    FaBoxOpen,
    FaClipboardCheck,
    FaTruckLoading,
    FaPlaneDeparture,
    FaShip,
    FaRegCheckCircle,
    FaSpinner,
    FaMapMarkerAlt
} from 'react-icons/fa';
import Link from 'next/link';

export default function TrackingPage() {
    const [trackingNumber, setTrackingNumber] = useState('');
    const [trackingStatus, setTrackingStatus] = useState(null); // null, 'loading', 'found', 'notFound'
    const [packageDetails, setPackageDetails] = useState(null);

    const handleTrackingChange = (e) => {
        setTrackingNumber(e.target.value.toUpperCase());
    };

    const handleTrackSubmit = async (e) => {
        e.preventDefault();
        setTrackingStatus('loading');
        setPackageDetails(null);

        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // --- Mock Data Simulation ---
        const dummyData = {
            AWS123456789BE: {
                status: 'delivered',
                origin: 'Bruxelles, Belgique',
                destination: 'Goma, RDC',
                lastUpdate: '25 juin 2025, 14:30 CAT',
                eta: 'Livré',
                history: [
                    { date: '2025-06-25', time: '14:30', location: 'Goma, RDC', description: 'Livré au destinataire.' },
                    { date: '2025-06-25', time: '09:00', location: 'Goma, RDC', description: 'En attente de livraison locale.' },
                    { date: '2025-06-24', time: '18:45', location: 'Aéroport de Goma, RDC', description: "Arrivé à l'aéroport de destination." },
                    { date: '2025-06-23', time: '10:00', location: 'Aéroport de Bruxelles, Belgique', description: 'Départ du vol international.' },
                    { date: '2025-06-22', time: '16:00', location: 'Anderlecht, Belgique', description: 'Colis collecté et en transit vers le hub.' },
                    { date: '2025-06-21', time: '10:00', location: 'Anderlecht, Belgique', description: "Informations de l'envoi reçues." }
                ],
                currentIcon: FaRegCheckCircle
            },
            AWS987654321BE: {
                status: 'in_transit',
                origin: 'Bruxelles, Belgique',
                destination: 'Goma, RDC',
                lastUpdate: '20 juin 2025, 10:00 CAT',
                eta: 'Estimé le 05 juillet 2025',
                history: [
                    { date: '2025-06-20', time: '10:00', location: 'En mer', description: 'Colis en transit maritime.' },
                    { date: '2025-06-18', time: '14:00', location: "Port d'Anvers, Belgique", description: 'Départ du navire de fret.' },
                    { date: '2025-06-17', time: '11:00', location: 'Anvers, Belgique', description: 'Colis arrivé au port pour chargement.' },
                    { date: '2025-06-16', time: '16:00', location: 'Anderlecht, Belgique', description: 'Colis collecté.' }
                ],
                currentIcon: FaShip
            },
            AWS00000000000: null
        };

        if (dummyData[trackingNumber]) {
            setPackageDetails(dummyData[trackingNumber]);
            setTrackingStatus('found');
        } else {
            setTrackingStatus('notFound');
        }
    };

    const statusIcons = {
        "Informations de l'envoi reçues.": FaClipboardCheck,
        'Colis collecté et en transit vers le hub.': FaTruckLoading,
        'Départ du vol international.': FaPlaneDeparture,
        'Colis en transit maritime.': FaShip,
        "Arrivé à l'aéroport de destination.": FaMapMarkerAlt,
        'En attente de livraison locale.': FaTruckLoading,
        'Livré au destinataire.': FaRegCheckCircle,
        'Départ du navire de fret.': FaShip,
        'Colis arrivé au port pour chargement.': FaBoxOpen,
        'Colis collecté.': FaTruckLoading
    };

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-6 py-12 sm:py-16 bg-gray-50 font-sans min-h-screen">
                {/* Hero */}
                <motion.div
                    className="text-center mb-12 sm:mb-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 sm:p-12 rounded-3xl shadow-xl mx-auto max-w-4xl"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold leading-tight mb-4">
                        Suivez Votre <span className="text-yellow-300">Colis</span>
                    </h1>
                    <p className="text-base sm:text-lg max-w-3xl mx-auto opacity-90 px-4">
                        Entrez votre numéro de suivi pour obtenir des mises à jour en temps réel sur le statut de votre envoi.
                    </p>
                </motion.div>

                {/* Form */}
                <motion.div
                    className="bg-white p-6 sm:p-10 rounded-2xl shadow-xl border border-gray-200 max-w-2xl mx-auto mb-12 sm:mb-16"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <form onSubmit={handleTrackSubmit} className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                        <input
                            type="text"
                            value={trackingNumber}
                            onChange={handleTrackingChange}
                            className="flex-grow px-4 py-3 sm:px-6 sm:py-4 border border-gray-300 rounded-lg text-base sm:text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-800 placeholder-gray-400 uppercase"
                            placeholder="Ex: AWS123456789BE"
                            required
                            autoComplete="off"
                        />
                        <motion.button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 sm:py-4 px-6 sm:px-8 rounded-lg text-base sm:text-lg shadow-lg flex items-center justify-center transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                            whileHover={{ scale: trackingStatus === 'loading' ? 1 : 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            disabled={trackingStatus === 'loading'}
                        >
                            {trackingStatus === 'loading' ? (
                                <>
                                    <FaSpinner className="animate-spin mr-2 sm:mr-3 text-xl" /> Recherche...
                                </>
                            ) : (
                                <>
                                    <FaBoxOpen className="mr-2 sm:mr-3 text-xl" /> Suivre le Colis
                                </>
                            )}
                        </motion.button>
                    </form>
                </motion.div>

                {/* Loading */}
                {trackingStatus === 'loading' && (
                    <motion.div
                        className="text-center text-blue-600 text-lg sm:text-2xl mt-8 p-6 bg-white rounded-xl shadow-md max-w-md mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <FaSpinner className="animate-spin mx-auto mb-4 text-4xl sm:text-5xl" />
                        <p className="font-semibold">Recherche de votre colis en cours...</p>
                    </motion.div>
                )}

                {/* Not Found */}
                {trackingStatus === 'notFound' && (
                    <motion.div
                        className="text-center bg-red-50 border border-red-300 text-red-700 p-6 sm:p-8 rounded-xl shadow-md max-w-xl mx-auto mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4">Colis Non Trouvé</h2>
                        <p className="text-base sm:text-lg">
                            Le numéro de suivi <strong>{trackingNumber}</strong> n'a pas été trouvé. Veuillez vérifier le numéro et réessayer.
                            Si le problème persiste, contactez notre{' '}
                            <Link href="/contact" className="text-red-800 underline hover:text-red-900 font-semibold">
                                service client
                            </Link>
                            .
                        </p>
                    </motion.div>
                )}

                {/* Found */}
                {trackingStatus === 'found' && packageDetails && (
                    <motion.div
                        className="bg-white p-6 sm:p-10 rounded-2xl shadow-xl border border-blue-100 mt-8 max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-6 text-center leading-tight">
                            Statut de votre colis: <span className="text-blue-700">{trackingNumber}</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-center">
                            <div className="p-5 bg-blue-50 rounded-lg shadow-sm border border-blue-100">
                                <p className="text-sm text-gray-600 uppercase tracking-wide">Origine</p>
                                <p className="text-base sm:text-lg font-semibold text-gray-800">{packageDetails.origin}</p>
                            </div>
                            <div className="p-5 bg-blue-50 rounded-lg shadow-sm border border-blue-100">
                                <p className="text-sm text-gray-600 uppercase tracking-wide">Destination</p>
                                <p className="text-base sm:text-lg font-semibold text-gray-800">{packageDetails.destination}</p>
                            </div>
                            <div className="p-5 bg-blue-50 rounded-lg shadow-sm border border-blue-100 flex items-center justify-center gap-3 text-base sm:text-lg font-semibold text-gray-800">
                                {packageDetails.currentIcon && <packageDetails.currentIcon className="text-3xl text-blue-600" />}
                                {packageDetails.status === 'delivered' ? 'Livré' : 'En Transit'}
                            </div>
                        </div>

                        <p className="text-center text-base sm:text-xl text-gray-700 mb-10 font-semibold">
                            Dernière mise à jour: {packageDetails.lastUpdate}
                            <br />
                            ETA: <span className="text-blue-600">{packageDetails.eta}</span>
                        </p>

                        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
                            Historique des Événements
                        </h3>
                        <div className="relative border-l-4 border-blue-200 pl-8 sm:pl-10">
                            {packageDetails.history.map((event, index) => {
                                const IconComponent = statusIcons[event.description] || FaBoxOpen;
                                return (
                                    <motion.div
                                        key={index}
                                        className="mb-6 sm:mb-8 flex items-start -ml-10 sm:-ml-12"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                    >
                                        <div className="bg-blue-600 rounded-full w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-white text-lg sm:text-xl mr-4 flex-shrink-0 z-10 shadow-md">
                                            <IconComponent />
                                        </div>
                                        <div className="flex-grow">
                                            <p className="text-xs sm:text-sm text-gray-500">
                                                {event.date} à {event.time} - {event.location}
                                            </p>
                                            <p className="text-base sm:text-lg font-medium text-gray-800">{event.description}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                )}

                {/* No tracking input yet */}
                {!trackingStatus && (
                    <motion.div
                        className="text-center mt-16 sm:mt-20 bg-blue-50 py-12 sm:py-16 rounded-3xl shadow-inner max-w-4xl mx-auto px-6"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-blue-800 mb-6">
                            Des Questions sur votre <span className="text-blue-700">colis</span> ?
                        </h2>
                        <p className="text-base sm:text-lg text-gray-700 mb-8 max-w-2xl mx-auto px-4">
                            Si vous avez besoin d'aide ou si vous ne trouvez pas votre colis, notre équipe est là pour vous assister.
                        </p>
                        <Link href="/contact" passHref>
                            <motion.button
                                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 sm:py-4 px-10 rounded-full text-lg sm:text-xl shadow-lg hover:shadow-xl transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Contactez le Support Client
                            </motion.button>
                        </Link>
                    </motion.div>
                )}
            </div>
        </>
    );
}
