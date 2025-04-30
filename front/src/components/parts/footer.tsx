"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  Instagram,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import Image from "next/image";

// Local quotes array to avoid CORS issues

const quotes = [
  { text: "Dreams are not what you see in sleep, dreams are those that do not let you sleep.", author: "Dr. A.P.J. Abdul Kalam" },
  { text: "Arise, awake, and stop not till the goal is reached.", author: "Swami Vivekananda" },
  { text: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela" },
  { text: "Don’t take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck.", author: "Dr. A.P.J. Abdul Kalam" },
  { text: "Take risks in your life. If you win, you can lead; if you lose, you can guide.", author: "Swami Vivekananda" },
  { text: "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.", author: "Vince Lombardi" },
  { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
  { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" }
];


const Footer = () => {
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    // Get a random quote from our local array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  return (
    <div className="w-screen relative">
      {/* <div className="w-screen relative py-10 lg:py-20  px-2 sm:px-16 md:px-28 "> */}
      <div className="ellipse top-right"></div>
      <div className="ellipse mid-left"></div>

      {/* CTA Section */}
      <section className="  border-b-2 justify-center px-8 md:px-0 py-10 md:py-20 text-center">
        <div className=" flex justify-center w-full   md:space-x-6 items-center">
          <h2 className="md:text-6xl items-center  text-start text-4xl font-bold  text-white mb-2">
            Let&#39;s work together
          </h2>
          <Image
            src="/whiteLogo.png"
            alt="Logo"
            width={50}
            height={50}
            className="-mt-4"
          />

        </div>
      </section>

      {/* Footer */}
      <footer className=" text-gray-400 z-50 relative ">
        <div className="  ">
          <div className="w-full flex md:flex-row flex-col ">
            <div className="  px-4 sm:px-14 py-8 md:py-14 md:px-2 md:border-r-2  flex justify-evenly  md:w-1/2 ">
              <div className=" pr-2">
                <div className="space-y-2">
                  <Link
                    href="/home"
                    className="block text-white hover:text-white"
                  >
                    Explore
                  </Link>
                  <Link
                    href="/about"
                    className="block text-white hover:text-white"
                  >
                    About
                  </Link>
                  {/* <Link
                    href="/courses"
                    className="block text-white hover:text-white"
                  >
                    Services
                  </Link> */}
                  <Link
                    href="https://blog.growthsq.in/"
                    className="block text-white hover:text-white"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/contact"

                    className="block text-white hover:text-white"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className=" pr-2">
                <div className="space-y-2">
                  {/* <Link
                    href="#"
                    className="block text-white hover:text-white"
                  >
                    Courses
                  </Link>
                  <Link
                    href="#"
                    className="block text-white hover:text-white"
                  >
                    FAQs
                  </Link> */}
                  {/* <Link
                    href="https://blog.growthsq.in/"
                    className="block text-white hover:text-white"
                  >
                    Blog
                  </Link> */}
                </div>
              </div>
              <div>
                <div className="space-y-2">
                  <Link
                    href="https://blog.growthsq.in/ui-ux-design/"
                    target="_blank"
                    className="block text-white hover:text-white"
                  >
                    UI/UX Design
                  </Link>
                  <Link
                    href="https://blog.growthsq.in/web-development/"
                    target="_blank"
                    className="block text-white hover:text-white"
                  >
                    Web Dev
                  </Link>
                  {/* <Link
                    href="/courses"
                    className="block text-white hover:text-white"
                  >
                    App Dev
                  </Link> */}
                  <Link
                    href="https://blog.growthsq.in/video-editing"
                    target="_blank"
                    className="block text-white hover:text-white"
                  >
                    Video Editing
                  </Link>
                </div>
              </div>{" "}
            </div>
            <div className="flex lg:w-1/2 flex-col">

              <div className="border-b-2 md:flex md:justify-center md:p-4 ">
                <div className=" px-4 md:px-0  md:w-2/3 md:mx-auto py-4 my-auto">
                  <p>"{quote.text}"</p>
                  <p className="text-end">~ {quote.author}</p>
                </div>
              </div>

              <div className=" flex space-x-16 md:space-x-16 h-full  py-6 lg:py-auto  justify-center items-center ">
                <Link href="https://www.instagram.com/growthsq/" className="hover:text-white">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="https://x.com/thegrowthsquare" className="hover:text-white">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="https://www.linkedin.com/company/growthsq/" className="hover:text-white">
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="contact@growthsq.in" className="hover:text-white">
                  <Mail className="h-6 w-6" />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </footer>
      <div className=" font-medium  border-t text-white bg-lightblue border-gray-800 p-5 flex flex-col md:flex-row justify-between items-center">
        <div className="mx-auto w-10/12 container flex lg:flex-row flex-col-reverse items-center gap-4 lg:gap-0 lg:justify-between">
          <p className="text-center">&copy; {new Date().getFullYear()} Copyright. All Rights Reserved</p>
          <div className="flex flex-wrap items-center justify-center space-x-6 mt-4 md:mt-0">
            {/* <Link href="/termsncondition" className="text-white hover:underline">
              Terms & Conditions
            </Link> */}
            <Link href="/privacypolicy" className="text-white hover:underline">
              Privacy Policy
            </Link>
            {/* <Link href="/refundpolicy" className="text-white hover:underline">
              Refund Policy
            </Link> */}
          </div></div>
      </div>
    </div>
  );
};

export default Footer;
