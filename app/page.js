"use client"
import Image from "next/image";
import { useEffect } from "react";
import { praticovariable } from "./fonts/font";


export default function Home() {

  const betterwith = ['live', 'work', 'sleep', 'feel']
  useEffect(() => {
    const handleDomload = () => {
      console.log('shiva');
      const items = document.querySelectorAll('.banner__heading ul li');
      console.log(items);
      const itemHeight = 115; // Assuming each item is 115px tall. Adjust as needed.
      const totalHeight = items.length * itemHeight;
      const animationDuration = 10; // Duration of the animation cycle in seconds

      // Calculate the percentage step for each item based on the number of items
      const step = 100 / (items.length + 1); // +1 to account for the return to start

      let keyframes = `@keyframes cycle {`;

      for (let i = 0; i <= items.length; i++) {
        const percentageStart = step * i;
        const percentageEnd = step * (i + 0.5); // Half-step for holding the position
        const topValue = -(itemHeight * i) % totalHeight; // Loop back to 0 after the last item

        // Move to item
        keyframes += `${percentageStart}% { top: ${topValue}px; }`;

        // Hold position
        if (i < items.length) {
          // No need to hold after the last move
          keyframes += `${percentageEnd}% { top: ${topValue}px; }`;
        }
      }

      keyframes += `100% { top: 0; }`; // Ensure it loops back to the start smoothly
      keyframes += `}`;

      // Inject the keyframes into a new style element
      const styleSheet = document.createElement('style');
      // styleSheet.type = 'text/css';
      styleSheet.innerText = keyframes;
      document.head.appendChild(styleSheet);

      // Apply the animation to the items
      document.querySelector('.banner__heading ul').style.animation = `cycle ${animationDuration}s infinite`;
    }
    handleDomload();

  }, []);
  return (
    <main className="">
      <section>
        <div className="min-h-[calc(100vh-300px)] grid grid-cols-10 ">
          <div className="flex items-center t749px:order-2 col-span-12 justify-center  w-full relative z-[2]  lg:!col-span-4 aft750:col-span-5  bg-[#6f7bd4] ">
            <div className="py-[3.5rem] px-[2rem] z-[1] relative h-full flex-col *:justify-around bg-transparent text-[rgb(18,18,18)] ">
              <div className="flex  flex-col  xl:max-w-[28rem]  mt-0 justify-center items-center max-w-[24rem] mx-auto ">
                <div className="banner__heading">
                  <div className="h-[115px] inline-block text-center relative overflow-y-hidden ">
                    <ul className="relative ![animation-timing-function:cubic-bezier(1,-.3,0,1.3)]" >
                      {betterwith.map((item, index) => (

                        <li key={index} className="h-[115px]">
                          <h1 className={`text-[78px] aft750:text-[78px] aft990:text-[98px] font-black   lg:max-w-[400px] aft750:min-w-[300px] text-[rgb(39_39_42/1)] leading-[1.25]  uppercase text-center ${praticovariable.className} `}>{item}</h1>
                        </li>
                      ))}


                    </ul>
                  </div>
                </div>
              </div>
              <div className="text-[1.8rem] leading-[1.8] tracking-[.06em] text-[rgb(18,18,18)] text-center mt-0 ">
                <h2 className={`text-[78px] aft990:text-[98px] aft750:text-[78px] break-words [word-break:break-word] text-[rgb(39_39_42/1)] leading-[1] font-normal ${praticovariable.className} `}>better with</h2>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="212" height="72" viewBox="0 0 806.97 267.32" fill="none" className="h-[72px] w-auto mt-5 mx-auto">
                <polygon points="806.97 5.22 552.36 5.22 552.36 90.9 667.65 90.9 552.36 183.27 552.36 262 806.97 262 806.97 176.59 691.09 176.59 806.97 84.47 806.97 5.22" style={{ fill: '#262929', strokeWidth: '0px' }}></polygon><polygon points="95.4 5.24 0 5.24 0 262.03 230.71 262.03 230.71 176.62 95.4 176.62 95.4 5.24" style={{ fill: '#262929', strokeWidth: '0px' }}></polygon><path d="m391.43,0c-78.01,0-141.24,59.84-141.24,133.66s63.24,133.66,141.24,133.66,141.24-59.84,141.24-133.66S469.43,0,391.43,0Zm51.07,154.17c-5.66,23.64-26.42,40.6-51.05,40.64h-.05c-24.63-.04-45.39-17-51.05-40.64-3.31-13.85-.61-29.08,7.76-40.8,5.47-7.66,12.51-13.72,19.37-19.99,6.24-5.7,12.25-11.59,16.94-18.69,2.95-4.46,5.24-9.25,6.98-14.72v-.14s.02.05.02.07c0-.02.02-.05.02-.07v.14c1.74,5.47,4.03,10.25,6.98,14.72,4.69,7.1,10.7,13,16.94,18.69,6.86,6.27,13.91,12.34,19.37,19.99,8.37,11.72,11.07,26.95,7.76,40.8Z" style={{ fill: '#262929', strokeWidth: '0px' }}></path>
              </svg>
              <div className="mt-[3rem] flex flex-wrap gap-[1rem] break-words aft750:mb-0 ">
                <div className="flex-grow">
                  <form className="h-full">
                    <input type="hidden" name="id" value="44338763137248" />
                    <button className="bg-[#ffa694] font-[inherit] hover:bg-white hover:text-[#121212] text-[#27272a] text-[20px] flex flex-col items-center justify-center pt-[.8rem] px-[1.5rem] pb-[.625rem] cursor-pointer font-semibold uppercase leading-[150%]  transition-all duration-300 min-w-[calc(10rem+4px)] relative rounded-[100px] w-full h-full before:absolute before:content-[''] before:shadow-[0_0_0_2px_rgba(0,0,0),0_0_0] before:transition-shadow before:duration-300 before:ease-linear  before:top-[2px] before:bottom-[1px] before:rounded-[100px] before:right-[1px] before:left-[2px] before:z-[1]    hover:after:shadow-[0_0_0_3.3px_rgbs(255,255,255,0)] hover:after:top-[.5rem] hover:after:left-[.5rem] hover:after:bottom-[-.3rem] hover:after:right-[-.3rem] hover:after:bg-[#121212] after:content-[''] after:absolute after:z-[-1] after:rounded-[100px]">
                      quick buy
                    </button>
                  </form>
                </div>
                <a href="" className={` group flex-grow text-[20px] flex justify-center items-center pt-[.8rem] px-[1.5rem] pb-[.625rem]  cursor-pointer hover:bg-[#121212] hover:transition-colors hover:ease-linear hover:duration-300 hover:text-white bg-white font-semibold uppercase leading-[150%] text-[#121212] transition-all duration-300 min-w-[calc(10rem+4px)] relative rounded-[100px] border-2 border-solid border-[#121212] gap-[.625rem]   ${praticovariable.className} `}>
                  Learn more
                  <span className="relative -top-[.15rem]">
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512" className="transition-all duration-300 ease-linear group-hover:translate-x-[.5rem] group-hover:fill-white">
                      {/* <!--!Font Awesome Pro 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc.--> */}
                      <path d="M317.3 256l-22.6 22.6-192 192L80 493.3 34.7 448l22.6-22.6L226.7 256 57.4 86.6 34.7 64 80 18.7l22.6 22.6 192 192L317.3 256z"></path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>

          </div>



          <div className="t749px:h-[80vh] col-span-12 af750:h-full relative w-full overflow-hidden aft750:col-span-5 lg:!col-span-6 aft750:border-l-4 aft750:border-solid aft750:border-[#27272a]">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              poster="/files/Loz_hero_animation_no_leaves.webp"
            >
              <source src="https://cdn.shopify.com/videos/c/o/v/3f51c87fdf9d4e31b36bf07b3a03b4b2.webm" type="video/webm" />
              <source src="https://cdn.shopify.com/videos/c/o/v/c49e04d6779c4b01a08b12ec0cbc5ee4.mp4" type="video/mp4" />
              <img src="/files/Loz_hero_animation_no_leaves.webp" width="1920" height="1080" alt="Your browser does not support videos." />
              Your browser does not support videos.
            </video>
          </div>
        </div>
      </section>



      {/* moisture mouth with */}
      <div className="">
        <div className="py-20 px-6 aft750:py-[7rem] aft750:px-[3rem] flex flex-col gap-[2rem] mx-auto  relative">
          <div className="flex flex-col items-center justify-center">
            <h2 className={`text-[48px] aft750:text-[72px] text-[#27272a] font-black tracking-[1.44px] lg:max-w-[48rem] aft750:mr-[2.5rem] text-center mb-[2.5rem] leading-[100%] break-words ${praticovariable.className}`}>
              Moisturize your mouth with
            </h2>
            <a href="/" className="py-6 px-14 bg-[rgb(255,128,102) bg-[rgb(255,128,102)] border-[rgb(39,39,42)] border-4 rotate-[-4.1deg]">
              <div className="rotate-[4.1deg]">
                <svg xmlns="http://www.w3.org/2000/svg" width="212" height="72" viewBox="0 0 806.97 267.32" fill="none" className="h-[50px] w-auto  ">
                  <polygon points="806.97 5.22 552.36 5.22 552.36 90.9 667.65 90.9 552.36 183.27 552.36 262 806.97 262 806.97 176.59 691.09 176.59 806.97 84.47 806.97 5.22" style={{ fill: '#262929', strokeWidth: '0px' }}></polygon><polygon points="95.4 5.24 0 5.24 0 262.03 230.71 262.03 230.71 176.62 95.4 176.62 95.4 5.24" style={{ fill: '#262929', strokeWidth: '0px' }}></polygon><path d="m391.43,0c-78.01,0-141.24,59.84-141.24,133.66s63.24,133.66,141.24,133.66,141.24-59.84,141.24-133.66S469.43,0,391.43,0Zm51.07,154.17c-5.66,23.64-26.42,40.6-51.05,40.64h-.05c-24.63-.04-45.39-17-51.05-40.64-3.31-13.85-.61-29.08,7.76-40.8,5.47-7.66,12.51-13.72,19.37-19.99,6.24-5.7,12.25-11.59,16.94-18.69,2.95-4.46,5.24-9.25,6.98-14.72v-.14s.02.05.02.07c0-.02.02-.05.02-.07v.14c1.74,5.47,4.03,10.25,6.98,14.72,4.69,7.1,10.7,13,16.94,18.69,6.86,6.27,13.91,12.34,19.37,19.99,8.37,11.72,11.07,26.95,7.76,40.8Z" style={{ fill: '#262929', strokeWidth: '0px' }}></path>
                </svg>
              </div>
            </a>

          </div>
          <div className="">
            <h4 className={`text-[32px] aft750:text-[48px] text-[#27272a] font-normal tracking-[1.44px] leading-[125%] text-center break-words ${praticovariable.className}`}>A small solution to a big problem.</h4>
          </div>
        </div>
      </div>
      <div>
        <div className="h-[170px]  aft750:h-[200px] relative w-screen max-w-full overflow-x-hidden pt-16 pb-16 bg-[rgb(39,39,42)] ">
          <div className="absolute whitespace-nowrap will-change-transform animate-marquee">
            <div className={` text-[48px] aft990:text-[96px] aft750:text-[78px] text-[#6f7bd4] font-semibold leading-[100%] tracking-[.025rem] ${praticovariable.className} `}>

              Saliva saving. Breath freshening. Tongue tickling. Tooth toughening. Saliva saving. Breath freshening. Tongue tickling. Tooth toughening.

            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
