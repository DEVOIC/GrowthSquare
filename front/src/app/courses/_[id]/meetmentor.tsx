import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import photo from './mentor.jpg';
import Image from "next/image";
import Link from "next/link";

export const Mentors = () => {
    return (
        <>
            <div className=" lg:py-44 py-24 px-8 sm:px-16 md:px-28 pb-28 relative">
                <div className="ellipse2 top-right "></div>
                <div className="ellipse2 mid-left"></div>
                <div className="ellipse2 bottom-right "></div>

                <div className="flex lg:flex-row flex-col items-center justify-evenly">
                    <div className="lg:w-[38%] w-full text-center">
                        <span className="text-lightblue text-5xl font-bold font-transforma ">Meet your Mentor</span>
                        <p className="text-xl my-6 text-white">mast quote to inspire ppl lorem ipsum dolor sit amet adipiscing elit</p>
                        <span className="text-white text-lg">~ lorem ipsum</span>
                    </div>

                    <div

                        className="flex flex-col sm:flex-row w-full lg:w-[48%] gap-6 mt-20 lg:mt-0 sm:gap-10 z-10 relative mb-8"
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
                </div>
            </div>
        </>
    );
};
