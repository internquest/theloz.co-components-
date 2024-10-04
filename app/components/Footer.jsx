'use client'
import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import Image from 'next/image'

const Footer = () => {
    const ref = useRef(null)
    const isInView = useInView(ref,)
    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

    const pathVariants = {
        hidden: { pathLength: 0 },
        visible: {
            pathLength: 1,
            transition: {
                duration: 2,
                ease: "easeInOut",
            }
        }
    }

    return (
        <div>
            <footer className="border-t-0 aft750:py-28 aft750:px-36 py-14 px-8 bg-[rgb(24,24,27)] ">
                <div className='max-w-[128rem] my-0 mx-auto p-0 '>
                    <div className='pb-20 gap-20 justify-center items-center flex-col flex'>
                        <div className='flex flex-col flex-grow aft750:text-left aft750:mr-auto text-center justify-center ml-auto'>
                            <h2 className='font-normal text-[32px] text-center max-w-[590px] mt-0 text-[#d4d4d8] leading-[115%] mb-[42px]'>
                                Sign up for updates, <br />
                                <strong className='text-[#40c1ac] font-normal'>discounts</strong>
                                {' '}and giveaways!
                            </h2>
                            <form action="" method='post' className='flex flex-col w-full relative aft750:items-start aft750:max-w-[36rem] aft750:justify-start aft750:m-0'>
                                <div className='max-w-[36rem] w-full'>
                                    <div className='z-[0] relative w-full flex '>
                                        <input type="email" name="" id="" autoComplete='email' required='true' className=' p-[1.5rem] pr-[5rem] border-2 border-solid border-black  bg-[#f4f4f5] text-black flex-grow text-left m-[1px]  appearance-none text-[1.6rem] w-full h-[4.5rem] min-w-[calc(7rem+2px)] relative leading-[1.5] tracking-[.04rem]' />
                                        <label className='text-black text-[20px] tracking-normal top-[1.3rem] absolute left-[2rem] mb-0 pointer-events-none [transition:top_.1s,font-size_.1s] leading-[1.5]'>your email address</label>
                                        <button className='w-[4.4rem] m-0 top-[3px] h-[calc(100%-6px)] z-[2] bg-[#ff8066] text-black right-[3px] border-l-2 border-solid border-black transition-all duration-200 ease-in-out flex items-center cursor-pointer justify-center overflow-hidden absolute'>
                                            <svg width="29" height="25" viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class="icon icon-arrow">
                                                <path d="M28 13.625L17 24.125C16.375 24.6875 15.4375 24.6875 14.875 24.0625C14.3125 23.4375 14.3125 22.5 14.9375 21.9375L23.25 14H2C1.125 14 0.5 13.375 0.5 12.5C0.5 11.6875 1.125 11 2 11H23.25L14.9375 3.125C14.3125 2.5625 14.3125 1.5625 14.875 1C15.4375 0.375 16.4375 0.375 17 0.9375L28 11.4375C28.3125 11.75 28.5 12.125 28.5 12.5C28.5 12.9375 28.3125 13.3125 28 13.625Z" fill="currentColor"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <a href="" className='aft750:w-[522px] aft750:h-[175px] justify-center flex m-auto' ref={ref}>
                            <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 807.9 268.4"
                                className="h-full w-full loz-logo-footer active"
                                initial="hidden"
                                animate={mainControls}
                            >
                                <defs></defs>
                                <motion.path
                                    fill="#18181b"
                                    stroke="#74d2c2"
                                    d="M95.9 5.8H.5v256.7h230.7v-85.4H95.9V5.8z"
                                    className="loz-footer-logo-1 "
                                    variants={pathVariants}
                                ></motion.path>
                                <motion.path
                                    fill="#18181b"
                                    stroke="#74d2c2"
                                    d="M807.4 5.7H552.8v85.7h115.3l-115.3 92.4v78.7h254.6v-85.4H691.5L807.4 85V5.7z"
                                    className="loz-footer-logo-2 transition-[stroke-dashoffset_1s_cubic-bezier(.47,0,.745,.715)_2.2s]"
                                    variants={pathVariants}
                                ></motion.path>
                                <motion.path
                                    fill="#18181b"
                                    stroke="#74d2c2"
                                    d="M391.9.5c-78 0-141.2 59.8-141.2 133.7s63.2 133.7 141.2 133.7 141.2-59.8 141.2-133.7S469.9.5 391.9.5zM443 154.7c-5.7 23.6-26.4 40.6-51 40.6h0c-24.6 0-45.4-17-51-40.6-3.3-13.8-.6-29.1 7.8-40.8 5.5-7.7 12.5-13.7 19.4-20 6.2-5.7 12.3-11.6 16.9-18.7 2.9-4.5 5.2-9.2 7-14.7v-.1.1-.1.1c1.7 5.5 4 10.3 7 14.7 4.7 7.1 10.7 13 16.9 18.7 6.9 6.3 13.9 12.3 19.4 20 8.2 11.7 10.9 26.9 7.6 40.8z"


                                    className="loz-footer-logo-3 trasition-[stroke-dashoffset_1s_cubic-bezier(.47,0,.745,.715)_1.2s]"
                                    variants={pathVariants}
                                ></motion.path>
                            </motion.svg>
                        </a>
                    </div>
                    <div className='xl:grid-cols-11 gap-[5rem] justify-between max-w-[80rem] grid mx-auto'>
                        <div className='xl:col-span-4 flex justify-between flex-col mt-0 min-w-[310px]'>
                            <div className='xl:justify-start flex'>
                                <a href="" target='_blank'>
                                    <div className='bg-[#18181b] relative p-[.375rem] mr-[1.25rem] rounded-[100px]'>
                                        <Image src={'https://theloz.co/cdn/shop/t/3/assets/footer-social-icon.png?v=128378945131237096911712252550'} alt='' objectFit='contain' width={42} height={42} className='block' />
                                    </div>
                                </a>
                                <div>
                                    <h2 className='mt-0 text-[14px] text-[#d4d4d8] mb-[.5rem] leading-[100%] font-semibold'>thelloz.com</h2>
                                    <span>
                                        <ul className='flex justify-start '>
                                            <li className=''>
                                                <a href="https://www.instagram.com/thelozco" target="_blank" class="link list-social__link">

                                                    <span>Instagram</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </span>
                                </div>
                            </div>
                            <div className=''>
                                <p className='text-[rgb(82,82,91)] text-[.875rem] leading-[1.25rem]'>
                                    © 2024
                                    <a href="/">Spring Innovations Inc.</a><br />

                                </p>
                                <p className='text-[rgb(82,82,91)] text-[.875rem] leading-[1.25rem] mt-[.5rem]'>
                                    <small class="tw-mt-2 tw-text-zinc-600 tw-text-sm tw-hidden  xl:tw-block ">
                                        design by{' '}
                                        <a title="unlimited.studio" href="https://unlimited.studio" target="_blank" class="unlimitedHover" alt="unlimited.studio">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-auto h-[10px] mt-[-3px] ml-[3px]" viewBox="0 0 706.7 69.3">
                                                <path class="unlimitedFill" d="M45.7 27.3v39.5c0 .5-2.4 1.5-5.1 1.5-2.9 0-6-1.1-7.6-5.1-.2-.8-.4-1.5-.5-2.6-3.3 4.9-8 8.5-15.4 8.5C5.1 69.2 0 60.7 0 49.9V27.3c0-4.9 2.5-6.5 5.8-6.5h1.5c3.5 0 6 1.5 6 6.5v20.6c0 6.3 3.3 10 8.8 10 4.6 0 8.1-2.5 10.1-6.1V27.3c0-4.9 2.4-6.5 5.8-6.5h1.4c3.8 0 6.3 1.6 6.3 6.5zM101.6 39.5V62c0 4.9-2.6 6.4-6 6.4h-1.4c-3.5 0-6-1.4-6-6.4V41.6c0-6.2-3.2-10-8.6-10-4.7 0-8.3 2.5-10.2 6.1V62c0 4.9-2.5 6.4-5.9 6.4H62c-3.6 0-6.1-1.4-6.1-6.4V22.4c0-.5 2.4-1.5 5.1-1.5 3.6 0 7.3 1.8 8 7.8 3.3-5 8.2-8.4 15.4-8.4 12.1 0 17.2 8.6 17.2 19.2zM111.6 62V3.1c0-.4 2.4-1.5 5.1-1.5 4 0 8.4 2.1 8.4 10.8V62c0 4.9-2.5 6.4-5.9 6.4h-1.4c-3.6 0-6.2-1.5-6.2-6.4zM142.7 0c4.7 0 7.6 2.7 7.6 7s-2.8 7-7.6 7c-4.6 0-7.6-2.7-7.6-7s2.9-7 7.6-7zm-6.8 27.3c0-4.9 2.6-6.5 6-6.5h1.4c3.5 0 6 1.5 6 6.5V62c0 4.9-2.5 6.4-6 6.4H142c-3.6 0-6.1-1.4-6.1-6.4V27.3zM234.8 38.8V62c0 4.9-2.5 6.4-5.9 6.4h-1.4c-3.6 0-6.1-1.4-6.1-6.4V41c0-6.1-2.7-9.4-8.1-9.4-3.8 0-7.3 2.4-9.2 5.7V62c0 4.9-2.5 6.4-5.9 6.4h-1.4c-3.5 0-6.1-1.4-6.1-6.4V41.2c0-6.4-2.7-9.7-8-9.7-3.8 0-7.3 2.4-9.2 5.7V62c0 4.9-2.5 6.4-5.9 6.4h-1.4c-3.6 0-6.1-1.4-6.1-6.4V22.4c0-.5 2.4-1.5 5.1-1.5 3.3 0 7 1.4 8 7.6 3.2-4.7 7.7-8.2 14.4-8.2 7.7 0 12.6 3.7 14.9 9.6 3.2-5.4 7.9-9.6 15.7-9.6 11.6 0 16.6 7.5 16.6 18.5zM251.5 0c4.7 0 7.6 2.7 7.6 7s-2.8 7-7.6 7c-4.6 0-7.6-2.7-7.6-7s2.9-7 7.6-7zm-6.8 27.3c0-4.9 2.6-6.5 6-6.5h1.4c3.5 0 6 1.5 6 6.5V62c0 4.9-2.5 6.4-6 6.4h-1.3c-3.6 0-6.1-1.4-6.1-6.4V27.3zM272.7 53.3V31.8h-2.4c-3.8 0-5.5-1.7-5.5-4.8v-.8c0-3.2 1.7-5 5.5-5h2.5v-5.9c0-4.4 2.2-6.5 6-6.5h1.2c3.5 0 5.9 1.5 5.9 6.5v5.9h8.1c3.8 0 5.5 1.6 5.5 4.7v.9c0 3.3-1.7 5-5.5 5h-8.2v19.9c0 4.6 1.4 6.9 5.2 6.9 2.7 0 4.6-1.3 5.8-3.2.5-.2 3.3 1.7 3.3 5.3 0 2-.8 3.7-2.3 5.2-2.1 2.1-5.5 3.4-10 3.4-10.3 0-15.1-5.4-15.1-16zM328 20.3c13.9 0 23.2 9.7 23.2 23.3v.9c-.1 2.3-.8 3.5-3.3 3.5h-32.3l.3 1.5c1.4 6.1 6.5 10 13.4 10 7 0 11-3.1 13.1-6.8.1-.2 6.6.4 6.6 5.7 0 2.6-1.8 5.3-5.2 7.3-3.4 2.1-8.4 3.5-14.9 3.5-15.2 0-25.1-9.5-25.1-24.3 0-14.1 10.1-24.6 24.2-24.6zm-.1 9.2c-6.4 0-11.2 4.6-12 11.1h23c-.5-6.7-4.6-11.1-11-11.1zM356.4 44.8c0-14.8 8.8-24.5 21.7-24.5 6.7 0 12 3.1 14.7 7.1V3.1c0-.4 2.4-1.5 5.1-1.5 4 0 8.4 2.1 8.4 10.8V62c0 4.9-2.4 6.4-5.9 6.4H399c-3.1 0-5.4-1.1-5.8-4.7-.1-1.1-.2-2.1-.2-3.3-3.2 5.5-8.3 8.9-15.2 8.9-12.6 0-21.4-9.9-21.4-24.5zm36.5-6.3c-2-4.6-5.8-7.5-11.6-7.5-7.3 0-12.1 5.3-12.1 13.7 0 8.1 5 13.8 12 13.8 6.4 0 11.8-4.5 11.8-11.2v-8.8z"></path><path d="M415.6 61c0-4.2 2.1-6.4 6.4-6.4h1.6c4.4 0 6.5 2.2 6.5 6.4v1.3c0 4.2-2.2 6.4-6.5 6.4H422c-4.2 0-6.4-2.2-6.4-6.4V61z" class="unlimitedDot"></path><path class="unlimitedFill" d="M436.2 58.8c0-3.4 3.7-5.6 4.1-5.4 3.2 3.5 8.5 6.3 15.4 6.3 5.3 0 8.1-1.8 8.1-4.8 0-3.6-3.7-4.3-9.9-5.6-6.4-1.3-16.4-3.4-16.4-14 0-9.1 7.4-15.1 19.4-15.1 9.5 0 15.3 2.6 17.7 6.2.8 1.1 1.1 2.5 1.1 3.8 0 3.5-4.1 5.9-4.3 5.6-3.2-3.6-8.2-6.3-13.7-6.3-5.2 0-7.9 1.9-7.9 4.9 0 3.3 3.6 4 9.9 5.5 6.6 1.4 17.1 3.5 17.1 14.1 0 9.4-7.5 15-20.6 15-7.4 0-12.7-1.4-16.1-3.5-2.4-1.8-3.9-4.1-3.9-6.7zM488.6 53.3V31.8h-2.4c-3.8 0-5.5-1.7-5.5-4.8v-.8c0-3.2 1.7-5 5.5-5h2.5v-5.9c0-4.4 2.2-6.5 6-6.5h1.2c3.5 0 5.9 1.5 5.9 6.5v5.9h8.1c3.8 0 5.5 1.6 5.5 4.7v.9c0 3.3-1.7 5-5.5 5h-8.2v19.9c0 4.6 1.4 6.9 5.2 6.9 2.7 0 4.6-1.3 5.8-3.2.5-.2 3.3 1.7 3.3 5.3 0 2-.8 3.7-2.3 5.2-2.1 2.1-5.5 3.4-10 3.4-10.3 0-15.1-5.4-15.1-16zM567 27.3v39.5c0 .5-2.4 1.5-5.1 1.5-2.9 0-6-1.1-7.6-5.1-.2-.8-.4-1.5-.5-2.6-3.3 4.9-8 8.5-15.4 8.5-12.1 0-17.2-8.5-17.2-19.3V27.3c0-4.9 2.5-6.5 5.8-6.5h1.5c3.5 0 6 1.5 6 6.5v20.6c0 6.3 3.3 10 8.8 10 4.6 0 8.1-2.5 10.1-6.1V27.3c0-4.9 2.4-6.5 5.8-6.5h1.4c3.9 0 6.4 1.6 6.4 6.5zM574.7 44.8c0-14.8 8.8-24.5 21.7-24.5 6.7 0 12 3.1 14.7 7.1V3.1c0-.4 2.4-1.5 5.1-1.5 4 0 8.4 2.1 8.4 10.8V62c0 4.9-2.4 6.4-5.9 6.4h-1.3c-3.1 0-5.4-1.1-5.8-4.7-.1-1.1-.2-2.1-.2-3.3-3.2 5.5-8.3 8.9-15.2 8.9-12.7 0-21.5-9.9-21.5-24.5zm36.5-6.3c-2-4.6-5.8-7.5-11.6-7.5-7.3 0-12.1 5.3-12.1 13.7 0 8.1 5 13.8 12 13.8 6.4 0 11.8-4.5 11.8-11.2v-8.8zM642.2 0c4.7 0 7.6 2.7 7.6 7s-2.8 7-7.6 7c-4.6 0-7.6-2.7-7.6-7 .1-4.3 2.9-7 7.6-7zm-6.8 27.3c0-4.9 2.6-6.5 6-6.5h1.4c3.5 0 6 1.5 6 6.5V62c0 4.9-2.5 6.4-6 6.4h-1.3c-3.6 0-6.1-1.4-6.1-6.4V27.3zM681.9 20.3c14.7 0 24.8 10 24.8 24.6s-10.1 24.5-25 24.5-24.8-9.9-24.8-24.7c0-14.4 10.2-24.4 25-24.4zm-.1 10.5c-7.6 0-13 5.8-13 13.9 0 8.1 5.5 14.1 13 14.1s12.9-5.9 12.9-13.9c0-8.3-5.3-14.1-12.9-14.1z"></path>
                                            </svg>
                                        </a>
                                    </small>
                                </p>
                            </div>
                        </div>
                        <div className='flex justify-between flex-col mt-0 xl:pl-0 xl:col-span-2'>
                            <h2 class="mb-[1rem] mt-0 text-[14px] text-[#d4d4d8] leading-[100%] font-semibold">Quick links</h2>
                            <ul className='flex flex-col gap-[.75rem] '>
                                <li className='aft750:mr-[1.5rem] aft750:p-0'>
                                    <a href="/pages/contact" className="inline-block hover:text-[#6f7bd4] hover:underline hover:underline-offset-[.3rem] text-[#71717a] text-[14px] leading-[1.8] cursor-pointer bg-transparent p-0"> Contact Us </a>
                                </li>
                                <li className='aft750:mr-[1.5rem] aft750:p-0'>
                                    <a href="/pages/contact" className="inline-block hover:text-[#6f7bd4] hover:underline hover:underline-offset-[.3rem] text-[#71717a] text-[14px] leading-[1.8] cursor-pointer bg-transparent p-0"> Account </a>
                                </li>
                                <li className='aft750:mr-[1.5rem] aft750:p-0'>
                                    <a href="/pages/contact" className="inline-block hover:text-[#6f7bd4] hover:underline hover:underline-offset-[.3rem] text-[#71717a] text-[14px] leading-[1.8] cursor-pointer bg-transparent p-0"> Search </a>
                                </li>
                            </ul>
                        </div>
                        <div className='flex justify-between flex-col mt-0 xl:pl-0 xl:col-span-2'>
                            <h2 class="mb-[1rem] mt-0 text-[14px] text-[#d4d4d8] leading-[100%] font-semibold">Info</h2>
                            <ul className='flex flex-col gap-[.75rem] '>
                                <li className='aft750:mr-[1.5rem] aft750:p-0'>
                                    <a href="/pages/contact" className="inline-block hover:text-[#6f7bd4] hover:underline hover:underline-offset-[.3rem] text-[#71717a] text-[14px] leading-[1.8] cursor-pointer bg-transparent p-0 whitespace-nowrap"> Terms of service </a>
                                </li>
                                <li className='aft750:mr-[1.5rem] aft750:p-0'>
                                    <a href="/pages/contact" className="inline-block hover:text-[#6f7bd4] hover:underline hover:underline-offset-[.3rem] text-[#71717a] text-[14px] leading-[1.8] cursor-pointer bg-transparent p-0"> Privacy Policy </a>
                                </li>
                                <li className='aft750:mr-[1.5rem] aft750:p-0'>
                                    <a href="/pages/contact" className="inline-block hover:text-[#6f7bd4] hover:underline hover:underline-offset-[.3rem] text-[#71717a] text-[14px] leading-[1.8] cursor-pointer bg-transparent p-0"> Refunds </a>
                                </li>
                            </ul>
                        </div>
                        <div className='col-span-3 aft750:justify-start flex flex-col mt-0'>
                            <span class="mb-3 flex justify-center  xl:justify-start ">
                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.83594 11.2578C0.664062 10.1641 0 8.60156 0 6.96094V6.76562C0 4.03125 1.95312 1.6875 4.64844 1.25781C6.44531 0.945312 8.24219 1.53125 9.53125 2.78125L10 3.25L10.4688 2.78125C11.7188 1.53125 13.5547 0.945312 15.3125 1.25781C18.0078 1.6875 20 4.03125 20 6.76562V6.96094C20 8.60156 19.2969 10.1641 18.125 11.2578L11.0547 17.8594C10.7812 18.1328 10.3906 18.25 10 18.25C9.57031 18.25 9.17969 18.1328 8.90625 17.8594L1.83594 11.2578Z" fill="#F3F4FB"></path>
                                </svg>
                            </span>
                            <div className='xl:text-left xl:mx-0 text-[#212,212,216)] max-w-[300px]'>
                                <p>Manufactered in the United States with globally-sourced ingredients.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer