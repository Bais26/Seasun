// import React from 'react'
// import BannerImg from '/assets/banner1.jpg'
// import { motion } from 'framer-motion'
// import { FadeUp } from '../utility/animation'

// function Banner() {
//     return (
//         <section className='bg-second '>
//             <div className='py-12 container mx-auto items-center text-center'>
//                 <motion.h3
//                     variants={FadeUp(0.3)}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true }}
//                     className='text-thd font-poppins font-medium text-3xl mb-3'>Welcome</motion.h3>
//                 <motion.h1 
//                 variants={FadeUp(0.3)}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 className='font-averia text-5xl'>SeaSun International</motion.h1>
//                 <div className='container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space_y_0 py-14'>
//                     <div className='flex items-center justify-center'>
//                         <motion.img src={BannerImg} alt=""
//                             initial={{ opacity: 0, scale: 0.5 }}
//                             whileInView={{ opacity: 1, scale: 1 }}
//                             transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
//                             viewport={{ once: true }}
//                             className='w-[500px] md:max-w-[600px] h-full object-cover' />
//                     </div>
//                     <div className='flex flex-col'>
//                         <div className=' md:text-left space-y-4 lg:max-w[400px]'>
//                             <motion.p
//                                 variants={FadeUp(0.6)}
//                                 initial="hidden"
//                                 whileInView="visible"
//                                 viewport={{ once: true }}
//                                 className='text-xl font-poppins'>SeaSun International is a leading exporter of high-quality squid based in Tegal, Central Java, Indonesia. With a commitment to quality and sustainability, we have established ourselves as a trusted partner for squid distribution across international markets.</motion.p>
//                             <motion.div
//                                 variants={FadeUp(0.9)}
//                                 initial="hidden"
//                                 whileInView="visible"
//                                 viewport={{ once: true }}
//                                 className='flex justify-center md:justify-start'>
//                                 <button className='primary-button flex items-center gap-2'>
//                                     Read More
//                                 </button>
//                             </motion.div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Banner
import React from 'react';

function Banner() {
    return (
        <section className="bg-gray-100">
            <div className="py-9 px-8 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-left mb-8">
                    <h3 className="text-xl text-black tracking-widest uppercase">Welcome</h3>
                    <h1 className="text-4xl md:text-5xl font-bold text-black mt-2">
                        SeaSun International
                    </h1>
                    <p className="text-xl text-black mt-4 leading-relaxed">
                    SeaSun International is a leading exporter of high-quality squid based in Tegal, Central Java, Indonesia. With a commitment to quality and sustainability, we have established ourselves as a trusted partner for squid distribution across international markets.
                    </p>
                </div>

                {/* Image Cards and Stats */}
                <div className="flex flex-col md:flex-row md:justify-between items-center">
                    {/* Image Cards */}
                    <div className="flex justify-center md:justify-start gap-4 mb-8 md:mb-0">
                        <div className="h-60 w-40 md:h-96 md:w-60 bg-gray-200 rounded overflow-hidden">
                            <img src="assets/img1.jpg" alt="Design 1" className="object-cover h-full w-full" />
                        </div>
                        <div className="h-60 w-40 md:h-96 md:w-60 bg-gray-200 rounded overflow-hidden">
                            <img src="assets/img2.jpg" alt="Design 2" className="object-cover h-full w-full" />
                        </div>
                        <div className="h-48 w-40 md:h-64 md:w-60 bg-gray-200 rounded-tr-2xl overflow-hidden md:block hidden">
                            <img src="assets/img3.jpg" alt="Design 3" className="object-cover h-full w-full" />
                        </div>
                    </div>

                    {/* Stats and Learn More Button */}
                    <div className="text-center md:text-left mt-8 ml-12 md:mt-0">
                        <button className="px-8 py-2 mb-6 border border-black rounded-full text-black hover:bg-black hover:text-white transition">
                            <a href="/about">ABOUT</a>
                        </button>
                        <div className="flex justify-center md:justify-start gap-8">
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold text-black">100+</h2>
                                <p className="text-sm text-gray-600 tracking-wider">FISHING VESSEL PARTNER</p>
                            </div>
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold text-black">20+</h2>
                                <p className="text-sm text-gray-600 tracking-wider">COLD STORAGE PARTNER</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
