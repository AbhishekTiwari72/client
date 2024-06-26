'use client';

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

type Product = {
  _id: string;
  product_id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  images: { url: string; alt_text: string }[];
};

const ProductPage = () => {
  const { id } = useParams<{ id: string }>(); // Get the user ID from the route params
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:5000/api/products/${id}`)
        .then((response) => {
          setProduct(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setError("Failed to fetch product details");
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto p-4">
      {product && (
        <>
          <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
          <img
            src={product.images[0].url}
            alt={product.images[0].alt_text}
            className="h-96 w-full object-cover mb-4"
          />
          <p className="text-gray-700 mb-2">{product.description}</p>
          <p className="text-gray-900 font-bold">
            {product.currency} {product.price}
          </p>
        </>
      )}
    </div>
  );
};

export default ProductPage;
