import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'

const CourseContent = () => {
    return (
        <div className='relative w-full  md:py-10 lg:py-20  px-2 '>
            <div className="ellipse2 top-right"></div>
            <div className="ellipse2 mid-left"></div>
            <div className="lg:w-2/3 z-10 relative">
                <Accordion type="single" collapsible className="w-full ">
                    {[1, 2, 3, 4, 5].map((lesson, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-[1px] border-lightblue px-4 md:-10 py-2 bg-white my-4">
                            <AccordionTrigger className="text-darkblue  md:text-lg font-semibold">
                                Lesson {index + 1}: Lorem ipsum dolor sit amet, adipiscing lit
                            </AccordionTrigger>
                            <AccordionContent className="text-darkblue md:text-lg font-medium">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}

export default CourseContent
