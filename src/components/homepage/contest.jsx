import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function PopularEvents() {
    const demo_img = [
        {
            title: "create 1",
            img_link: "https://swiperjs.com/demos/images/nature-1.jpg",
            desc: "lorem ipsumt"
        },
        {
            title: "create 5",
            img_link: "https://swiperjs.com/demos/images/nature-5.jpg",
            desc: "lorem ipsumt"
        },
        {
            title: "create 6",
            img_link: "https://swiperjs.com/demos/images/nature-6.jpg",
            desc: "lorem ipsumt"
        },
        {
            title: "create 7",
            img_link: "https://swiperjs.com/demos/images/nature-7.jpg",
            desc: "lorem ipsumt"
        },
        {
            title: "create 6",
            img_link: "https://swiperjs.com/demos/images/nature-6.jpg",
            desc: "lorem ipsumt"
        },
    ]


    return (
        <section className='my-4 dark:bg-primaryColor bg-primaryColorWhite pt-2 flex flex-col gap-4 justify-center'>
            <h1 className='text-center font-black text-3xl lg:text-4xl leading-10 pb-6'>Online Contests</h1>

            <div className='flex flex-col lg:flex-row flex-wrap'>
                {demo_img.map((image, index) => (
                    <div key={index} className='custom-card px-4 py-4 dark:bg-primaryColor'>
                        <div className='bg-white lg:w-[320px] rounded-xl p-4 bg-transparent drop-shadow-lg dark:drop-shadow-[0_3px_3px_rgba(255,255,255,0.2)] dark:bg-primaryColor flex flex-col gap-2'>

                            <div className='flex justify-between'>
                                <i class="ri-image-circle-line text-3xl"></i>
                                <i class="ri-more-fill text-3xl"></i>
                            </div>

                            <div className='rounded-xl h-80'>
                                <img src={image.img_link} alt={`image ${index}`} className='h-80 rounded-t-2xl w-full' />
                            </div>

                            <div className='flex flex-col justify-between gap-4 p-4'>
                                <p className='text-2xl flex-1 font-bold'>{image.title}</p>
                                <p className='text-sm'>{image.desc}</p>
                            </div>

                            <div className='flex justify-center'>
                                <button type="button" class="py-2 px-8 w-fit text-xl text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">view</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}

export default PopularEvents;
