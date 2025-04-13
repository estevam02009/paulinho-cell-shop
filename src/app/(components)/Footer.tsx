import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    const developerName = "<SmartCode/>";
    const developerLink = "https://github.com/estevam02009"; // Opcional: link para seu portfólio

    return (
        <footer className="bg-gray-200 py-8 text-center text-gray-700">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div>
                    <h4 className="font-semibold mb-2">Sobre Nós</h4>
                    <p className="text-sm">Nossa história e missão...</p>
                </div>
                <div className="flex justify-center space-x-4">
                    <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                        <FaFacebook size={36} />
                    </Link>
                    <Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                        <FaTwitter size={36} />
                    </Link>
                    <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
                        <FaInstagram size={36} />
                    </Link>
                    {/* <Link href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
                        <FaLinkedin size={24} />
                    </Link> */}
                </div>
                <div className="flex flex-col items-center md:items-end">
                    <p className="text-sm mb-2">&copy; {new Date().getFullYear()} Paulinho Cell Shop. Todos os direitos reservados.</p>
                    <p className="text-xs text-gray-500">
                        Desenvolvido por{' '}
                        {developerLink ? (
                            <Link href={developerLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                {developerName}
                            </Link>
                        ) : (
                            <span>{developerName}</span>
                        )}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;