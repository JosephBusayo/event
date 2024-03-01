import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Category() {
    const demo_img = [
        {
            title: "create 1",
            img_link: "https://swiperjs.com/demos/images/nature-1.jpg",
            desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
        {
            title: "create 2",
            img_link: "https://swiperjs.com/demos/images/nature-2.jpg",
            desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
        {
            title: "create 3",
            img_link: "https://swiperjs.com/demos/images/nature-3.jpg",
            desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
        {
            title: "create 4",
            img_link: "https://swiperjs.com/demos/images/nature-4.jpg",
            desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
        {
            title: "create 5",
            img_link: "https://swiperjs.com/demos/images/nature-5.jpg",
            desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
        {
            title: "create 6",
            img_link: "https://swiperjs.com/demos/images/nature-6.jpg",
            desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
        {
            title: "create 7",
            img_link: "https://swiperjs.com/demos/images/nature-7.jpg",
            desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
    ]


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
        centerMode: true,
        centerMargin: '20px',
    };

    return (
        <section className='my-10 dark:bg-primaryColor bg-primaryColorLight'>
            <h1 className='text-center font-black text-3xl lg:text-4xl leading-10 pb-6'>Browse by category</h1>
            <Slider {...settings}>
                {demo_img.map((image, index) => (
                    <div key={index} className='custom-card px-6 py-4 dark:bg-primaryColor lg:hover:cursor-grab '>
                        <div className='rounded-xl bg-white bg-transparent drop-shadow-lg dark:bg-primaryColor p-4 flex flex-col justify-center items-center gap-4  dark:drop-shadow-[0_3px_3px_rgba(255,255,255,0.2)] '>
                            <img src={image.img_link} alt={`image ${index}`} className='h-40 rounded-t-2xl w-full' />
                            <p className='text-2xl font-bold text-center'>{image.title}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
}

export default Category;
