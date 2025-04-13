import ProductCard from './(components)/ProductCard';
import products from './(data)/products';
import Link from 'next/link';

const HomePage = () => {
  const featuredProducts = products.slice(0, 16); // Example: Display first 4 products

  // Get unique categories
  const categories = [...new Set(products.map((product) => product.category))];

  return (
      <div>
        <section className="py-8">
          <h2 className="text-2xl font-bold mb-4">Produtos em destaque</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className="py-8">
          <h2 className="text-2xl font-bold mb-4">Comprar por categoria</h2>
          <div className="flex gap-4">
            {categories.map((category) => (
                <Link key={category} href={`/products/${category}`} className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Link>
            ))}
          </div>
        </section>

        {/* Add promotional banners here */}
      </div>
  );
};

export default HomePage;