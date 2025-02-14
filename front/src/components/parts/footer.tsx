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
      {/* <div className="w-screen relative py-10 lg:py-20  px-2 sm:px-16 md:px-28 "> */}
      <div className="ellipse top-right"></div>
      <div className="ellipse mid-left"></div>

      {/* CTA Section */}
      <section className="  border-b-2 justify-center px-8 md:px-0  py-20 text-center">
        <div className=" flex justify-center w-full   md:space-x-6 items-center">
          <h2 className="md:text-6xl items-center  text-start text-4xl font-bold  text-white mb-6">
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
            <div className=" flex-1 px-4 sm:px-14 py-8 md:p-14 md:border-r-2  md:mx-auto flex justify-between  md:w-2/3 ">
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
              <div className=" pr-2">
                <div className="space-y-2">
                  <Link
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
              <div className="flex space-x-16 md:space-x-4 py-4 lg:py-0 lg:mt-12  justify-center items-center my-auto">
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
          <p className="text-center">&copy; 2024 Copyright. All Rights Reserved</p>
          <div className="flex flex-wrap items-center justify-center space-x-6 mt-4 md:mt-0">
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
