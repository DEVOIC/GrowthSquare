import Image from "next/image"
import Navbar from "@/components/parts/navbar"
import Hero from "./hero"
import Footer from "@/components/parts/footer"
import Faqs from "./Faqs"
import Gsmarque from "./gsmarque"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-darkblue ">
      {/* Navigation */}
     <Navbar/>

      {/* Hero Section */}
      <Hero/>

      {/* Timeline Sections */}
      

      {/* Why It Matters & Wha&#39; Next */}
      <section className="bg-blue-600 py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
          <div className="relative">
            <div className="absolute left-0 top-0 w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold text-xl">?</span>
            </div>
            <div className="ml-20">
              <h2 className="text-3xl font-bold text-white mb-4">Why It Matters</h2>
              <p className="text-white/80">
                For students, companies, mentors, projects, and everyone in between and job-ready skills. For startups, it offers access to talented student teams prepared to work across tech disciplines.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0 w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold text-xl">!</span>
            </div>
            <div className="ml-20">
              <h2 className="text-3xl font-bold text-white mb-4">Wha&#39; Next</h2>
              <p className="text-white/80">
                GrowthSquare aims to build a collaborative ecosystem where students support each other and grow together, fueling a future-ready workforce for businesses nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gradient-to-b from-blue-600 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12">
            Lorem ipsum dolor sit amet, adipiscing lit initiatives
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {['Square Plus', 'Square Space', 'Square Light', 'Square Champ'].map((service) => (
              <div key={service} className="bg-white p-6 rounded-lg shadow-lg relative">
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Image src="/placeholder.svg" alt={`Icon for ${service}`} width={24} height={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{service}</h3>
                <p className="text-gray-600">
                  lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Sections */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-600 mb-8">The Brains Behind the Mission</h2>
          <p className="text-xl mb-12">
            Meet the trailblazers who set the foundation and continue to guide our community
            towards growth and innovation
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((member) => (
              <div key={member} className="relative group">
                <Image
                  src="/placeholder.svg"
                  alt="Team member"
                  width={240}
                  height={320}
                  className="rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 rounded-b-lg">
                  <h3 className="font-bold">Eleanor Jane</h3>
                  <p className="text-sm">UX/UI Designer</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Next Wave of Innovators */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-600 mb-8">The Next Wave of Innovators</h2>
          <p className="text-xl mb-12">
            The dedicated team working hard to build on the foundation laid by the mentors—
            ready to take on new challenges and grow together.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((member) => (
              <div key={member} className="relative group">
                <Image
                  src="/placeholder.svg"
                  alt="Team member"
                  width={240}
                  height={320}
                  className="rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 rounded-b-lg">
                  <h3 className="font-bold">Eleanor Jane</h3>
                  <p className="text-sm">UX/UI Designer</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Gsmarque/>

      {/* FAQ Section */}
      <Faqs/>

      {/* Footer */}
      <Footer/>
    </div>
  )
}