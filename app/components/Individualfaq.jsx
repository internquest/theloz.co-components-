'use client'
import React, { useState, useRef, useEffect } from 'react'

const Individualfaq = ({ question, answer }) => {
    const [open, setOpen] = useState(false);
    const [maxHeight, setMaxHeight] = useState('0px');
    const contentRef = useRef(null);

    useEffect(() => {
        const content = contentRef.current

        // if (open) {
        setMaxHeight(`${contentRef.current.scrollHeight}px`);
        // } else {
        //     setMaxHeight('0px');
        // }



        const handleTransitionEnd = () => {
            // console.log('shova');
            // console.log(content);
            // console.log('Transition ended for open FAQ');
            // setMaxHeight('none');
            content.style.maxHeight = 'none';
            // content.style.transition = '';
        };
        if (!open) {

            content.addEventListener('transitionend', handleTransitionEnd);
        }
        // console.log(content);
        return () => {
            if (!open) {
                content.removeEventListener('transitionend', handleTransitionEnd);
            }
        };

    }, []);
    // console.log(maxHeight);



    const renderAnswerContent = (content) => {
        switch (content.type) {
            case 'paragraph':
                return <p className=''>{content.content}</p>;
            case 'list':
                return (
                    <ul className=" pl-5 my-4 list-inside list-none">
                        {content.items.map((item, index) => (
                            <li key={index} className="mb-2 list-disc text-[1.25rem] leading-[175%] font-normal">{item}</li>
                        ))}
                    </ul>
                );
            default:
                return null;
        }
    };

    return (
        <div>

            <div className={`aft750:mt-0 mb-0 text-[rgb(18,18,18)] border-t-[.1rem] border-b-[.1rem] border-solid ${open && 'border-[rgb(18_18_18/1)]'}  translate-x-0 ease-[cubic-bezier(.4,0,.2,1)] duration-150 border-b-[rgba(18_18_18/.08)] `}>
                <details className='py-8' >
                    <summary onClick={() => setOpen(!open)} className='flex  relative cursor-pointer ' >
                        <h3 className={` ${open ? 'opacity-100' : 'opacity-75'}  text-[rgb(18,18,18)] transition-all ease-[cubic-bezier(.4,0,.2,1)]  duration-150 flex items-center max-w-[calc(100%-6rem)] min-h-[1.6rem] m-0 font-normal text-[1.5rem] aft750:text-[2rem] leading-[2rem] [word-break:break-word]`}>
                            {question}
                        </h3>

                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 448 512" focusable="false" fill="none" className={`text-[#121212] opacity-75 transition-all ease-[cubic-bezier(.4,0,.2,1)]  duration-150 absolute right-[1.5rem] h-[2rem]  top-0 ${open ? 'hidden' : 'block'} `} >
                            <path d="M240 64V48H208V64 240H32 16v32H32 208V448v16h32V448 272H416h16V240H416 240V64z" fill="currentColor"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className={`text-[#121212] opacity-100 transition-all ease-[cubic-bezier(.4,0,.2,1)]  duration-150 absolute right-[1.5rem] h-[2rem] top-0 ${!open ? 'hidden' : 'block'}`} fill="none" viewBox="0 0 448 512" >
                            <path d="M432 272H416L32 272H16l0-32 16 0 384 0 16 0v32z" fill="currentColor"></path>
                        </svg>
                    </summary>
                    <div
                        ref={contentRef}
                        style={{ maxHeight: open ? maxHeight : '0px' }}

                        className='mt-[1rem]  p-0 mb-0 overflow-hidden transition-[max-height] duration-500 ease-[ease-out] [word-break:break-word] t749px:[&_p]:text-[18px] [&_p]:text-[1.25rem] [&_p]:leading-[175%] [&_p]:font-normal [&_p]:mb-[1rem] [&_p:last-child]:mb-0 [&_p]:[word-break:break-word]'
                    >

                        {answer.map((content, contentIndex) => (
                            <React.Fragment key={contentIndex}>
                                {renderAnswerContent(content)}
                            </React.Fragment>
                        ))}
                    </div>
                </details>
            </div>

        </div>
    )
}

export default Individualfaq