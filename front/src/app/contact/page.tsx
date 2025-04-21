'use client'
import Footer from '@/components/parts/footer'
import Navbar from '@/components/parts/navbar'


import Gsmarque from '@/components/parts/gsmarque'
import Faqs from '@/components/parts/faqs'
import Body from './body'
// import Faqs from '@/components/parts/faqs'



export const dynamic = "force-dynamic";

export default function ContactPage() {

  return (
    <div className="min-h-screen bg-darkblue ">
      {/* Navigation */}
      <Navbar />

      <div className="ellipse2 top-right"></div>
      <div className="ellipse2 mid-left"></div>

      {/* Hero Section */}

      <Body />


      {/* gsmarque  */}
      <div>
        <Gsmarque />
      </div>

      {/* FAQ Section */}
      <Faqs page={"About"} />
      {/* Footer */}

      <div className='bg-darkblue'>
        <Footer />
      </div>

    </div>
  )
}