"use client";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import foundingMemebers from "@/data/foundingmemebers";

const Founding = () => {
  return (
    <section className="bg-white py-12 px-4 ">
      <div className="ellipse top-right"></div>
      <div className="">
        <h2 className="text-3xl font-bold text-lightblue mb-2">
          The Visionary Architects of Our Mission
        </h2>
        <p className="text-lg mb-12">
          Meet the trailblazers who set the foundation and continue to guide our
          community towards growth and innovation
        </p>
        <div className=" before-marquee">
          <div className="flex space-x-4 animate-marquee">
            {foundingMemebers.map((member, index) => (
              <div
                key={index}
                className="group transform transition-transform duration-300 hover:scale-110"
              >
                <div className="md:w-[240px] md:h-[320px] w-[140px] h-[180px]">
                  <Image
                    src={member.image}
                    alt="Team member"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </div>
                <div className="absolute bottom-8 left-0 px-8 opacity-0 group-hover:opacity-100 bg-black/50 text-white p-2">
                  <h3 className="font-bold">{member.name}</h3>
                  <p className="text-sm">{member.role}</p>
                  <div className="flex gap-3 mt-2">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin
                          className="text-white hover:text-blue-400"
                          size={20}
                        />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub
                          className="text-white hover:text-gray-400"
                          size={20}
                        />
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaTwitter
                          className="text-white hover:text-blue-400"
                          size={20}
                        />
                      </a>
                    )}
                    {member.instagram && (
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram
                          className="text-white hover:text-pink-400"
                          size={20}
                        />
                      </a>
                    )}
                  </div>
                </div>
                <div className="w-10 h-10 absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 bg-darkblue border-2">
                  <MoveUpRight className="mt-2" color="white" size={30} />
                </div>
              </div>
            ))}
          </div>
          <div className="flex space-x-4 animate-marquee">
            {foundingMemebers.map((member, index) => (
              <div
                key={index}
                className="group transform transition-transform duration-300 hover:scale-110"
              >
                <div className="md:w-[240px] md:h-[320px] w-[140px] h-[180px]">
                  <Image
                    src={member.image}
                    alt="Team member"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </div>
                <div className="absolute bottom-8 left-0 px-8 opacity-0 group-hover:opacity-100 bg-black/50 text-white p-2">
                  <h3 className="font-bold">{member.name}</h3>
                  <p className="text-sm">{member.role}</p>
                  <div className="flex gap-3 mt-2">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin
                          className="text-white hover:text-blue-400"
                          size={20}
                        />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub
                          className="text-white hover:text-gray-400"
                          size={20}
                        />
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaTwitter
                          className="text-white hover:text-blue-400"
                          size={20}
                        />
                      </a>
                    )}
                    {member.instagram && (
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram
                          className="text-white hover:text-pink-400"
                          size={20}
                        />
                      </a>
                    )}
                  </div>
                </div>
                <div className="w-10 h-10 absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 bg-darkblue border-2">
                  <MoveUpRight className="mt-2" color="white" size={30} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founding;
