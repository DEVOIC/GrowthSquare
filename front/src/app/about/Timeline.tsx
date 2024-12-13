import React from 'react'

const Timeline = () => {
  return (
    <section className="bg-lightblue py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
          <div className="relative">
            <div className="absolute left-0 top-0 w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-lightblue font-bold text-xl">?</span>
            </div>
            <div className="ml-20">
              <h2 className="text-3xl font-bold text-white mb-4">What Are We</h2>
              <p className="text-white/80">
                GrowthSquare is a network where students, mentors, and startups combine to turn potential into real-world impact,
                fostering a culture of hands-on learning and peer support.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0 w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-lightblue font-bold text-xl">!</span>
            </div>
            <div className="ml-20">
              <h2 className="text-3xl font-bold text-white mb-4">What We Do</h2>
              <p className="text-white/80">
                We connect students with real-world experiences and a supportive community, guiding them to become skilled
                professionals who contribute meaningfully to industry needs.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Timeline