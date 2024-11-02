import React from 'react';

const About = () => {
    return (
        <section className="bg-gray-100 text-gray-900 py-16">
            {/* Container */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-gray-800">Welcome to SeaSun International</h1>
                    <p className="mt-4 text-md text-gray-600">Bringing the best of the ocean to your places</p>
                </div>

                {/* Content Section */}
                <div className="flex flex-col lg:flex-row items-center">
                    {/* Image Section */}
                    <div className="lg:w-1/2 mb-8 lg:mb-0 lg:mr-8">
                        <img
                            src="/assets/gallery/image2.jpg"
                            alt="Seafood"
                            className="rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="lg:w-1/2">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4"><span className='p-1 bg-gray-600 text-white rounded-full px-3'>About</span> <br />
                        <p className='mt-2'>SeaSun International</p></h2>
                        <p className="text-gray-600 mb-6">
                            At SeaSun International, we take pride in being a leading provider of premium frozen squid products,
                            delivering the freshest flavors of the ocean to customers around the globe. With a commitment to
                            sustainability and quality, we source our squid from the pristine waters of Indonesia, ensuring that
                            every product meets the highest industry standards.
                        </p>
                        <p className="text-gray-600 mb-6">
                            Our team of experts is dedicated to maintaining the integrity of our squid from the moment it’s caught
                            until it reaches your establishment. Whether you’re a retailer, restaurant, or food service provider, we
                            offer a diverse range of squid products tailored to meet your needs.
                        </p>
                        <p className="text-gray-600 mb-6">
                            Join us on our journey to bring the best of the sea to your culinary creations. At SeaSun International,
                            we’re not just about products; we’re about creating lasting partnerships and delivering exceptional value.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
