import React from 'react'
import logo from '@/app/assets/Loz_Logo_Black.svg'
import Image from 'next/image'
import Navlinks from './Navlinks'
const Navbar = () => {
    return (
        <div className='bg-[rgb(243_244_251/_1)] h-min bg-fixed border-t-4 border-b-4 border-[#27272a] border-solid text-[rgb(18,18,18)]  '>
            <header className='h-[100px]  flex items-center justify-between aft990:justify-end aft990:items-end aft990:py-0 lg:items-stretch   '>
                <div className='ml-0'>
                    <details className='flex'>
                        <summary className='h-[56px] w-[51px]  p-0 text-[rgb(18,18,18)] cursor-pointer inline-block underline underline-offset-[.3rem] bg-transparent text-[1.4rem] list-none'>
                            <div className='flex justify-center items-center pl-5'>
                                <div className='menu-mobile w-[60px] flex flex-wrap justify-center items-center cursor-pointer flex-col relative transition-all duration-300 ease-[cubic-bezier(.175,.885,.32,1.275)]  '>
                                    <div className='circle'></div>
                                    <div className='circle'></div>
                                    <div className='circle'></div>
                                    <div className='circle !-ml-6 absolute opacity-0 top-[50%] !mt-[-6px] left-[50%]'></div>
                                    <div className='circle !ml-3 opacity-0 absolute top-[50%] !mt-[-6px] left-[50%] '></div>
                                </div>
                            </div>
                        </summary>

                    </details>
                    <div className=''></div>
                </div>
                <h1 className='flex items-center aft750:text-[56px] aft750:font-semibold aft750:leading-[125%] text-[28px] font-semibold leading-[150%]  text-[rgb(18,18,18)] '>
                    <div className=' h-[100px]  items-center left-[4rem] aft750:left-[5rem] aft990:text-center absolute flex aft990:left-0 top-0'>
                        <a href="/" className='aft990:ml-[24px] p-[.75rem] w-full h-min  cursor-pointer text-[1.4rem] items-center flex'>
                            <div className='w-full inline-block '>
                                <Image src={logo} alt='logo' className='w-[130px] h-auto max-w-full' sizes='(max-width: 260px) 50vw,(min-width:261px) 130px' />
                            </div></a>
                    </div>
                </h1>

                <Navlinks />
                <div class="box-border border-0 border-solid h-[100px] items-center justify-center border-l-4 pl-[calc(-4px+2.5rem)] text-white bg-black pr-10 flex [grid-area:icons] justify-self-end aft750:w-[230px]">
                    <div class="box-border border-0 border-solid border-[rgb(229,_231,_235)]"></div>
                    <div class="group box-border border-0 border-solid border-[rgb(229,_231,_235)] text-[rgb(18,18,18)] gap-x-10 flex items-center justify-center h-[56px] w-[51px] p-0 relative">
                        <span class="   items-center justify-center h-full aft750:block hidden">
                            <span class="box-border border-0 border-solid border-[rgb(229,_231,_235)] text-[rgb(255,255,255)] flex items-center justify-center h-full no-underline text-[20px] font-semibold leading-[150%] uppercase">Cart</span>
                        </span>
                        <a href="/cart" id="cart-icon-bubble" aria-label="View Cart" role="button" aria-haspopup="dialog" class="box-border border-0 border-solid border-[rgb(229,_231,_235)] underline cursor-pointer inline-block border-[none] [box-shadow:none] [text-underline-offset:0.3rem] bg-transparent text-[1.4rem] [font-family:inherit]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg" width="51" height="56" viewBox="0 0 51 56" fill="none" aria-hidden="true" focusable="false" className=" group-hover:[transform:scale(1.07)] box-border border-0 border-solid border-[rgb(229,_231,_235)] block align-middle h-[56px] w-[51px] p-0">
                                <g clip-path="url(#clip0_918_739)" className="box-border border-0 border-solid border-[rgb(229,_231,_235)]">
                                    <path d="M6.7435 0.807983L1.26141 6.47564V54.8402H49.2007V6.47564L43.7186 0.807983" stroke="white" stroke-width="4" stroke-miterlimit="10" className="box-border border-0 border-solid border-[rgb(229,_231,_235)]"></path>
                                    <path d="M14.4099 48.5269C17.8091 48.5269 20.5647 45.7713 20.5647 42.3721C20.5647 38.9729 17.8091 36.2173 14.4099 36.2173C11.0107 36.2173 8.25513 38.9729 8.25513 42.3721C8.25513 45.7713 11.0107 48.5269 14.4099 48.5269Z" stroke="#6F7BD4" stroke-width="4" stroke-miterlimit="10" class="box-border border-0 border-solid border-[rgb(229,_231,_235)]"></path>
                                    <path d="M36.2532 48.5269C39.6524 48.5269 42.408 45.7713 42.408 42.3721C42.408 38.9729 39.6524 36.2173 36.2532 36.2173C32.854 36.2173 30.0984 38.9729 30.0984 42.3721C30.0984 45.7713 32.854 48.5269 36.2532 48.5269Z" stroke="#6F7BD4" stroke-width="4" stroke-miterlimit="10" class="box-border border-0 border-solid border-[rgb(229,_231,_235)]"></path>
                                    <path d="M25.231 33.9789C28.6302 33.9789 31.3858 31.2233 31.3858 27.8241C31.3858 24.4249 28.6302 21.6693 25.231 21.6693C21.8318 21.6693 19.0762 24.4249 19.0762 27.8241C19.0762 31.2233 21.8318 33.9789 25.231 33.9789Z" stroke="#6F7BD4" stroke-width="4" stroke-miterlimit="10" class="box-border border-0 border-solid border-[rgb(229,_231,_235)]"></path>
                                    <path d="M36.1548 18.3096C39.554 18.3096 42.3096 15.554 42.3096 12.1548C42.3096 8.75559 39.554 6 36.1548 6C32.7556 6 30 8.75559 30 12.1548C30 15.554 32.7556 18.3096 36.1548 18.3096Z" stroke="#6F7BD4" stroke-width="4" stroke-miterlimit="10" class="box-border border-0 border-solid border-[rgb(229,_231,_235)]"></path>
                                    <path d="M14.1548 18.3096C17.554 18.3096 20.3096 15.554 20.3096 12.1548C20.3096 8.75559 17.554 6 14.1548 6C10.7556 6 8.00003 8.75559 8.00003 12.1548C8.00003 15.554 10.7556 18.3096 14.1548 18.3096Z" stroke="#6F7BD4" stroke-width="4" stroke-miterlimit="10" class="box-border border-0 border-solid border-[rgb(229,_231,_235)]"></path>
                                </g>
                                <defs class="box-border border-0 border-solid border-[rgb(229,_231,_235)]">
                                    <clippath id="clip0_918_739" class="box-border border-0 border-solid border-[rgb(229,_231,_235)]">
                                        <rect width="50.2589" height="56" fill="white" transform="translate(0.101593)" class="box-border border-0 border-solid border-[rgb(229,_231,_235)]"></rect>
                                    </clippath>
                                </defs>
                            </svg>
                        </a>
                        <span class="box-border border-0 border-solid border-[rgb(229,_231,_235)] overflow-hidden w-px h-px -m-[1px] p-0 border-[0px] [clip:rect(0px,_0px,_0px,_0px)] absolute [overflow-wrap:normal!important] flex items-center justify-center whitespace-nowrap">Cart</span>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar
