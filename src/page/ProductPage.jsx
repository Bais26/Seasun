// src/pages/ProductPage.jsx
import React, { useState } from 'react';

const products = {
  A: [
    { id: 1, grade: '2A', size: '21-30cm', image: '/assets/cumi1.png' },
    { id: 2, grade: '3A', size: '18-20cm', image: '/assets/cumi1.png' },
    { id: 3, grade: '4A', size: '15-17cm', image: '/assets/cumi1.png' },
    { id: 4, grade: '5A', size: '12-14cm', image: '/assets/cumi1.png' },
  ],
  B: [
    { id: 5, grade: '2B', size: '21-30cm', image: '/assets/cumi1.png' },
    { id: 6, grade: '3B', size: '18-20cm', image: '/assets/cumi1.png' },
    { id: 7, grade: '4B', size: '15-17cm', image: '/assets/cumi1.png' },
    { id: 8, grade: '5B', size: '12-14cm', image: '/assets/cumi1.png' },
    { id: 9, grade: 'Cuttlefish', size: '', image: '/assets/cumi1.png' },
  ]
};

const ProductPage = () => {
  const [selectedGrade, setSelectedGrade] = useState('A');

  return (
    <div>

      <div
        className="relative h-[800px] bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: 'url(/assets/heroproduct.jpg)' }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-white">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Premium Product Selection</h1>
            <p className="text-lg mb-6">
              Discover our high-quality Grade A and Grade B products, tailored for your specific needs.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <a href="#outproduct">Explore Our Products</a>
            </button>
          </div>
        </div>
      </div>

      <div className="text-center my-8 z-10">
      <h2 className="text-2xl font-semibold mb-4">Choose Your Grade</h2>
      <div className="flex justify-center">
        <button
          className={`px-4 py-2 mr-2 font-semibold ${selectedGrade === 'A' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          onClick={() => setSelectedGrade('A')}
        >
          Grade A
        </button>
        <button
          className={`px-4 py-2 font-semibold ${selectedGrade === 'B' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          onClick={() => setSelectedGrade('B')}
        >
          Grade B
        </button>
      </div>
    </div>
    <div id='outproduct' className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products[selectedGrade].map((product) => (
        <div key={product.id} className="border rounded-lg shadow-lg overflow-hidden bg-white">
          <img src={`${product.image}`} alt={product.grade} className="w-full h-80 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{product.grade}</h3>
            <p className="text-sm text-gray-500">Size: {product.size}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ProductPage;
