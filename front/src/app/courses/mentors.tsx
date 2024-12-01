import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import Image from "next/image";
import Link from "next/link";

export const Mentors = () => {
  return (
    <>
      <div className="bg-darkblue py-16 px-8 sm:px-16 md:px-28 pb-28 relative">
        <div className="ellipse2 top-right "></div>
        <div className="ellipse2 mid-left"></div>
        <div className="ellipse2 bottom-right "></div>

        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-16 mb-12">
            Meet your Mentors
          </h2>

          <div className="flex flex-wrap gap-12 mt-24">
            {[1, 2, 3, 4, 5, 6].map((mentor) => (
              <div
                key={mentor}
                className="flex flex-col sm:flex-row w-full sm:w-[48%] gap-6 sm:gap-10 z-10 relative mb-8"
              >
                <div className="h-[240px] sm:h-[360px] w-full sm:w-72 overflow-hidden flex items-start justify-center">
                  <Image
                    src="https://s3-alpha-sig.figma.com/img/579a/0efd/e273d026a7ead90372ffab771cf218a7?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X2Hz-qvTu26VZTEovzqOtNbGGKqnBJlhKzsBAIalv9e2E7hFjSwUduioXJ1N~RL0BMP17ha8qgPM5wUmwx7LJ8~0maIBdAPxTftCnqXVxsgB3l5~30n83d8X9FDOHrpjYuV9AvFjvFMMcQZUcIQgubGm7Jp1sP1-XQ4WQu-hU3zRy9WJkWdEvw-SVimhXNxwxrQ3CaeVUn7QQTVDqWjxTyVPPm0HJCRixHV52Tr8DBl2MHMoz~CXfu2mmzp7w9vHZ632pWzV-EDVdmc1Thm8z-VLFDKDBu9pWMgj6Iy~CBD9uyDy-SFYf7zcWIxrl3kCD4qk9zMF4V0EaGLeC7toYQ__"
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
                    <Badge className="bg-[#015AFF33] rounded-none text-white hover:bg-[#015AFF33] text-xs sm:text-sm">
                      Product Design
                    </Badge>
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
