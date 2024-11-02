import React from 'react';

function Banner() {
    return (
        <section className="bg-gray-100">
            <div className="py-16 px-8 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-left mb-8">
                    <h3 className="text-sm text-black tracking-widest">ABOUT</h3>
                    <h1 className="text-3xl md:text-4xl font-bold text-black mt-2">
                        Welcome to the world of design we created.
                    </h1>
                    <p className="text-md text-black mt-4 leading-relaxed">
                        We are space crafters who bring dreams to life in design. With a touch of creativity
                        and care, we design spaces that speak for your lifestyle. Our inspiration comes
                        from the beauty of the surroundings and the uniqueness of each individual.
                        We are committed to transforming every space into a place that is beautiful,
                        functional, and harmonious.
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
                    <div className="text-center md:text-left mt-8 md:mt-0">
                        <button className="px-8 py-2 mb-6 border border-black rounded-full text-black hover:bg-black hover:text-white transition">
                            <a href="/about">LEARN ABOUT</a>
                        </button>
                        <div className="flex justify-center md:justify-start gap-8">
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold text-black">2K+</h2>
                                <p className="text-sm text-gray-600 tracking-wider">PROJECTS DONE</p>
                            </div>
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold text-black">20+</h2>
                                <p className="text-sm text-gray-600 tracking-wider">PRO TEAMS</p>
                            </div>
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold text-black">300+</h2>
                                <p className="text-sm text-gray-600 tracking-wider">GLOBAL CLIENTS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
