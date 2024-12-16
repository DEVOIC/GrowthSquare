import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'

const Faqs = () => {
  return (
    <div className='w-screen bg-white text-black relative overflow-y-clip'>
      <div className="ellipse top-right"></div>
      <div className="ellipse mid-left"></div>

      <section className="px-6 lg:px-16 container mx-auto py-20">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <h2 className="text-3xl lg:text-5xl z-20 font-bold text-darkblue font-transforma mb-12">
              <p>Lorem ipsum dolor sit amet,</p>
              adipiscing lit FAQs
            </h2>
          </div>
          <div className="md:w-2/3">
            <Accordion type="single" collapsible className="w-full">
              {[
                "What is Webflow and why is it the best website builder?",
                "What is your favorite template from BRIX Templates?",
                "How do you clone a Webflow Template from the Showcase?",
                "Why is BRIX Templates the best Webflow agency out there?",
                "Why is BRIX Templates the best Webflow agency out there?",
              ].map((question, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-700 px-4 lg:px-8  bg-lightblue my-4">
                  <AccordionTrigger className="text-white text-md  lg:text-lg">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
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