
import Footer from "@/components/parts/footer"
import Navbar from "@/components/parts/navbar"
import { Courseadvantage } from "./courseadvantage"
import { Mentors } from "./mentors"
import { Courses } from "./courses"
import LearnAtYourPace from "./learnatownpeace"
import Faqs from "@/components/parts/faqs"

export default function CoursesPage() {
  return (

    <div className="bg-darkblue">
      {/* Navigation */}
      <Navbar />
      {/* Hero Section */}
      <section className="text-center lg:mt-[200px] mt-28 pb-32 px-4 relative">

        {/* ellipse */}
        <div className="ellipse top-right -mt-16 backdrop:blur-2xl"> </div>
        <div className="ellipse mid-left"> </div>

        <h1 className="md:text-6xl text-[4vmax] font-transforma leading-tight font-bold text-white mb-4">
          Your <span className="text-lightblue">Skill-Building</span> Journey
          <br />Starts Here
        </h1>
        <p className="text-white/80   text-lg mb-8 max-w-2xl mx-auto">
          Practical, hands-on courses that prepare you for
          <br />
          what&#39;s next in{" "}
          <span className="relative after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-lightblue after:-bottom-2 after:left-0">
            your career
          </span>
        </p>
      </section>

      {/* learning grid  */}
      <LearnAtYourPace />
      {/* Course Categories */}

      <section className="bg-white py-10 lg:py-20  px-8 sm:px-16 md:px-28  relative">
        {/* ellipse */}
        <div className="ellipse2 top-right"> </div>
        <div className="ellipse2 mid-left mt-8"> </div>

        <div className=" mt-16">
          <h2 className=" text-3xl lg:text-5xl font-transforma font-bold mb-8 text-darkblue">
            Lorem ipsum dolor sit amet,
            <br />adipiscing lit courses
          </h2>
          <div className="flex gap-4 lg:gap-10 my-20 flex-wrap">
            {['All', 'App Development', 'UI/UX Design', 'Video Editing', 'Web Development'].map((category, idx) => (
              <button
                key={idx}
                className={`px-4 py-1  lg:text-xl font-medium rouded-none ${idx === 0
                  ? 'bg-lightblue text-white'
                  : 'border border-lightblue text-lightblue hover:bg-blue-50'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
          {/* Course Cards */}
          <Courses />
        </div>
      </section>

      {/* Mentors Section */}
    
        <Mentors />
    

      {/* Course Advantages */}
      <Courseadvantage />

      {/* FAQ Section */}
      <Faqs />

      {/* Footer */}
      <div className="bg-darkblue">
        <Footer />
      </div>
    </div>
  );
}
