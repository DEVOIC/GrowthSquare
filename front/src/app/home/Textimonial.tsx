import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import Loading from "../loading";
const TestCard = () => {
  return (
    <Card className={`bg-white py-8 lg:p-6  md:col-span-2 `}>
      <CardContent>
        <div className="flex items-center space-x-4 mb-4">
          <Avatar>
            <AvatarImage
              src="https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=9vuq6HxeSZfhZ7Jit_2HPVLyoajffb7h_SbWssh_bME="
              alt="User"
            />
            <AvatarFallback>MG</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">Martin Goutry</h3>
            <p className="text-sm text-gray-600">
              Back-end developer at MyDodow
            </p>
          </div>
        </div>
        <p className="text-gray-600">
          Dico is finally addressing a long time problem we had when building
          UIs. It&#39;s ease of use and workflow seems really intuitive.
          Promising!
        </p>
      </CardContent>
    </Card>
  );
};
const Testimonial = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_BACK_API}:${process.env.NEXT_PUBLIC_PORT}/${process.env.NEXT_PUBLIC_ROUTE}/auth/testimonials/get-testimonials`)
  if (data.status !== 200) {
    return (<Loading />)
  }
  const rawData = await data.json()
  const testimonial: Testimonial[] = await rawData.data.testimonial
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

        <div className="grid grid-cols-1 md:grid-rows-3 md:grid-cols-6 gap-5">
          <div className=" bg-lightblue "></div>
          <div className="col-span-2 ">
            <TestCard />
          </div>
          <div className=" bg-lightblue "></div>
          <div className=" h-full col-span-2 ">
            <TestCard />
          </div>
          <div className="col-span-2">
            <TestCard />
          </div>
          <div className=" bg-lightblue "></div>

          <div className="col-span-2">
            <TestCard />
          </div>
          <div className=" bg-lightblue  "></div>
          <div className=" bg-lightblue "></div>
          <div className="col-span-2 ">
            <TestCard />
          </div>
          <div className=" bg-lightblue "></div>
          <div className=" h-full col-span-2 ">
            <TestCard />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
