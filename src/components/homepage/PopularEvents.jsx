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
        <section className='my-10 dark:bg-primaryColor bg-white pt-10 pb-10 flex flex-col gap-4 justify-center w-fit'>
            <h1 className='text-center font-black text-3xl lg:text-4xl leading-10'>Popular Events</h1>

            <div className='flex flex-col lg:flex-row flex-wrap'>
                {demo_img.map((image, index) => (
                    <div key={index} className='custom-card px-4 py-4 dark:bg-primaryColor'>
                        <div className='bg-white lg:w-[320px] rounded-xl p-4 bg-transparent drop-shadow-lg dark:drop-shadow-[0_3px_3px_rgba(255,255,255,0.2)] dark:bg-primaryColor flex flex-col gap-2'>

                            <div className='flex justify-between'>
                                <i className="ri-image-circle-line text-3xl"></i>
                                <i className="ri-more-fill text-3xl"></i>
                            </div>

                            <div className='rounded-xl h-80'>
                                <img src={image.img_link} alt={`image ${index}`} className='h-80 rounded-t-2xl w-full' />
                            </div>

                            <div className='flex justify-between items-center gap-4 p-4'>
                                <p className='text-2xl flex-1 font-bold'>{image.title}</p>
                                <p className='text-sm text-center'>{image.desc}</p>
                            </div>

                            <div className='flex justify-center'>
                                <button type="button" className="py-2.5 px-5 w-fit text-sm text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">View event</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center">

                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">More events</button>
            </div>
        </section>
    );
}

export default PopularEvents;
