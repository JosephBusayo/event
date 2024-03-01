import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Carousel() {
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

    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={`bg-white rounded-full w-13 h-13 absolute top-1/2 left-4`}
                style={{ ...style, zIndex: 1, transform: 'translateY(-50%)' }}
                onClick={onClick}
            >
                <i className="dark:text-black ri-arrow-drop-left-fill text-6xl"></i>
            </div>
        );
    };

    const SampleNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={`bg-white rounded-full w-13 h-13 absolute top-1/2 right-4`}
                style={{ ...style, zIndex: 1, transform: 'translateY(-50%)' }}
                onClick={onClick}
            >
                <i className="dark:text-black ri-arrow-drop-right-fill text-6xl"></i>
            </div>
        );
    };




    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
    };

    return (
        <section className='my-10 pb-20 dark:bg-primaryColor bg-white'>
            <Slider {...settings}>
                {demo_img.map((image, index) => (
                    <div key={index} className='custom-card px-4 py-4 dark:bg-primaryColor lg:hover:cursor-grab'>
                        <div className='bg-white lg:w-[320px] h-[450px] rounded-xl bg-transparent drop-shadow-lg dark:drop-shadow-[0_3px_3px_rgba(255,255,255,0.2)] dark:bg-primaryColor'>
                            <div className='rounded-xl h-80'>
                                <img src={image.img_link} alt={`image ${index}`} className='h-80 rounded-t-2xl w-full' />
                            </div>
                            <div className='flex flex-col justify-center items-center gap-4 p-4'>
                                <p className='text-2xl font-bold'>{image.title}</p>
                                <p className='text-sm text-center'>{image.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
}

export default Carousel;
