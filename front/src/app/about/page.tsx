
import Navbar from "@/components/parts/navbar";
import Hero from "./hero";
import Footer from "@/components/parts/footer";
import Faqs from "./Faqs";
import Gsmarque from "./gsmarque";
import Founding from "./Founding";
import Inovators from "./Inovators";
import Services from "./Services";
import What from "./What";
import Why from "./Why";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-darkblue ">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Timeline Sections */}

      {/* Why It Matters & Wha&#39; Next */}
     <What/>

      {/* Services Grid */}
     <Services/>

     <Why/>


        {/* Team Sections */}
        <Founding />

        {/* The Next Wave of Innovators */}

        <Inovators />

      <Gsmarque />

      {/* FAQ Section */}
      <Faqs />

      {/* Footer */}
      <Footer />
    </div>
  );
}
