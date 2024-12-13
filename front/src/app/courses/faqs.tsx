import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'


const Faqs = () => {
    return (
        <div className='relative py-10 lg:py-20  px-8 sm:px-16 md:px-28'>
            <div className="ellipse2 top-right"></div>
            <div className="ellipse2 mid-left"></div>

            <section className="pb-16 ">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-1/3 mt-8 md:mt-16">
                        <h2 className=" text-3xl md:text-5xl leading-tight z-20 font-bold text-darkblue font-transforma md:mb-12 mb-0">
                            <p>Lorem ipsum dolor sit amet,</p>
                            adipiscing lit FAQs
                        </h2>
                    </div>
                    <div className="lg:w-2/3 z-10 relative">
                        <Accordion type="single" collapsible className="w-full ">
                            {[
                                "What is Webflow and why is it the best website builder?",
                                "What is your favorite template from BRIX Templates?",
                                "How do you clone a Webflow Template from the Showcase?",
                                "Why is BRIX Templates the best Webflow agency out there?",
                                "Why is BRIX Templates the best Webflow agency out there?",
                            ].map((question, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-700 px-6 lg:px-10  py-2  bg-lightblue my-4">
                                    <AccordionTrigger className="text-white text-sm md:text-xl font-semibold">
                                        {question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-white/9cracki text-sm md:text-lg font-medium">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section></div>
    )
}

export default Faqs