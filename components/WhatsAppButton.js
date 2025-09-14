// components/WhatsAppButton.js

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Assurez-vous d'avoir 'react-icons' installé

const WhatsAppButton = () => {
    const phoneNumber = '+32465154669';
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/ /g, '')}`;

    return (
        <a
            href={whatsappUrl}
            className="fixed bottom-5 right-5 z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contacter-nous sur WhatsApp"
        >
            <FaWhatsapp className="text-3xl" />
        </a>
    );
};

export default WhatsAppButton;