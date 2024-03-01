import { React, useState, useEffect } from 'react';
import Blogs from '../components/homepage/blogs'
import Carousel from '../components/homepage/carousel.jsx'
import Category from '../components/homepage/category'
import Contest from '../components/homepage/contest'
import Hero from '../components/homepage/Hero.jsx'
import PopularEvents from '../components/homepage/PopularEvents';
import {Footer} from '../components/Footer.jsx'

export function Home({ theme }) {
    console.log(theme)

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [theme])
    return (
        <section class="bg-primaryColorLight w-full dark:bg-primaryColor mx-auto h-screen ">
            <Hero />
            <Carousel />
            <Category />
            <PopularEvents />
            <Contest />
            <Blogs />
            <Footer />

        </section>
    )
}
