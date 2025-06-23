// components/ServiceCard.jsx
import { motion } from 'framer-motion';
import { FaHandshake } from 'react-icons/fa'; // Icône pour les fonctionnalités

function ServiceCard({ icon: Icon, title, description, features }) {
    return (
        <motion.div
            className="bg-white p-8 rounded-lg shadow-xl border border-blue-100 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.03, boxShadow: "0 10px 15px rgba(0,0,0,0.1)" }}
        >
            <Icon className="text-blue-600 text-6xl mb-6" />
            <h3 className="text-3xl font-bold mb-4 text-gray-800">{title}</h3>
            <p className="text-gray-700 mb-6 flex-grow">{description}</p>
            <ul className="text-left text-gray-600 space-y-2 w-full">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                        <FaHandshake className="text-green-500 mr-2" /> {feature}
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}

export default ServiceCard;