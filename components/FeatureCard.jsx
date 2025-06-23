// components/FeatureCard.jsx
import { motion } from 'framer-motion';

function FeatureCard({ icon: Icon, title, description }) {
    return (
        <motion.div
            className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-200"
            whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.15)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <Icon className="text-blue-600 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </motion.div>
    );
}

export default FeatureCard;