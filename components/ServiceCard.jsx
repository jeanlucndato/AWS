// components/ServiceCard.jsx
import React from 'react'; // It's good practice to import React when using JSX
import { motion } from 'framer-motion';
// Removed FaHandshake import as it was misused for every feature bullet.
// Instead, using a simple SVG checkmark for features.
// If you specifically need an icon from react-icons for the features,
// import the desired icon (e.g., { FaCheckCircle } from 'react-icons/fa';)
// and use <FaCheckCircle /> instead of the SVG.

function ServiceCard({ icon: Icon, title, description, features, colorClass }) { // Added colorClass prop
    return (
        <motion.div
            className="bg-white p-8 rounded-xl shadow-lg border border-blue-100 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ boxShadow: "0 10px 15px rgba(0,0,0,0.1)" }}
        >
            {/* The main service icon */}
            <div className={`mb-5 p-4 rounded-full bg-blue-50 ${colorClass || 'text-blue-600'}`}>
                <Icon className="text-4xl" /> {/* Uses the passed 'Icon' prop */}
            </div>

            <h3 className="text-3xl font-bold mb-4 text-gray-800">{title}</h3>
            <p className="text-gray-700 mb-6 flex-grow">{description}</p>
            <ul className="text-left text-gray-600 space-y-2 w-full">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                        {/* Using a generic SVG checkmark for list items */}
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}

export default ServiceCard;