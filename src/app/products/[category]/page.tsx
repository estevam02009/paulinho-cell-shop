// Exemplo em app/products/[category]/page.tsx (o mesmo se aplica a app/page.tsx)
import { Product } from '../../(data)/products';
import products from '../../(data)/products';
import ProductCard from '../../(components)/ProductCard';

interface Props {
    params: { category: string };
    searchParams: { [key: string]: string | string[] | undefined }; // For filtering/sorting
}

const CategoryPage = ({ params, searchParams }: Props) => {
    const { category } = params;

    const filteredProducts = products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
    );

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">
                {category.charAt(0).toUpperCase() + category.slice(1)}
            </h2>
            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> {/* Ajuste das colunas */}
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <p>No products found in this category.</p>
            )}
            {/* Adicione aqui os controles de filtragem e ordenação responsivos */}
        </div>
    );
};

export default CategoryPage;