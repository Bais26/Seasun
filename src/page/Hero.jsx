import React from 'react';

const SeafoodBanner = () => {
    return (
        <div
        className="relative h-screen bg-no-repeat xl:bg-center bg-left bg-cover"
        style={{ backgroundImage: 'url(/assets/hero.jpg)' }}
    >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center md:justify-start md:ml-12 h-full w-full md:w-1/2">
            <div className="text-center md:text-start px-4 md:px-0">
                <h1 className="text-white text-5xl font-bold md:text-6xl">
                    Fresh from Indonesian Sea to the World
                </h1>
            </div>
        </div>
    </div>
    );
};

export default SeafoodBanner;
