import React, { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react';
import { NavLink } from 'react-router-dom';
import { HiBars3 } from "react-icons/hi2";
import { FaArrowRightLong } from "react-icons/fa6";
import { GiCancel } from "react-icons/gi";

const Header = () => {
    const [mobileMenueOpen, setMobileMenueOpen] = useState(false);
    return (
        <div className='bg-white'>
            <header className='absolute inset-x-0 top-0 z-50'>
                <nav aria-label='Global' className='flex items-center justify-between p-6 lg:px-8'>
                    <div className="flex lg:flex-1">
                        <NavLink to='/' className='-mx-1.5 p-1.5' >
                            <span className='sr-only'>Radiant</span>
                            <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=''
                                className='h-8 w-auto' />
                        </NavLink>
                    </div>
                    <div className='flex lg:hidden'>
                        <button type='button' onClick={() => setMobileMenueOpen(true)} className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'>
                            <span className='sr-only'>Open main menue</span>
                            <HiBars3 className='h-6 w-6' aria-hidden />
                        </button>
                    </div>
                    <div className='hidden lg:flex lg:gap-x-12 '>
                        <ul className='flex items-center gap-3'>
                            <li className='list-none'>
                                <NavLink to='/home' className="text-sm font-semibold leading-6 text-gray-900">Home</NavLink>
                            </li>
                            <li className='list-none'>
                                <NavLink to='/about' className="text-sm font-semibold leading-6 text-gray-900">About Us</NavLink>
                            </li>
                            <li className='list-none'>
                                <NavLink to='/contact' className="text-sm font-semibold leading-6 text-gray-900">Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
                        <NavLink to='/login' className="text-sm font-semibold leading-6 text-gray-900 flex items-center justify-center gap-2">Login<span aria-hidden='true'><FaArrowRightLong /></span></NavLink>
                    </div>
                </nav>
                <Dialog open={mobileMenueOpen} onClose={setMobileMenueOpen} className='lg:hidden'>
                    <div className='fixed inset-0 z-50'>
                        <DialogPanel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
                            <div className='flex items-center justify-between'>
                                <NavLink to='/' className='-m-1.5 p-1.5'>
                                    <span className='sr-only'>Radiant</span>
                                    <img src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600' alt='' className="h-8 w-auto" />
                                </NavLink>
                                <button
                                    type="button"
                                    onClick={() => setMobileMenueOpen(false)}
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                >
                                    <span className="sr-only">Close menu</span>
                                    <GiCancel aria-hidden="true" className="h-6 w-6" />
                                </button>
                            </div>
                            <div className='mt-6 flow-root'>
                                <div className='-my-6 divide-y divide-gray-500/10'>
                                    <div className='space-y-2 p-6'>
                                        <ul>
                                            <li className='list-none'>
                                                <NavLink to='/home' className="text-sm font-semibold leading-6 text-gray-900">Home</NavLink>
                                            </li>
                                            <li className='list-none'>
                                                <NavLink to='/about' className="text-sm font-semibold leading-6 text-gray-900">About Us</NavLink>
                                            </li>
                                            <li className='list-none'>
                                                <NavLink to='/contact' className="text-sm font-semibold leading-6 text-gray-900">Contact Us</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='py-6'>
                                        <NavLink to='/login' className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>Login</NavLink>
                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </div>
                </Dialog>
            </header>
        </div>
    )
}

export default Header;