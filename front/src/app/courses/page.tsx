
import Footer from "@/components/parts/footer"
import Faqs from "@/components/parts/faqs"
import Navbar from "@/components/parts/navbar"
import FaqContainer from "@/components/ui/faqcontainer"
import { Courseadvantage } from "./courseadvantage"
import { Mentors } from "./mentors"
import { Courses } from "./courses"
import LearnAtYourPace from "./learnatownpeace"

export default function CoursesPage() {
  return (

    <div className="bg-gradient-to-b from-darkblue to-blue-600 ">
      {/* Navigation */}
      <Navbar />
      {/* Hero Section */}
      <section className="text-center lg:mt-[200px] mt-28 pb-32 px-4 relative">

        {/* ellipse */}
        <div className="ellipse opacity-50 top-right -mt-16 backdrop:blur-2xl"> </div>
        <div className="ellipse opacity-50 mid-left"> </div>

        <h1 className="text-6xl leading-tight font-bold text-white mb-4">
          Your <span className="text-lightblue">Skill-Building</span> Journey
          <br />Starts Here
        </h1>
        <p className="text-white/80 text-2xl mb-12">
          Practical, hands-on courses that prepare you for
          <br />
          what&#39;s next in{" "}
          <span className="relative after:content-[''] after:absolute after:w-full after:h-[6px] after:bg-lightblue after:-bottom-3 after:left-0">
            your career
          </span>
        </p>
      </section>

      {/* learning grid  */}
      <LearnAtYourPace />
      {/* Course Categories */}

      <section className="bg-white py-20  md:px-28  px-8 relative">
        {/* ellipse */}
        <div className="ellipse2 top-right"> </div>
        <div className="ellipse2 mid-left mt-8"> </div>

        <div className=" mt-16">
          <h2 className="text-5xl font-bold mb-8 text-darkblue">
            Lorem ipsum dolor sit amet,
            <br />adipiscing lit courses
          </h2>
          <div className="flex gap-10 my-20 flex-wrap">
            {['All', 'UI/UX Design', 'App Development', 'Web Development', 'Video Editing'].map((category, idx) => (
              <button
                key={idx}
                className={`px-6 py-2 text-xl font-semibold rouded-none ${idx === 0
                  ? 'bg-lightblue text-white'
                  : 'border-2 border-lightblue text-lightblue hover:bg-blue-50'
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
      <div className="">
        <Mentors />
      </div>

      {/* Course Advantages */}
      <Courseadvantage />

      {/* FAQ Section */}
      <FaqContainer className="px-8 md:px-16 pt-10">
        <Faqs />
      </FaqContainer>

      {/* Footer */}
      <div className="bg-darkblue">
        <Footer />
      </div>
    </div>
  );
}
