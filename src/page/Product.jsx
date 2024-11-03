import React from 'react';
// import { motion } from 'framer-motion';

// // Image Imports (replace with your own image paths)
// import LeaderImage from '/assets/cumisegar.jpg';  // Replace with actual image paths
// import PartnerImage from '/assets/cumisegar.jpg';
// import ProductImage from '/assets/cumisegar.jpg';
// import QualityImage from '/assets/cumisegar.jpg';

// const items = [
//     { id: 1, title: "LEADER", subtitle: "Seafood", image: LeaderImage },
//     { id: 2, title: "PARTNER", subtitle: "Sustainable", image: PartnerImage },
//     { id: 3, title: "PRODUCT", subtitle: "World Class", image: ProductImage },
//     { id: 4, title: "QUALITY", subtitle: "Control", image: QualityImage },
// ];

const Product = () => {
    return (
        // <section className="py-12">
        //     <div className="container mx-auto">
        //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        //             {items.map(item => (
        //                 <motion.div
        //                     key={item.id}
        //                     className="relative group"
        //                     whileHover={{ scale: 1.05 }}
        //                     transition={{ duration: 0.3 }}
        //                 >
        //                     {/* Background Image */}
        //                     <div 
        //                         className="h-72 bg-cover bg-center rounded-lg shadow-lg overflow-hidden"
        //                         style={{ backgroundImage: `url(${item.image})` }}
        //                     ></div>

        //                     {/* Overlay Text */}
        //                     <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        //                         <h2 className="text-3xl font-bold">{item.title}</h2>
        //                         <p className="text-lg">{item.subtitle}</p>
        //                     </div>
        //                 </motion.div>
        //             ))}
        //         </div>
        //     </div>
        // </section>
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto flex flex-wrap">
                <div class="flex flex-wrap w-full justify-between">
                    <div class="lg:w-3/5 md:w-1/2 md:pr-10 md:py-6">
                    <div className='mb-8'>
                        <h2 className='uppercase text-4xl font-semibold'>
                            why must our squid ?
                        </h2>
                    </div>
                        <div class="flex relative pb-12">
                            <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                            </div>
                            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 inline-flex items-center justify-center text-white relative z-10">
                            <i class="fa-regular fa-star"></i>
                            </div>
                            <div class="flex-grow pl-4">
                                <h2 class="font-medium title-font text-lg text-gray-900 mb-1 tracking-wider">High Quality</h2>
                                <p class="leading-relaxed">Our location is situated in a rapidly growing fishing industry area, where all handling can be done quickly and systematically. Supported by fishing vessels equipped with cold storage, we ensure the quality of squid is maintained from the initial catch until it reaches you.</p>
                            </div>
                        </div>
                        <div class="flex relative pb-12">
                            <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                            </div>
                            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 inline-flex items-center justify-center text-white relative z-10">
                            <i class="fa-solid fa-sack-dollar"></i>
                            </div>
                            <div class="flex-grow pl-4">
                                <h2 class="font-medium title-font text-lg text-gray-900 mb-1 tracking-wider">Competitive Price</h2>
                                <p class="leading-relaxed">Comes directly from primary sources and first-hand suppliers, ensuring unmatched freshness and quality. By sourcing directly, we offer competitive prices while maintaining the highest standards, delivering squid that meets your needs at the best value.</p>
                            </div>
                        </div>
                        <div class="flex relative pb-12">
                            <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                            </div>
                            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 inline-flex items-center justify-center text-white relative z-10">
                            <i class="fa-solid fa-recycle"></i>
                            </div>
                            <div class="flex-grow pl-4">
                                <h2 class="font-medium title-font text-lg text-gray-900 mb-1 tracking-wider">Sustainability</h2>
                                <p class="leading-relaxed">SeaSun International prioritizes sustainability. Sourced responsibly and with care for marine ecosystems, we ensure that our practices support long-term environmental health while delivering high-quality products to you.</p>
                            </div>
                        </div>
                        <div class="flex relative pb-12">
                            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 inline-flex items-center justify-center text-white relative z-10">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div class="flex-grow pl-4">
                                <h2 class="font-medium title-font text-lg text-gray-900 mb-1 tracking-wider">Client Oriented</h2>
                                <p class="leading-relaxed">SeaSun International focuses on providing added value and meeting clients' specific needs. With our commitment to ensuring that all client requirements are met to the best of our ability as good as possible, we guarantee that every product delivers the best possible experience for our clients.</p>
                            </div>
                        </div>
                    </div>
                    <img class="lg:w-[500px] h-[650px] md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src="assets/banner.jpg" alt="step" />
                </div>
            </div>
        </section>
    );
};

export default Product;
