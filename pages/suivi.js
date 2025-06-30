// pages/tracking.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaBoxOpen, FaClipboardCheck, FaTruckLoading, FaPlaneDeparture, FaShip, FaRegCheckCircle, FaSpinner } from 'react-icons/fa'; // Added FaSpinner for loading state

export default function TrackingPage() {
    const [trackingNumber, setTrackingNumber] = useState('');
    const [trackingStatus, setTrackingStatus] = useState(null); // null, 'loading', 'found', 'notFound'
    const [packageDetails, setPackageDetails] = useState(null);

    const handleTrackingChange = (e) => {
        setTrackingNumber(e.target.value);
    };

    const handleTrackSubmit = async (e) => {
        e.preventDefault();
        setTrackingStatus('loading');
        setPackageDetails(null); // Clear previous details

        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 2000));

        // --- Mock Data Simulation ---
        // In a real application, you would make an API call here:
        // const response = await fetch(`/api/track?number=${trackingNumber}`);
        // const data = await response.json();
        // setPackageDetails(data);

        // For demonstration purposes, let's use some dummy data
        const dummyData = {
            'AWS123456789BE': {
                status: 'delivered',
                origin: 'Bruxelles, Belgique',
                destination: 'Goma, RDC',
                lastUpdate: '25 juin 2025, 14:30 CAT',
                eta: 'Livré',
                history: [
                    { date: '2025-06-25', time: '14:30', location: 'Goma, RDC', description: 'Livré au destinataire.' },
                    { date: '2025-06-25', time: '09:00', location: 'Goma, RDC', description: 'En attente de livraison locale.' },
                    { date: '2025-06-24', time: '18:45', location: 'Aéroport de Goma, RDC', description: 'Arrivé à l\'aéroport de destination.' },
                    { date: '2025-06-23', time: '10:00', location: 'Aéroport de Bruxelles, Belgique', description: 'Départ du vol international.' },
                    { date: '2025-06-22', time: '16:00', location: 'Anderlecht, Belgique', description: 'Colis collecté et en transit vers le hub.' },
                    { date: '2025-06-21', time: '10:00', location: 'Anderlecht, Belgique', description: 'Informations de l\'envoi reçues.' },
                ],
                currentIcon: FaRegCheckCircle,
            },
            'AWS987654321BE': {
                status: 'in_transit',
                origin: 'Bruxelles, Belgique',
                destination: 'Goma, RDC',
                lastUpdate: '20 juin 2025, 10:00 CAT',
                eta: 'Estimé le 05 juillet 2025',
                history: [
                    { date: '2025-06-20', time: '10:00', location: 'En mer', description: 'Colis en transit maritime.' },
                    { date: '2025-06-18', time: '14:00', location: 'Port d\'Anvers, Belgique', description: 'Départ du navire de fret.' },
                    { date: '2025-06-17', time: '11:00', location: 'Anvers, Belgique', description: 'Colis arrivé au port pour chargement.' },
                    { date: '2025-06-16', time: '16:00', location: 'Anderlecht, Belgique', description: 'Colis collecté.' },
                ],
                currentIcon: FaShip,
            },
            'AWS00000000000': null, // Simulates not found
        };

        if (dummyData[trackingNumber]) {
            setPackageDetails(dummyData[trackingNumber]);
            setTrackingStatus('found');
        } else {
            setTrackingStatus('notFound');
        }
        // --- End Mock Data ---
    };

    const statusIcons = {
        'Informations reçues': FaClipboardCheck,
        'Collecté': FaBoxOpen,
        'En transit': FaTruckLoading,
        'Départ international': FaPlaneDeparture,
        'Arrivé à destination': FaTruckLoading, // Could be FaMapMarkerAlt or specific for arrival
        'Livré': FaRegCheckCircle,
        'En mer': FaShip,
        // Add more statuses as needed
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
                    Suivez Votre Colis
                </h1>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                    Entrez votre numéro de suivi pour obtenir des mises à jour en temps réel sur le statut de votre envoi.
                </p>
            </motion.div>

            {/* Tracking Input Section */}
            <motion.div
                className="bg-white p-10 rounded-2xl shadow-xl border border-gray-200 max-w-2xl mx-auto mb-16"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <form onSubmit={handleTrackSubmit} className="flex flex-col sm:flex-row gap-4">
                    <input
                        type="text"
                        value={trackingNumber}
                        onChange={handleTrackingChange}
                        className="flex-grow px-6 py-4 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-gray-800"
                        placeholder="Entrez votre numéro de suivi (ex: AWS123456789BE)"
                        required
                    />
                    <motion.button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg transition-all duration-300 flex items-center justify-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={trackingStatus === 'loading'}
                    >
                        {trackingStatus === 'loading' ? (
                            <>
                                <FaSpinner className="animate-spin mr-3" /> Recherche...
                            </>
                        ) : (
                            <>
                                <FaBoxOpen className="mr-3" /> Suivre le Colis
                            </>
                        )}
                    </motion.button>
                </form>
            </motion.div>

            {/* Tracking Results Section */}
            {trackingStatus === 'loading' && (
                <motion.div
                    className="text-center text-blue-600 text-2xl mt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <FaSpinner className="animate-spin mx-auto mb-4" size={48} />
                    <p>Recherche de votre colis en cours...</p>
                </motion.div>
            )}

            {trackingStatus === 'notFound' && (
                <motion.div
                    className="text-center bg-red-50 border border-red-300 text-red-700 p-8 rounded-lg shadow-md max-w-xl mx-auto mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold mb-4">Colis Non Trouvé</h2>
                    <p className="text-lg">
                        Le numéro de suivi **{trackingNumber}** n'a pas été trouvé. Veuillez vérifier le numéro et réessayer.
                        Si le problème persiste, contactez notre <a href="/contact" className="text-red-800 underline hover:text-red-900">service client</a>.
                    </p>
                </motion.div>
            )}

            {trackingStatus === 'found' && packageDetails && (
                <motion.div
                    className="bg-white p-10 rounded-2xl shadow-xl border border-blue-100 mt-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
                        Statut de votre colis: <span className="text-blue-700">{trackingNumber}</span>
                    </h2>

                    {/* Overview */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 text-center">
                        <div className="p-4 bg-blue-50 rounded-lg shadow-sm">
                            <p className="text-sm text-gray-600">Origine</p>
                            <p className="text-lg font-semibold text-gray-800">{packageDetails.origin}</p>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg shadow-sm">
                            <p className="text-sm text-gray-600">Destination</p>
                            <p className="text-lg font-semibold text-gray-800">{packageDetails.destination}</p>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg shadow-sm">
                            <p className="text-sm text-gray-600">Statut Actuel</p>
                            <div className="flex items-center justify-center text-lg font-semibold text-gray-800">
                                {packageDetails.currentIcon && <packageDetails.currentIcon className="text-3xl mr-2 text-blue-600" />}
                                {packageDetails.status === 'delivered' ? 'Livré' : 'En Transit'}
                            </div>
                        </div>
                    </div>

                    <p className="text-center text-xl text-gray-700 mb-8 font-semibold">
                        Dernière mise à jour: {packageDetails.lastUpdate}
                        <br />
                        ETA: <span className="text-blue-600">{packageDetails.eta}</span>
                    </p>

                    {/* Tracking History Timeline */}
                    <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Historique des Événements</h3>
                    <div className="relative border-l-4 border-blue-200 pl-8">
                        {packageDetails.history.map((event, index) => {
                            const IconComponent = statusIcons[event.description] || FaBoxOpen; // Default icon
                            return (
                                <motion.div
                                    key={index}
                                    className="mb-8 flex items-start -ml-10" // Adjust margin-left for timeline dot
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-white text-lg mr-4 flex-shrink-0 z-10">
                                        <IconComponent />
                                    </div>
                                    <div className="flex-grow">
                                        <p className="text-sm text-gray-500">
                                            {event.date} à {event.time} - {event.location}
                                        </p>
                                        <p className="text-lg font-medium text-gray-800">{event.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            )}

            {/* General Information / Call to Action if not tracking */}
            {!trackingStatus && (
                <motion.div
                    className="text-center mt-20 bg-blue-50 py-12 rounded-xl shadow-inner max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    <h2 className="text-3xl font-bold text-blue-800 mb-4">
                        Des Questions sur votre colis ?
                    </h2>
                    <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                        Si vous avez besoin d'aide ou si vous ne trouvez pas votre colis, notre équipe est là pour vous assister.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        Contactez le Support Client
                    </a>
                </motion.div>
            )}
        </div>
    );
}