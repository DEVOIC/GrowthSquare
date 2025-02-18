"use client";
import { Avatar,  } from "@/components/ui/avatar";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import Loading from "../loading";
// import { useToast } from "@/hooks/use-toast";

// temporary
interface Testimonial {
  profileImage: string;
  name: string;
  role: string;
  message: string;
}
const testimonials: Testimonial[] = [
  {
    profileImage: "https://drive.google.com/uc?id=1lFfAcprX1XHTI6UZYJFGmsJczB14VBkL",
    name: "Sumit Singh Raghuwanshi",
    role: "Web Development",
    message: "I had the incredible opportunity to learn web development from scratch with the Devoic Community, and it’s been a journey like no other. I was warmly welcomed and guided by the dedicated mentors who made every step clear and achievable. They’re always attentive, and genuinely invested in each member’s growth. The study materials we used were carefully selected by the senior members, allowing us to learn only from the best resources. This guidance truly accelerated my understanding. What also stood out were the hands-on projects, which gave me confidence in applying the skills I gained.",
  },
  {
    profileImage: "https://drive.google.com/uc?id=1rT41hLZZsKcDwoQH9txLWEqMvAd6D0ZG",
    name: "Nitin Chakrawarti",
    role: "Web",
    message: "This program has been incredibly valuable in developing my web development skills, covering HTML, CSS, JavaScript, React, and version control, as well as enhancing teamwork. Before joining, I was familiar with these technologies, but I've come to realize there’s so much more to learn. I'm grateful to DEVOIC, my mentors. Thank you.",
  },
  {
    profileImage: "https://drive.google.com/uc?id=1JRA7BiThzj81bqCqwWfkGkRIwQBptb3d",
    name: "Archana Nair",
    role: "Web/UI/UX",
    message: "Hello everyone, I am Archana Nair from the Web Development and Visual Design Team. I was new to web development, but Devoic made learning incredibly smooth. The mentors broke down complex concepts into easy-to-understand during meetings. The hands-on projects and personalized support were invaluable. I've gained confidence to build my own websites.",
  },
  {
    profileImage: "https://drive.google.com/uc?id=1rPyRQJeO3MPvwSAu1tACwip4QvBscYK8",
    name: "Himansh Prajapati",
    role: "Web development",
    message: "It is a great atmosphere in Devoic, mentors are very helpful and project-based learning is provided. Overall, it is a great experience being with the Devoic team and learning and growing together.",
  },
  {
    profileImage: "https://drive.google.com/uc?id=1VKdb46ejp9Y9h3XFCawiQ7m4awYqFFXj",
    name: "Lipika Sonkeshri",
    role: "DSA",
    message: "Hello everyone, I am Lipika Sonkeshri, I am learning DSA from DSA: Cohort 3.0. I am having a great experience from the guidance and roadmap our mentors are giving us and enjoying my DSA journey. 'Thank You'.",
  },
];



const TestCard = ({ data }: { data: Testimonial }) => {
  return (
    <Card className={`bg-white py-8 lg:p-6  md:col-span-2 `}>
      <CardContent>
        <div className="flex items-center space-x-4 mb-4">
          <Avatar>
           <Image
              src={data.profileImage}
              alt={data.name}
              width={40}
              height={40}
              className="rounded-full"
              />
            {/* <AvatarFallback>{data.name}</AvatarFallback> */}
          </Avatar>
          <div>
            <h3 className="font-semibold">{data.name}</h3>
            <p className="text-sm text-gray-600">
              {data.role}
            </p>
          </div>
        </div>
        <p className="text-gray-600 ">
         {data.message }
        </p>
      </CardContent>
    </Card>
  );
};


const Testimonial =  () => {
//   const [testimonials, setTestimonials] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { toast } = useToast()
//   const showstate = () => {
//     toast({
//       description: "Error fetching testimonials",
//     })

//   }
//   useEffect(() => {
//     const fetchTestimonials = async () => {
//       try {
//         const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_API}:${process.env.NEXT_PUBLIC_PORT}/${process.env.NEXT_PUBLIC_ROUTE}/auth/testimonials/get-testimonials`);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const rawData = await response.json();
//         setTestimonials(rawData.data.testimonials);
//       } catch (error) {
//         showstate();
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTestimonials();
//   }, []);

//   if (loading || !testimonials) {
//     return <Loading />;
//   }
// if (error) {
//     return <div></div>;

//   }
  

  return (
    <div className="w-screen relative">
      <div className=" ellipse top-right"></div>
      <div className=" ellipse mid-left"></div>
      <div className=" ellipse bottom-right"></div>

      <section className="container z-10 mx-auto px-4 py-20 bg-darkblue">
        <h2 className="text-3xl font-bold text-white font-transforma mb-12">
          <p>Lorem ipsum dolor sit amet,</p>
          adipiscing lit courses
        </h2>

        <div  className="  grid grid-cols-1 md:grid-rows-3  md:grid-cols-6 gap-5 ">
          {/* <div className=" bg-lightblue "></div> */}
          <div className="col-span-2 row-span-2 ">
            <TestCard data= {testimonials[0]} />
          </div>
          <div className=" bg-lightblue "></div>
          <div className="  col-span-3 ">
            <TestCard data={testimonials[1]} />
          </div>
          <div className="col-span-3">
          <TestCard data={testimonials[2]} />

          </div>
          <div className=" bg-lightblue "></div>

          {/* <iframe
              className=" h-full w-full col-span-2"
              src="https://drive.google.com/file/d/10w7GAWoJHxpngJNwycQctPmk-Z8tQZIN/preview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Testimonial Video"
            ></iframe> */}
          <div className=" bg-lightblue "></div>
          <div className="col-span-2">
          <TestCard data={testimonials[3]} />
          </div>
          <div className=" bg-lightblue  "></div>
          <div className="col-span-2 ">
          <TestCard data={testimonials[4]} />

          </div>
          {/* <div className=" bg-lightblue "></div> */}

       
        </div>
          {/* <div className=" bg-lightblue "></div> */}
      </section>
    </div>
  );
};

export default Testimonial;
