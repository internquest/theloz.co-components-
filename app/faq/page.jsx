import React from 'react'
import Individualfaq from '../components/Individualfaq'

const Faq = () => {
    const faqData = [
        {
            question: "What are Moisturizing Lozenges?",
            answer: [
                { type: 'paragraph', content: "Loz Moisturizing Lozenges are pH balanced lozenges that moisturize the mouth quickly but dissolve slowly for lasting relief." },
                { type: 'paragraph', content: "Hyaluronic Acid and Xylitol do the heavy lifting so natural saliva can get back to remineralizing teeth, regulating oral health and combatting dry mouth." },

            ]
        },
        {
            question: "When should Loz be used?",
            answer: [
                { type: 'paragraph', content: "Any time really!" },
                { type: 'paragraph', content: "Loz Moisturizing Lozenges were developed together with friends and family who experienced dry mouth as a side effect of:" },
                {
                    type: 'list', items: [
                        "Medication use",
                        "Anxiety or public speaking",
                        "Smoking",
                        'Sleep apnea or snoring',
                        'Old fashioned aging'
                    ]
                },
                { type: 'paragraph', content: "Loz is also great as a breath mint and can even help moisturize lips." },
            ]
        },

        {
            question: "How to get the most out of Loz?",
            answer: [
                { type: 'paragraph', content: "For optimal results, allow each lozenge to dissolve slowly in your mouth. Avoid chewing, and gently swirl the lozenge with your tongue to improve moisture coverage and speed up the dissolving process." },
                { type: 'paragraph', content: "Consistent daily, or nightly, use of Loz can maximize its effectiveness compared to using them only when moisture or fresh breath are desired." },

            ]
        },
        {
            question: "Ingredients",
            answer: [
                { type: 'paragraph', content: "Loz Lozenges are made with pharmaceutical-grade ingredients ensuring a safe, consistent and long-lasting experience. We use ingredients that are vegan and absent of genetically modified organisms, dairy and soy." },
                { type: 'paragraph', content: "We plan to expand our flavor offerings in the future. Let us know if there are any flavors we should consider!" },

            ]
        },
        // Add more FAQ items here
    ];
    return (
        <main>

            <div>
                <div className='lg:!pt-48 lg:!px-44 aft750:pt-28 aft750:px-12 aft750:-mb-28 pt-12 pb-0 px-6 -mb-14 relative z-10 '>
                    <div className='!px-0  my-0 mx-auto aft750:px-0   gap-16 flex-col flex max-w-[80rem] '>
                        <p className='aft750:text-[1.5rem] leading-[2rem] text-[rgb(39_39_42/1)] text-center whitespace-nowrap gap-[.875rem] items-baseline flex'>FAQ
                            <span className=' w-[5.5625rem] h-[.125rem] bg-[rgb(39_39_42/1)]'></span>
                        </p>
                        <h1></h1>
                    </div>
                </div>
            </div>
            <section>
                <div className='text-[rgb(18,18,18)] bg-white bg-fixed '>
                    <div className='relative z-0 aft750:px-12 lg:!px-44   pt-[4.38rem] px-6'>
                        <div className='aft750:pt-[36px]  aft750:pb-[192px] pt-[27px] pb-[144px]'>
                            <div className='px-0 max-w-7xl '>
                                <div className='flex p-0 '>
                                    <div className='w-[50%] max-w-full flex-shrink-0 flex-grow'>
                                        {
                                            faqData.map((faq, index) => (
                                                <Individualfaq key={index} question={faq.question} answer={faq.answer} />
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Faq