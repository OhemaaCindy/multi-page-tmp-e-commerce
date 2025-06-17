import Header from "../components/header";
import ItemsSection from "../components/items-section";
import Speakersection from "../components/speaker-section";
import Zx7speaker from "../components/zx7-speaker";
// import ItemsSection from "../components/items-section";
// import Speakersection from "../components/speaker-section";
import { useProducts } from "../hooks/api.hooks";
import type { Product } from "../schemas/productSchema";
import { Link } from "react-router";

export default function Home() {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) return <p className="p-4">Loading products...</p>;
  if (error)
    return <p className="p-4 text-red-500">Failed to load products.</p>;

  return (
    // <div className="m-auto ">
    //   <Header />
    //   <ItemsSection />
    //   <Speakersection />
    //       </div>
    <main>
      <Header />
      <ItemsSection />
      <Speakersection />
      <Zx7speaker />
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products?.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      <Link to={`/products/${product.slug}`}>
        <img
          src={product.image.desktop}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <p className="text-xs text-gray-500 uppercase tracking-widest">
            {product.category}
          </p>
          <h2 className="text-lg font-semibold mt-1">{product.name}</h2>
          <p className="text-sm text-gray-600 mt-1">
            ${product.price.toLocaleString()}
          </p>
        </div>
      </Link>
    </div>
  );
};
