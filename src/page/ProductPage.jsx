// src/pages/ProductPage.jsx
import React, { useState } from 'react';

const products = {
  A: [
    { id: 1, grade: '2A', size: '21 – 30 cm' },
    { id: 2, grade: '3A', size: '18 – 20 cm' },
    { id: 3, grade: '4A', size: '15 – 17 cm' },
    { id: 4, grade: '5A', size: '< 14 cm' },
    { id: 5, grade: 'Costumize Size', size: 'Variation' },

  ],
  B: [
    { id: 1, grade: '2B', size: '21 – 30 cm' },
    { id: 2, grade: '3B', size: '18 – 20 cm' },
    { id: 3, grade: '4B', size: '15 – 17 cm' },
    { id: 4, grade: '5B', size: '< 14 cm' },
    { id: 5, grade: 'Costumize Size', size: 'Variation' },
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
            <button className="bg-gray-400 hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded-full">
              <a href="#outproduct">Explore Our Products</a>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center my-8">
          <h2 className="text-2xl font-semibold mb-4">Choose Your Grade</h2>
          <div className="flex justify-center">
            <button
              className={`px-4 py-2 mr-2 font-semibold rounded-xl ${selectedGrade === 'A' ? 'bg-black text-white' : 'bg-gray-300'}`}
              onClick={() => setSelectedGrade('A')}
            >
              Grade A
            </button>
            <button
              className={`px-4 py-2 font-semibold rounded-xl ${selectedGrade === 'B' ? 'bg-black text-white' : 'bg-gray-300'}`}
              onClick={() => setSelectedGrade('B')}
            >
              Grade B
            </button>
          </div>
        </div>

        {/* Table Display */}
        <div className="overflow-x-auto py-12 px-6">
          <table className="w-full max-w-screen-2xl mx-auto border-collapse border border-gray-200">
            <thead>
              <tr className="bg-yellow-500 text-white">
                <th className="border border-gray-200 px-4 py-2">Type</th>
                <th className="border border-gray-200 px-4 py-2">Size</th>
              </tr>
            </thead>
            <tbody>
              {products[selectedGrade].map((product) => (
                <tr key={product.id} className="bg-blue-200 text-center">
                  <td className="border border-gray-200 px-4 py-2">{product.grade}</td>
                  <td className="border border-gray-200 px-4 py-2">{product.size}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* gallery */}
      <div>
        <h1 className="text-center text-3xl font-bold mb-8">Gallery Product</h1>
        <div className="max-w-screen-2xl mx-auto grid grid-cols-2 md:grid-cols-4 my-6 gap-4 items-center justify-center">
          <div className="grid gap-4 justify-items-center">
            <img className="h-auto rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
            <img className="h-auto rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
          </div>
          <div className="grid gap-4 justify-items-center">
            <img className="h-auto rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
            <img className="h-auto rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="" />
          </div>
          <div className="grid gap-4 justify-items-center">
            <img className="h-auto rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="" />
            <img className="h-auto rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" />
          </div>
          <div className="grid gap-4 justify-items-center">
            <img className="h-auto rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
            <img className="h-auto rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
