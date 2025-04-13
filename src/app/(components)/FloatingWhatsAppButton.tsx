'use client';
import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const FloatingWhatsAppButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const phoneNumber = '+5584991151003'; // Substitua pelo seu número de WhatsApp
    const message = 'Olá! Gostaria de mais informações sobre...'; // Mensagem inicial opcional

    useEffect(() => {
        // Mostra o botão após um pequeno delay para evitar aparição imediata
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000); // 1 segundo

        return () => clearTimeout(timer);
    }, []);

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    if (!isVisible) {
        return null;
    }

    return (
        <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full shadow-lg p-4 z-50 hover:bg-green-600 transition-colors duration-300"
        >
            <FaWhatsapp size={24} />
        </Link>
    );
};

export default FloatingWhatsAppButton;