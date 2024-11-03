import React from 'react'

function Banner3() {
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto flex flex-wrap">
                <div className='mb-20 w-full text-center justify-center items-center'>
                    <h1 class="font-medium text-3xl text-gray-900 mb-4">Gallery</h1>
                    <p class="text-xl">Our Real Product</p>
                </div>
                <div class="flex flex-wrap md:-m-2 -m-1">
                    <div class="flex flex-wrap w-1/2">
                        <div class="md:p-2 p-1 w-1/2">
                            <img alt="gallery" class="w-full object-cover h-full object-center block" src="/assets/gallery/image3.jpg" />
                        </div>
                        <div class="md:p-2 p-1 w-1/2">
                            <img alt="gallery" class="w-full object-cover h-full object-center block" src="/assets/gallery/image2.jpg" />
                        </div>
                        <div class="md:p-2 p-1 w-full">
                            <img alt="gallery" class="w-full h-full object-cover object-center block" src="/assets/gallery/image1.jpg" />
                        </div>
                    </div>
                    <div class="flex flex-wrap w-1/2">
                        <div class="md:p-2 p-1 w-full">
                            <img alt="gallery" class="w-full h-full object-cover object-center block" src="/assets/gallery/image4.jpg" />
                        </div>
                        <div class="md:p-2 p-1 w-1/2">
                            <img alt="gallery" class="w-full object-cover h-full object-center block" src="/assets/gallery/image5.jpg" />
                        </div>
                        <div class="md:p-2 p-1 w-1/2">
                            <img alt="gallery" class="w-full object-cover h-full object-center block" src="/assets/gallery/image6.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner3
