import { Product } from '../(data)/products';
import products from '../(data)/products';
import ProductCard from '../(components)/ProductCard';

interface Props {
    searchParams: { query?: string };
}

const SearchResultsPage = ({ searchParams }: Props) => {
    const { query } = searchParams;

    if (!query || query.trim() === '') {
        return <p>Please enter a search term.</p>;
    }

    const searchTerm = query.toLowerCase();
    const searchResults = products.filter(
        (product) =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
    );

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Search Results for "{query}"</h2>
            {searchResults.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {searchResults.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <p>No products found matching your search criteria.</p>
            )}
        </div>
    );
};

export default SearchResultsPage;