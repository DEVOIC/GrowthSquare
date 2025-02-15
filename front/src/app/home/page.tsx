
import Navbar from "@/components/parts/navbar"
import Hero from "./hero"
import Courses from "./courses"
import Stats from "./Stats"
import Testimonial from "./Textimonial"
import Services from "./Services"
import Galley from "./galley"
import Gsmarque from "./gsmarque"
import Initiaitive from "./Initiaitive"
import Faqs from "@/components/parts/faqs"
import Footer from "@/components/parts/footer"
// import FaqContainer from "@/components/ui/faqcontainer"


export default function Home() {
  return (
    <div className=" bg-darkblue   ">


      {/* Navigation */}

      <Navbar />

      {/* Hero Section */}
      <Hero />

      <Courses />

      <Stats />


      {/* Testimonials */}
      <Testimonial />

      {/* Services Section */}
      <Services />

      {/* Event Gallery */}
      <Galley />

      {/* Exclusive Squares */}
      <div className="overflow-hidden relative">
      <Gsmarque />

      </div>
      <Initiaitive />

      {/* FAQ Section */}
      {/* <FaqContainer> */}
        <Faqs />
      {/* </FaqContainer> */}

      {/* Footer */}
      <Footer />

    </div>
  )
}