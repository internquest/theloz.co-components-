'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import { praticovariable } from '../fonts/font'

const MobileNavlinks = () => {
    const pathname = usePathname()
    return (
        <div className='menu-drawer translate-x-[-100%]  h-[calc(100vh-107px)] absolute z-[1001] left-0 invisible w-full bg-white p-0 top-[100%] overflow-x-hidden '>
            <div className='relative h-full'>
                <div className='grid content-between h-full grid-rows-[1fr_auto]'>
                    <nav className='pb-[3rem] '>
                        <ul className='list-menu p-0 m-0 list-none'>
                            <li>
                                <a href="/" className={`menu-item ${praticovariable.className} ${pathname === '/' && 'active'}`} >Home</a>
                            </li>
                            <li>
                                <a href="/products" className={`menu-item ${praticovariable.className} ${pathname === '/products' && 'active'}`} >Product</a>
                            </li>
                            <li>
                                <a href="/faq" className={`menu-item ${praticovariable.className} ${pathname === '/faq' && 'active'}`} >Faq</a>
                            </li>
                        </ul>
                    </nav>
                    <div className='py-[1.2rem] px-[2rem] gap-1 bg-[#27272a] relative flex justify-center flex-col items-center'>
                        <a href="/" className={`group flex items-center py-[1rem] cursor-pointer underline-offset-[.3rem] bg-transparent leading-[1.3]  text-white text-[28px] font-semibold uppercase ${praticovariable.className} `}>
                            <svg aria-hidden="true" focusable="false" class="h-[2rem] w-[2rem] mt-[-2px] group-hover:scale-[1.07] mr-[1rem] fill-white" xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                                {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--> */}
                                <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"></path>
                            </svg>
                            Login
                        </a>
                        <ul className='flex justify-start ml-[-1.25rem] list-none'>
                            <li>
                                <a href="" className={`group p-[1.1rem] text-white items-center flex cursor-pointer underline underline-offset-[.3rem] bg-transparent text-[1.4rem] ${praticovariable.className} `}>
                                    <svg aria-hidden="true" focusable="false" class="group-hover:scale-[1.07] w-[2.2rem] h-[2.2rem]  " viewBox="0 0 20 20">
                                        <path fill="currentColor" fill-rule="evenodd" d="M13.23 3.492c-.84-.037-1.096-.046-3.23-.046-2.144 0-2.39.01-3.238.055-.776.027-1.195.164-1.487.273a2.43 2.43 0 0 0-.912.593 2.486 2.486 0 0 0-.602.922c-.11.282-.238.702-.274 1.486-.046.84-.046 1.095-.046 3.23 0 2.134.01 2.39.046 3.229.004.51.097 1.016.274 1.495.145.365.319.639.602.913.282.282.538.456.92.602.474.176.974.268 1.479.273.848.046 1.103.046 3.238.046 2.134 0 2.39-.01 3.23-.046.784-.036 1.203-.164 1.486-.273.374-.146.648-.329.921-.602.283-.283.447-.548.602-.922.177-.476.27-.979.274-1.486.037-.84.046-1.095.046-3.23 0-2.134-.01-2.39-.055-3.229-.027-.784-.164-1.204-.274-1.495a2.43 2.43 0 0 0-.593-.913 2.604 2.604 0 0 0-.92-.602c-.284-.11-.703-.237-1.488-.273ZM6.697 2.05c.857-.036 1.131-.045 3.302-.045 1.1-.014 2.202.001 3.302.045.664.014 1.321.14 1.943.374a3.968 3.968 0 0 1 1.414.922c.41.397.728.88.93 1.414.23.622.354 1.279.365 1.942C18 7.56 18 7.824 18 10.005c0 2.17-.01 2.444-.046 3.292-.036.858-.173 1.442-.374 1.943-.2.53-.474.976-.92 1.423a3.896 3.896 0 0 1-1.415.922c-.51.191-1.095.337-1.943.374-.857.036-1.122.045-3.302.045-2.171 0-2.445-.009-3.302-.055-.849-.027-1.432-.164-1.943-.364a4.152 4.152 0 0 1-1.414-.922 4.128 4.128 0 0 1-.93-1.423c-.183-.51-.329-1.085-.365-1.943C2.009 12.45 2 12.167 2 10.004c0-2.161 0-2.435.055-3.302.027-.848.164-1.432.365-1.942a4.44 4.44 0 0 1 .92-1.414 4.18 4.18 0 0 1 1.415-.93c.51-.183 1.094-.33 1.943-.366Zm.427 4.806a4.105 4.105 0 1 1 5.805 5.805 4.105 4.105 0 0 1-5.805-5.805Zm1.882 5.371a2.668 2.668 0 1 0 2.042-4.93 2.668 2.668 0 0 0-2.042 4.93Zm5.922-5.942a.958.958 0 1 1-1.355-1.355.958.958 0 0 1 1.355 1.355Z" clip-rule="evenodd"></path>
                                    </svg>
                                    {/* <span>Instagram</span> */}
                                </a>
                            </li>
                        </ul>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default MobileNavlinks