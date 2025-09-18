// Product Card for product management UI
// Future: Add support for variants, reviews, etc.

import React from 'react';

const ProductCard = ({ product }) => (
  <div className="border rounded p-4">
    <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />
    <h3 className="text-lg font-bold">{product.name}</h3>
    <p>{product.description}</p>
    <p className="text-blue-600 font-semibold">${product.price}</p>
  </div>
);

export default ProductCard;
