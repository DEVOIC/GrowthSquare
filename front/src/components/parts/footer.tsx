import Link from "next/link";
import React from "react";

import {

  Instagram,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import Image from "next/image";


const Footer = () => {
  return (
    <div className="w-screen relative">
      <div className="ellipse top-right overflow-hidden"></div>
      <div className="ellipse mid-left overflow-hidden"></div>

      {/* CTA Section */}
      <section className=" w-screen border-b-2  px-4 py-20 text-center">
        <div className=" flex justify-center  space-x-6 items-center">
          <h2 className="text-6xl font-bold  text-white mb-6">
            Let&#39;s work together
          </h2>

          <Image
            src="/whiteLogo.png"
            alt="Logo"
            width={50}
            height={50}
            className=""
          />
        </div>
      </section>

      {/* Footer */}
      <footer className=" text-gray-400 ">
        <div className="  ">

          <div className="w-full flex  ">
            <div className=" flex-1 p-14  border-r-2  mx-auto flex justify-between w-2/3 ">
              <div className="">
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
                  <Link
                    href="/courses"
                    className="block text-white hover:text-white"
                  >
                    Services
                  </Link>
                  <Link
                    href="/contact"
                    className="block text-white hover:text-white"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              <div>
                <div className="space-y-2">
                  <Link
                    href="/courses"
                    className="block text-white hover:text-white"
                  >
                    Courses
                  </Link>
                  <Link
                    href="#"
                    className="block text-white hover:text-white"
                  >
                    FAQs
                  </Link>
                  <Link
                    href="https://blog.growthsq.in/"
                    className="block text-white hover:text-white"
                  >
                    Blog
                  </Link>
                </div>
              </div>
              <div>
                <div className="space-y-2">
                  <Link
                    href="/courses"
                    className="block text-white hover:text-white"
                  >
                    UI/UX Design
                  </Link>
                  <Link
                    href="/courses"
                    className="block text-white hover:text-white"
                  >
                    Web Dev
                  </Link>
                  <Link
                    href="/courses"
                    className="block text-white hover:text-white"
                  >
                    App Dev
                  </Link>
                  <Link
                    href="/courses"
                    className="block text-white hover:text-white"
                  >
                    Video Editing
                  </Link>
                </div>
              </div>{" "}
            </div>
            <div className="flex-1">
              <div className="border-b-2 p-4  ">
                <div className="w-2/3 mx-auto py-4 my-auto">

                  <p>
                    mast quote to inspire ppl lorem ipsum dolor sit amet amet, consectetur adipiscing elit
                  </p>
                  <p>
                    ~ John Doe
                  </p>
                </div>
              </div>
              <div className="flex space-x-4 py-4 lg:py-0 lg:mt-12  justify-center items-center my-auto">
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


          <p>&copy; 2024 Copyright. All Rights Reserved</p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-white">
              Terms & Conditions
            </Link>
            <Link href="#" className="text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white">
              Refund Policy
            </Link>
          </div></div>
      </div>
    </div>
  );
};

export default Footer;
