// /pages/index.tsx

'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

type Product = {
  _id: string;
  product_id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  images: { url: string; alt_text: string }[];
};

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Failed to fetch products');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const handleCardClick = (id: string) => {
    router.push(`/product/${id}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <div
            key={product._id}
            className="bg-white rounded-lg shadow-md p-4 transition transform hover:-translate-y-1 hover:shadow-lg cursor-pointer"
            onClick={() => handleCardClick(product._id)}
          >
            <img
              src={product.images[0].url}
              alt={product.images[0].alt_text}
              className="h-48 w-full object-cover mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-2">{product.description}</p>
            <p className="text-gray-900 font-bold">
              {product.currency} {product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
