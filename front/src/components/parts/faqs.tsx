"use client"
import Loading from '@/app/loading'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { useToast } from '@/hooks/use-toast'
import React, { useEffect, useState } from 'react'

const Faqs =  () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { toast } = useToast()
  const showstate = () => {
    toast({
      description: "Error fetching Faqs",
    })

  }
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_API}:${process.env.NEXT_PUBLIC_PORT}/${process.env.NEXT_PUBLIC_ROUTE}/auth/faq/get-faqs`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        const completeData  = result.data.faqs;
        setFaqs(completeData);
      } catch (error) {
        showstate();
        console.log(error)
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
  const currentPath = window.location.pathname;
  const filteredFaqs = faqs.filter(faq => faq.category == capitalizeFirstLetter(currentPath.replace('/','')));
 
  if (error || filteredFaqs.length === 0) {
    return <div></div>;
  }

  return (
    <div className='w-screen bg-white text-black  relative overflow-y-clip'>
      <div className="ellipse top-right"></div>
      <div className="ellipse mid-left"></div>

      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <h2 className="text-3xl z-20 font-bold text-darkblue font-transforma mb-12">
              <p>New to GrowthSquare? </p>
              Here's What You Need to Know
            </h2>
          </div>
          <div className="md:w-2/3 ">
            { faqs?
              <Accordion type="single" collapsible className="w-full">
                {filteredFaqs.map((question, index) => (
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