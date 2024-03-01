import React, { useState } from 'react';
import { handleInputChange } from './utils/formUtils'

export function Organizer() {
    const [formInfo, setFormInfo] = useState({
        email: '',
        name: '',
        phone: '',
        message: '',
        agree: true,
    });


    { console.log(formInfo) }
    return (
        <section className="mt-40">
            <div className="bg-center flex justify-center items-center h-[300px] bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
                <h1 className='text-center font-black text-white text-4xl lg:text-6xl leading-10 pb-6'>Get In Touch</h1>
            </div>

            <div className='lg:flex align-center justify-around lg:px-40 gap-40'>
                <section className='my-10 px-4'>
                    <div>
                        <h2 className='font-black text-2xl lg:text-3xl leading-10 pb-6'>Contact Us</h2>
                        <p className='text-xl pb-8'>Have a question? Need help? Don't hesitate, drop us a line</p>
                    </div>

                    <form className='bg-primaryColorWhite flex flex-col gap-3'>
                        <div className='flex justify-between'>
                            <div>
                                <label htmlFor="name" className="block mb-2 text-base font-black text-gray-900 dark:text-white">Name</label>
                                <input type="text" name="name" id="name" value={formInfo.name} onChange={(e) => handleInputChange(e, formInfo, setFormInfo)} required="" className='rounded w-[150px] lg:w-full' />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block mb-2 text-base font-black text-gray-900 dark:text-white">Phone No</label>
                                <input type="text" name="phone" value={formInfo.phone} onChange={(e) => handleInputChange(e, formInfo, setFormInfo)} required="" className='rounded w-[150px] lg:w-full' />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block mb-2 text-base font-black text-gray-900 dark:text-white">Email</label>
                            <input type="text" name="email" value={formInfo.email} onChange={(e) => handleInputChange(e, formInfo, setFormInfo)} required="" className='rounded w-full' />
                        </div>

                        <div>
                            <label htmlFor="message" className="block mb-2 text-base font-black text-gray-900 dark:text-white">Message</label>
                            <textarea type="text" name="message" value={formInfo.message} onChange={(e) => handleInputChange(e, formInfo, setFormInfo)} required="" className='rounded w-full' />
                        </div>
                        <div>
                            <input id="agree" type="checkbox" checked={formInfo.agree} onChange={(e) => handleInputChange(e, formInfo, setFormInfo)} required="" />
                            <label htmlFor="agree" className="text-medium px-6">I agree</label>
                        </div>

                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>

                    </form>
                </section>

                <section className="px-4 my-10 flex-1">
                    <h2 className='font-black text-2xl leading-10 pb-6 lg:text-3xl'>Information</h2>
                    <p className='text-xl pb-8 '>Don't hesitaste, drop us a line Collaboratively administrate channels whereas virtual. Objectively seize scalable metrics whereas proactive e-services</p>

                    <div className='border-2 w-fit border-gray-200 rounded-3xl p-10 bg-white flex flex-col gap-8'>
                        <div className='flex gap-10'>
                            <i class="ri-phone-line text-3xl bg-gray-100 rounded-full p-2"></i>
                            <div>
                                <p className="font-bold text-lg">Phone</p>
                                <p>12345678</p>
                            </div>
                        </div>

                        <div className='flex gap-10'>
                            <i class="ri-map-pin-line  text-3xl bg-gray-100 rounded-full p-2"></i>
                            <div>
                                <p className="font-bold text-lg">Address</p>
                                <p>Maitama, Abuja</p>
                            </div>
                        </div>

                        <div className='flex gap-10'>
                            <i class="ri-mail-line  text-3xl bg-gray-100 rounded-full p-2"></i>
                            <div>
                                <p className="font-bold text-lg">Email</p>
                                <p>info@behooveevents.com</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </section>
    )
}
