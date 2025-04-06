"use client"
import Loading from '@/app/loading'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { useToast } from '@/hooks/use-toast'
import { getFaqs } from '@/lib/api'
import { Faq } from '@/types/api'
import React, { useEffect, useState } from 'react'

interface FaqsProps {
  page?: string;
}

const Faqs = ({ page }: FaqsProps) => {
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast()

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await getFaqs();
        setFaqs(response.data.faqs);
      } catch (err) {
        setError('Error fetching FAQs');
        toast({
          description: "Error fetching FAQs",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, [toast]);

  if (loading) {
    return (
      <div className="w-screen bg-white text-black relative overflow-y-clip">
        <div className="ellipse top-right"></div>
        <div className="ellipse mid-left"></div>
        <section className="lg:mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row gap-4 lg:gap-12">
            <div className="md:w-1/3">
              <div className="h-12 w-3/4 bg-gray-200 rounded animate-pulse mb-4"></div>
              <div className="h-12 w-1/2 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="md:w-2/3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="mb-4 p-4 bg-gray-100 rounded">
                  <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="h-16 w-full bg-gray-200 rounded animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  const filteredFaqs = faqs.filter(faq => faq.category == page);

  if (error || filteredFaqs.length === 0) {
    return <div></div>;
  }
  return (
    <div className='w-screen bg-white text-black relative overflow-y-clip'>
      <div className="ellipse top-right"></div>
      <div className="ellipse mid-left"></div>

      <section className="lg:mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row gap-4 lg:gap-12">
          <div className="md:w-1/3">
            <h2 className="text-3xl z-20 font-bold text-darkblue font-transforma mb-12">
              <p>New to GrowthSquare? </p>
              Here's What You Need to Know
            </h2>
          </div>
          <div className="md:w-2/3">
            <Accordion type="single" collapsible className="w-full">
              {filteredFaqs.map((faq) => (
                <AccordionItem
                  key={faq._id}
                  value={faq._id}
                  className="z-30 relative border-b border-gray-700 p-4 bg-lightblue mb-4"
                >
                  <AccordionTrigger className="text-white">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Faqs