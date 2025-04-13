import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './(components)/Navbar';
import Footer from './(components)/Footer';
import FloatingWhatsAppButton from './(components)/FloatingWhatsAppButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Paulinho Cell Shop',
    description: 'Sua loja completa para dispositivos móveis e acessórios',
    viewport: 'width=device-width, initial-scale=1.0', // Garante que a largura da página se ajuste à largura do dispositivo
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                {/* Outras meta tags */}
            </head>
            <body className={inter.className}>
                <Navbar />
                <main className="container mx-auto py-8 pt-16">{children}</main>
                <Footer />
                <FloatingWhatsAppButton /> {/* Renderize o componente aqui */}
            </body>
        </html>
    );
}