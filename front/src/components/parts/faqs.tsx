"use client"
import Loading from '@/app/loading'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React, { useEffect, useState } from 'react'

const Faqs =  () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_API}:${process.env.NEXT_PUBLIC_PORT}/${process.env.NEXT_PUBLIC_ROUTE}/auth/faq/get-faqs`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setFaqs(result.data.faqs);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className='w-screen bg-white text-black  relative overflow-y-clip'>
      <div className="ellipse top-right"></div>
      <div className="ellipse mid-left"></div>

      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <h2 className="text-3xl z-20 font-bold text-darkblue font-transforma mb-12">
              <p>Lorem ipsum dolor sit amet,</p>
              adipiscing lit FAQs
            </h2>
          </div>
          <div className="md:w-2/3 ">
            { faqs?
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((question, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className=" z-30 relative border-b border-gray-700 p-4 bg-lightblue my-4">
                    <AccordionTrigger className="text-white ">
                      {question.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-white">
                      {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. */}
                      {question.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion> : <Loading />}
          </div>
        </div>
      </section></div>
  )
}

export default Faqs