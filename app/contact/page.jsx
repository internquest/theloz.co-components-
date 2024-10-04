import React from 'react'

const page = () => {
    return (
        <main>
            <div>
                <div className='lg:py-48 lg:px-44 aft750:-mb-28 z-10 relative'>
                    <div className='aft750:py-0 aft750:px-[5rem] my-0 mx-auto px-0 gap-16 flex-col flex max-w-[80rem] '>
                        <p className='aft750:text-[1.5rem] leading-[2rem] text-[rgb(39_39_42/1)] text-center whitespace-nowrap gap-[.875rem] items-baseline flex'> Contact
                            <span className=' w-[5.5625rem] h-[.125rem] bg-[rgb(39_39_42/1)]'></span> Get in touch today!
                        </p>
                        <h1></h1>
                    </div>
                </div>
            </div>
            <section>
                <div className='bg-white bg-fixed lg:top-[-5rem] lg:px-44 z-[11] relative text-[rgb(18,18,18.75)]  '>
                    <div className='aft750:pt-[36px] max-w-[80rem] aft750:pb-[100px] '>
                        <h2 className='aft750:text-[56px] aft750:font-semibold  aft990:mb-[3rem] aft750:leading-[125%] '>Contact</h2>
                        <form action="" className='relative z-0'>
                            <div className='grid grid-cols-2 gap-x-[2rem]'>
                                <div className=' after:absolute after:content-[""] after:pointer-events-none after:top-[0px] after:bottom-[0px] after:left-[0px] after:right-[0px] after:border-[.1rem] after:border-solid after:border-transparent after:transition-shadow after:duration-100 after:ease after:z-[1] after:rounded-[50px] after:shadow-[0_0_0_2px_rgb(18,18,18)] hover:after:shadow-[0_0_0_calc(.1rem+1px)_#6f7bd4] aft750:mb-[2rem] relative w-full flex'>
                                    <input type="text" className="input-global " />
                                    <label className='text-[1.6rem] left-[2rem] top-[1rem] mb-0 absolute transition-[top_.1s_ease,font-size_1s_ease] leading-[1.5] tracking-[.1rem] text-[rgb(39_39_42)]'>Name</label>
                                </div>
                                <div className='after:absolute after:content-[""] after:pointer-events-none after:top-[0px] after:bottom-[0px] after:left-[0px] after:right-[0px] after:border-[.1rem] after:border-solid after:border-transparent after:transition-shadow after:duration-100 after:ease after:z-[1] after:rounded-[50px] after:shadow-[0_0_0_2px_rgb(18,18,18)] hover:after:shadow-[0_0_0_calc(.1rem+1px)_#6f7bd4] aft750:mb-[2rem] relative w-full flex'>
                                    <input type="text" className="input-global" />
                                    <label className='text-[1.6rem] left-[2rem] top-[1rem] mb-0 absolute transition-[top_.1s_ease,font-size_1s_ease] leading-[1.5] tracking-[.1rem] text-[rgb(39_39_42)]'>Email{' '}
                                        <span aria-hidden="true">*</span>
                                    </label>
                                </div>
                            </div>
                            <div className='after:absolute after:content-[""] after:pointer-events-none after:top-[0px] after:bottom-[0px] after:left-[0px] after:right-[0px] after:border-[.1rem] after:border-solid after:border-transparent after:transition-shadow after:duration-100 after:ease after:z-[1] after:rounded-[50px] after:shadow-[0_0_0_2px_rgb(18,18,18)] hover:after:shadow-[0_0_0_calc(.1rem+1px)_#6f7bd4] aft750:mb-[2rem] relative w-full flex'>
                                <input type="tel" className="input-global" />
                                <label className='text-[1.6rem] left-[2rem] top-[1rem] mb-0 absolute transition-[top_.1s_ease,font-size_1s_ease] leading-[1.5] tracking-[.04rem] text-[rgb(39_39_42)]'>Phone number</label>
                            </div>
                            <div className='after:absolute after:content-[""] after:pointer-events-none after:top-[0px] after:bottom-[0px] after:left-[0px] after:right-[0px] after:border-[.1rem] after:border-solid after:border-transparent after:transition-shadow after:duration-100 after:ease after:z-[1] after:rounded-[20px] after:shadow-[0_0_0_2px_rgb(18,18,18)] hover:after:shadow-[0_0_0_calc(.1rem+1px)_#6f7bd4] aft750:mb-[2rem] relative w-full flex'>
                                <textarea name="" id="" rows="10" className='p-6 rounded-[20px]  min-h-[16rem] resize-none font-normal flex-grow text-left  m-[1px] transition-shadow duration-100 flex relative w-full appearance-none bg-white text-[1.6rem] h-[4.5rem] min-w-[7rem] leading-[1.5] tracking-[.04em] text-[rgb(39_39_42)]'></textarea>
                                <label className='text-[1.6rem] left-[2rem] top-[1rem] mb-0 absolute transition-[top_.1s_ease,font-size_1s_ease] leading-[1.5] tracking-[.1rem] text-[rgb(39_39_42)]'>Comment</label>
                            </div>

                            <div className='aft750:mt-[4rem] '>
                                <button className='text-[1.25rem] flex justify-center items-center  leading-[150%] hover:bg-white text-white tracking-[.04em] transition-all duration-300 min-w-[10rem] relative rounded-[100px] bg-[rgb(18,18,18)] border-2 border-solid border-[rgb(18,18,18)] pt-[.8rem] px-[1.5rem] pb-[.625rem] cursor-pointer font-semibold uppercase hover:text-[rgb(18,18,18)] '>Send</button>
                            </div>
                        </form>
                    </div>


                </div>
            </section>
        </main>
    )
}

export default page