import React from 'react'
import { Link } from 'react-router-dom'


export function Footer() {
    return (
        <section class="flex flex-col gap-10 px-12 pt-20 my-1 bg-white dark:bg-primaryColor">
            <section class="flex flex-col gap-10 lg:flex-row justify-between">
                <div class="flex flex-col gap-7 flex-1">
                    <h2 class="text-lg font-bold">Hevently</h2>
                    <p class="w-3/5">Create, sell and discover events. Best Events services in Africa</p>
                    <div>
                        <i class="ri-instagram-line"></i>
                        <i class="ri-facebook-fill"></i>
                        <i class="ri-twitter-x-line"></i>
                    </div>
                </div>

                <div class="flex flex-1 flex-col gap-5 lg:flex-row justify-around">
                    <div>
                        <h2 class="font-bold">Events</h2>
                        <p><Link to="/" class="">All Events</Link></p>
                        <p><Link to="/" class="">Contests</Link></p>
                        <p><Link to="/" class="">Dinner Party</Link></p>
                        <p><Link to="/" class="">Music Concert</Link></p>
                    </div>

                    <div>
                        <h2 class="font-bold">Company</h2>
                        <p><Link to="/" class="">All Events</Link></p>
                        <p><Link to="/" class="">Contests</Link></p>
                        <p><Link to="/" class="">Dinner Party</Link></p>
                        <p><Link to="/" class="">Music Concert</Link></p>
                    </div>

                    <div>
                        <h2 class="font-bold">My Account</h2>
                        <p><Link to="/" class="">All Events</Link></p>
                        <p><Link to="/" class="">Contests</Link></p>
                        <p><Link to="/" class="">Dinner Party</Link></p>
                        <p><Link to="/" class="">Music Concert</Link></p>
                    </div>
                </div>
            </section>

            <div class="text-center">
                <p>&copy; 2024 Hevently</p>
                <p>Terms and conditions Privacy policy</p>
            </div>
        </section>
    )
}
