import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Blogs() {
    const demo_img = [
        {
            title: "The Origins of Afrobeats: How Fela created a new sounf 1",
            img_link: "https://swiperjs.com/demos/images/nature-1.jpg",
            desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit",
            date : "23 August, 1993"
        },
        {
            title: "The Origins of Afrobeats: How Fela created a new sounf 2",
            img_link: "https://swiperjs.com/demos/images/nature-2.jpg",
            desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit",
            date : "23 August, 1993"
        },
        {
            title: "The Origins of Afrobeats: How Fela created a new sounf 3",
            img_link: "https://swiperjs.com/demos/images/nature-3.jpg",
            desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit",
            date : "23 August, 1993"
        },
        {
            title: "The Origins of Afrobeats: How Fela created a new sounf 4",
            img_link: "https://swiperjs.com/demos/images/nature-4.jpg",
            desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit",
            date : "23 August, 1993"
        },
        {
            title: "The Origins of Afrobeats: How Fela created a new sounf 5",
            img_link: "https://swiperjs.com/demos/images/nature-5.jpg",
            desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit",
            date : "23 August, 1993"
        },
        {
            title: "The Origins of Afrobeats: How Fela created a new sounf 6",
            img_link: "https://swiperjs.com/demos/images/nature-6.jpg",
            desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit",
            date : "23 August, 1993"
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
        <section id="blog" className='my-10 pb-20 pt-10 dark:bg-primaryColor bg-white'>
            <h1 className='text-center font-black text-3xl lg:text-4xl leading-10 pb-6'>Blogs</h1>

            <Slider {...settings}>
                {demo_img.map((image, index) => (
                    <div key={index} className='h-fit custom-card px-4 py-2 dark:bg-primaryColor lg:hover:cursor-grab'>
                        <div className='bg-white lg:w-[320px] h-[550px] rounded-xl bg-transparent drop-shadow-lg dark:drop-shadow-[0_3px_3px_rgba(255,255,255,0.2)] dark:bg-primaryColor'>
                            <div className='rounded-xl h-fit'>
                                <img src={image.img_link} alt={`image ${index}`} className='h-60 rounded-t-2xl w-full' />
                            </div>
                            <div className='flex flex-col justify-center items-center gap-4 p-4'>
                                <p className='text-2xl font-bold'>{image.title}</p>
                                <p className='text-sm text-center'>{image.desc}</p>
                                <p className='text-sm text-center'>{image.date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
}

export default Blogs;
