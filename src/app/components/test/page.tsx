'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Define an interface to match your product schema
interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  size?: string;
  length?: number;
  width?: number;
  height?: number;
  is_box: boolean;
  pieces_per_box: number;
  duration?: number;
  colors?: string[];
  scents?: string[];
  customizable: boolean;
  available: boolean;
  images?: string[];
  piece_price?: number;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('/api/test');
        
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        
        const data: Product[] = await response.json();
        setProducts(data);
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (isLoading) {
    return <div> Loading products...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Our Products</h1>
      
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              
              {product.images && product.images.length > 0 && (
                <div className="mb-4">
                  <Image 
                    src={product.images[0]} 
                    alt={product.name} 
                    width={300} 
                    height={200} 
                    className="w-full h-48 object-cover rounded"
                  />
                </div>
              )}
              
              <div className="space-y-2">
                {product.description && (
                  <p className="text-gray-600">{product.description}</p>
                )}
                
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">
                    ${product.price}
                  </span>
                  
                  {product.available ? (
                    <span className="text-green-600">In Stock</span>
                  ) : (
                    <span className="text-red-600">Out of Stock</span>
                  )}
                </div>
                
                {product.customizable && (
                  <div className="text-sm text-blue-600">
                    Customizable Product
                  </div>
                )}
                
                {product.colors && product.colors.length > 0 && (
                  <div>
                    <p className="text-sm">Available Colors:</p>
                    <div className="flex space-x-2 mt-1">
                      {product.colors.map((color) => (
                        <span 
                          key={color} 
                          className="inline-block w-4 h-4 rounded-full"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}