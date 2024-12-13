import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import photo from './mentor.jpg';
import Image from "next/image";
import Link from "next/link";

export const Mentors = () => {
  return (
    <>
      <div className="bg-darkblue lg:py-16 px-8 sm:px-16 md:px-28 pb-28 relative">
        <div className="ellipse2 top-right "></div>
        <div className="ellipse2 mid-left  "></div>
        <div className="ellipse2 bottom-right "></div>

        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-16 mb-12">
            Meet your Mentors
          </h2>

          <div className="flex flex-wrap lg:gap-4  mt-24">
            {[1, 2, 3, 4, 5, 6].map((mentor) => (
              <div
                key={mentor}
                className="flex flex-col sm:flex-row w-full  xl:w-[48%]  gap-6 sm:gap-10 z-10 relative mb-8"
              >
                <div className="h-[240px] sm:h-[360px] w-full sm:w-72 overflow-hidden flex items-start justify-center">
                  <Image
                    src={photo}
                    alt="Mentor Image"
                    width={288}
                    height={360}
                    className="rounded-none object-cover object-top w-full sm:w-auto"
                  />
                </div>
                <div className="w-full sm:w-[40%] flex justify-center flex-col">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                    Eleanor Jane
                  </h3>
                  <p className="text-white mb-2 text-sm sm:text-base">
                    Founder of ABC
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400 my-4">
                    Atypical Advantage - Shark Tank S2 | Amazon, US & India |
                    Times of India | IIM Bangalore | NIT Allahabad | TEDx
                    Speaker
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-[#015AFF33] py-2 rounded-none hover:bg-[#015AFF33] text-white text-xs sm:text-sm">
                      UI/UX Design
                    </Badge>
                    {/* <Badge className="bg-[#015AFF33] rounded-none text-white hover:bg-[#015AFF33] text-xs sm:text-sm">
                      Product Design
                    </Badge> */}
                  </div>
                  <div className="flex gap-4 sm:gap-6 mt-6">
                    <Link href="#" className="text-white hover:text-lightblue">
                      <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                    </Link>
                    <Link href="#" className="text-white hover:text-lightblue">
                      <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
                    </Link>
                    <Link href="#" className="text-white hover:text-lightblue">
                      <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                    </Link>
                    <Link href="#" className="text-white hover:text-lightblue">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
