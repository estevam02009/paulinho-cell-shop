// import { Product } from '../../(data)/products';
import products from '../../(data)/products';

interface Props {
    params: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined }; // Opcional, mas comum
}

const ProductDetailPage = ({ params }: Props) => {
    const { slug } = params;
    const product = products.find((p) => p.slug === slug);

    if (!product) {
        return <div>Produto não encontrado.</div>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:order-1"> {/* Garante que a imagem fique à esquerda em telas maiores (opcional) */}
                <img src={product.image} alt={product.name} className="w-full rounded-lg shadow-md" />
            </div>
            <div className="md:order-2">
                <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                <p className="text-gray-700 mb-4">${product.price.toFixed(2)}</p>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <h2 className="text-xl font-semibold mb-2">Especificações</h2>
                <ul className="list-disc list-inside mb-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                        <li key={key}>
                            <strong>{key}:</strong> {value}
                        </li>
                    ))}
                </ul>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full">
                    Comprar
                </button>
            </div>
        </div>
    );
};

export default ProductDetailPage;