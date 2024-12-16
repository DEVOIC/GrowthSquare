import { Instagram, Twitter, Linkedin, Mail, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import photo from '../../app/courses/mentor.jpg';
import Image from "next/image";
import Link from "next/link";
const getSocialIcon = (url: string) => {
    if (url.includes('linkedin.com')) {
      return <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white hover:text-opacity-35" />;
    } else if (url.includes('twitter.com')) {
      return <Twitter className="w-5 h-5 sm:w-6 sm:h-6 text-white hover:text-opacity-35" />;
    } else if (url.includes('instagram.com')) {
      return <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white hover:text-opacity-35" />;
    } else if (url.includes('mailto:')) {
      return <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white hover:text-opacity-35" />;
    } else if (url.includes('github.com')) {
      return <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white hover:text-opacity-35" />;
    } else {
      return null;
    }
  };
const MentorCard = ({data}:{data:teams}) => {
    const socialLinks = data.socialLinks || [];

  return (
<>
<div

                className="flex flex-col sm:flex-row w-full  xl:w-[48%]  gap-6 sm:gap-10 z-10 relative mb-8"
              >
                <div className="h-[240px] sm:h-[360px] w-full sm:w-72 overflow-hidden flex items-start justify-center">
                  <Image
                    src={data.profilePicture?data.profilePicture:photo}
                    alt="Mentor Image"
                    width={288}
                    height={360}
                    className="rounded-none object-cover object-top w-full sm:w-auto"
                  />
                </div>
                <div className="w-full sm:w-[40%] flex justify-center flex-col">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                {data.name}
                  </h3>
                  <p className="text-white mb-2 text-sm sm:text-base">
                  {data.role}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400 my-4">
                  {data.bio}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-[#015AFF33] py-2 rounded-none hover:bg-[#015AFF33] text-white text-xs sm:text-sm">
                    {data.role}
                    </Badge>
                    {/* <Badge className="bg-[#015AFF33] rounded-none text-white hover:bg-[#015AFF33] text-xs sm:text-sm">
                      Product Design
                    </Badge> */}
                  </div>
                  <div className="flex gap-4 sm:gap-6 mt-6">
                  {socialLinks.map((url, index) => (
                <Link key={index} href={url} target="_blank" rel="noopener noreferrer">
                  {getSocialIcon(url)}
                </Link>
              ))}
                  </div>
                </div>
              </div></>
  )
}

export default MentorCard