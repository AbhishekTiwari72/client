// pages/products.js

import React from "react";

const Products = () => {
  // Example product data
  const products = [
    { id: 1, name: "Product 1", price: "$19.99", image: "/product1.jpg" },
    { id: 2, name: "Product 2", price: "$29.99", image: "/product2.jpg" },
    // Add more products as needed
  ];

  return (
    <div className="mx-auto px-4"> {/* Use className to apply Tailwind CSS classes */}
      <div >
        {products.map((product) => (
          <div key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="h-64 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">{product.name}</h2>
              <p className="text-gray-600">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
