'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MinusIcon, XMarkIcon } from '@heroicons/react/24/outline'; // Certifique-se de instalar @heroicons/react

const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            router.push(`/search?query=${searchTerm}`);
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-red-700 py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold text-gray-50 hover:text-gray-400 transition-transform transform hover:scale-110 duration-300">
                    Paulinho Cell Shop
                </Link>

                {/* Menu para telas maiores */}
                <div className="hidden md:flex items-center space-x-4">
                    <Link href="/products/smartphones" className="text-gray-50 hover:text-gray-400 transition-transform transform hover:scale-110 duration-300">Smartphones</Link>
                    <Link href="/products/acessorios" className="text-gray-50 hover:text-gray-400 transition-transform transform hover:scale-110 duration-300">Acessórios</Link>
                    <form onSubmit={handleSearch} className="flex items-center">
                        <input
                            type="text"
                            placeholder="Pesquisar..."
                            className="border border-gray-300 rounded-md px-3 py-2 mr-2 bg-gray-100"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                            Pesquisar
                        </button>
                    </form>
                    {/* <Link href="/cart" className="relative text-gray-50 hover:text-blue-500">
                        Carrinho (0)
                    </Link> */}
                </div>

                {/* Menu para telas menores */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMobileMenu} className="text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        {isMobileMenuOpen ? (
                            <XMarkIcon className="h-6 w-6" />
                        ) : (
                            <MinusIcon className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Menu mobile (colapsado) */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-gray-100 py-2 px-4">
                    <Link href="/products/smartphones" className="block py-2 hover:text-blue-500">Smartphones</Link>
                    <Link href="/products/acessorios" className="block py-2 hover:text-blue-500">Acessorios</Link>
                    <form onSubmit={handleSearch} className="flex items-center mt-2">
                        <input
                            type="text"
                            placeholder="Pesquisar..."
                            className="border border-gray-300 rounded-md px-3 py-2 mr-2 w-full"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                            Pesquisar
                        </button>
                    </form>
                    {/* <Link href="/cart" className="block py-2 hover:text-blue-500">
                        Cart (0)
                    </Link> */}
                </div>
            )}
        </nav>
    );
};

export default Navbar;