import React from 'react';

const SeafoodBanner = () => {
    return (
        <div
            className="relative h-[850px] bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: 'url(/assets/hero.jpg)' }}
        >
            {/* Overlay */}
            <div className="absolute inset-0"></div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center mt-72">
                    <h1 className="text-white text-5xl font-bold md:text-7xl">
                        Fresh from Indonesian Sea to the World
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default SeafoodBanner;
