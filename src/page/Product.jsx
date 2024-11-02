import React from 'react';
import { motion } from 'framer-motion';

// Image Imports (replace with your own image paths)
import LeaderImage from '/assets/cumisegar.jpg';  // Replace with actual image paths
import PartnerImage from '/assets/cumisegar.jpg';
import ProductImage from '/assets/cumisegar.jpg';
import QualityImage from '/assets/cumisegar.jpg';

const items = [
    { id: 1, title: "LEADER", subtitle: "Seafood", image: LeaderImage },
    { id: 2, title: "PARTNER", subtitle: "Sustainable", image: PartnerImage },
    { id: 3, title: "PRODUCT", subtitle: "World Class", image: ProductImage },
    { id: 4, title: "QUALITY", subtitle: "Control", image: QualityImage },
];

const Product = () => {
    return (
        <section className="py-12">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {items.map(item => (
                        <motion.div
                            key={item.id}
                            className="relative group"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Background Image */}
                            <div 
                                className="h-72 bg-cover bg-center rounded-lg shadow-lg overflow-hidden"
                                style={{ backgroundImage: `url(${item.image})` }}
                            ></div>

                            {/* Overlay Text */}
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h2 className="text-3xl font-bold">{item.title}</h2>
                                <p className="text-lg">{item.subtitle}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Product;
