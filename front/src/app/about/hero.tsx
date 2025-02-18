
// import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (

        
    <section className=" bg-darkblue  pb-10  ">
        <div className=' container mx-auto px-4 py-20 text-center  relative'>
      <div className="ellipse top-right"></div>
      <div className="ellipse bottom-left"></div>

        <h1 className="text-5xl md:text-6xl font-transforma font-semibold text-white mb-6">
        Your progress begins  <span className="text-lightblue">here</span>
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
        Your First Step Toward a Future of  <span className="border-b-4 border-lightblue">Limitless Opportunities</span>
        </p>
        
        {/* <div className='absolute  -bottom-24'>

        <div className='w-94 h-12'>

            <Image
            width={2000}
            height={100}
            objectFit='cover'
            
            src="https://s3-alpha-sig.figma.com/img/c155/ca6e/1097f82795b82001c634f3623199a546?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pmWJQosquT2bTFEmNB817rIpEn9zrg-s5zk5j6CBOTViWIak3JYo6HAMQhXaMd14CG8jTCnA7TXEpns6HAJsoyB7KWHpLuJMen-i-GLZdOmDnqn3sX8eRDyzE~qLPt5dwT9qPWZSOmie80LBu0cJzBq-D2vBvlLsDJonX9QkC9YFnJ7icBslPD6UMiiSgCdfHIYzrcTeRZ-xtHCikRg-rdN-VGMB6kJLxDKC7E-y2v2Vk0Z0jlrK4vi1JETxuCFz7drDalIKEbq0W13P4UDfDGqfmufBWEsjhit5bQUEJ0mD6rFNeFlQdrJVB2vLTOZYYmI8YGSUXX0vb7TuzA-tcA__" alt="placeholder" />
       
            </div>
            </div> */}
            

            </div>
      </section>
  )
}

export default Hero