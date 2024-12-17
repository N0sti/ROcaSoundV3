'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { allProducts } from '../page'

type Product = {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  category: string;
};

export default function ProductsPage() {
  // State for selected category filter
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredAndSortedProducts: Product[] = useMemo(() => {
    // Filter products based on the selected category
    if (selectedCategory === 'all') {
      return allProducts;
    }
    return allProducts.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  // Extract all unique categories from the products
  const categories = useMemo(() => {
    const uniqueCategories = new Set(allProducts.map((product) => product.category));
    return ['all', ...Array.from(uniqueCategories)];
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Dropdown for category selection */}
      <div className="mb-8">
        <label htmlFor="category" className="mr-2 text-lg">Filter by Category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border px-4 py-2 rounded"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredAndSortedProducts.map((product) => (
          <Link key={product.id} href={`/products/${product.slug}`}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold">{product.name} : {product.category}</h2>
                <p className="text-gray-700">{product.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
