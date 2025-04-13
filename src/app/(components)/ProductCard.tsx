import Link from 'next/link';
import { Product } from '../(data)/products';

interface Props {
    product: Product;
}

const ProductCard = ({ product }: Props) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-110 duration-300">
            <Link href={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 truncate">{product.name}</h3> {/* Adicionado truncate para textos longos */}
                    <p className="text-gray-600">R${product.price.toFixed(2)}</p>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;