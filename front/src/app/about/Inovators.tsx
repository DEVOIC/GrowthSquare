"use client";
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import members from '@/data/members';

//temporary things

const Inovators = () => {
  const part1 = members.filter((member, index) => index % 2 === 0);
  const part2 = members.filter((member, index) => index % 2 !== 0);
  return (
    <section className="bg-white py-20 px-4 relative">
      <div className="ellipse top-left"></div>
      <div className="ellipse bottom-right"></div>

      <div className="">
        <h2 className="text-3xl max-w-4xl font-bold text-lightblue mb-2">The Euphoric Intellectuals behind Growth Square</h2>
        <p className="text-lg mb-12">
          The dedicated team working hard to build on the foundation laid by the mentors—
          ready to take on new challenges and grow together.
        </p>
        <div className='before-marquee'>
          <div className="flex  my-6 animate-marquee">
            {part1.map((member, index) => (
              <div key={index} className=" relative group transform transition-transform duration-300 hover:scale-110">
                <div className="md:w-[240px] md:h-[320px] w-[140px] h-[180px]">
                  <Image
                    src={member.image}
                    alt="Team member"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </div>
                <div className="absolute bottom-0 w-full left-0 px-8 opacity-0 group-hover:opacity-100 bg-black/50 text-white p-2">
                  <h3 className="font-bold text-[1vmax]">{member.name}</h3>
                  <p className="text-[1vmax]">{member.role}</p>
                  <div className="flex gap-3 mt-2">
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-white hover:text-blue-400" size={16} />
                      </a>
                    )}
                    {member.github && (
                      <a href={member.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-white hover:text-gray-400" size={16} />
                      </a>
                    )}
                    {member.twitter && (
                      <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-white hover:text-blue-400" size={16} />
                      </a>
                    )}
                    {member.instagram && (
                      <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-white hover:text-pink-400" size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex  my-6  animate-marquee">
            {part1.map((member, index) => (
              <div key={index} className=" relative group transform transition-transform duration-300 hover:scale-110">
                <div className="md:w-[240px] md:h-[320px] w-[140px] h-[180px]">
                  <Image
                    src={member.image}
                    alt="Team member"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </div>
                <div className="absolute bottom-0 w-full left-0 px-8 opacity-0 group-hover:opacity-100 bg-black/50 text-white p-2">
                  <h3 className="font-bold text-[1vmax]">{member.name}</h3>
                  <p className="text-[1vmax]">{member.role}</p>
                  <div className="flex gap-3 mt-2">
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-white hover:text-blue-400" size={16} />
                      </a>
                    )}
                    {member.github && (
                      <a href={member.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-white hover:text-gray-400" size={16} />
                      </a>
                    )}
                    {member.twitter && (
                      <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-white hover:text-blue-400" size={16} />
                      </a>
                    )}
                    {member.instagram && (
                      <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-white hover:text-pink-400" size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='before-marquee-reverse'>
          <div className="flex my-6  animate-marquee-reverse">
            {part2.map((member, index) => (
              <div key={index} className=" relative group transform transition-transform duration-300 hover:scale-110">
                <div className=" md:w-[240px] md:h-[320px] w-[140px] h-[180px]">
                  <Image
                    src={member.image}
                    alt="Team member"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </div>
                <div className="absolute bottom-0 w-full left-0 px-8 opacity-0 group-hover:opacity-100 bg-black/50 text-white p-2">
                  <h3 className="font-bold text-[1vmax]">{member.name}</h3>
                  <p className="text-[1vmax]">{member.role}</p>
                  <div className="flex gap-3 mt-2">
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-white hover:text-blue-400" size={16} />
                      </a>
                    )}
                    {member.github && (
                      <a href={member.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-white hover:text-gray-400" size={16} />
                      </a>
                    )}
                    {member.twitter && (
                      <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-white hover:text-blue-400" size={16} />
                      </a>
                    )}
                    {member.instagram && (
                      <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-white hover:text-pink-400" size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex my-6  animate-marquee-reverse">
            {part2.map((member, index) => (
              <div key={index} className=" relative group transform transition-transform duration-300 hover:scale-110">
                <div className=" md:w-[240px] md:h-[320px] w-[140px] h-[180px]">
                  <Image
                    src={member.image}
                    alt="Team member"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </div>
                <div className="absolute bottom-0 w-full left-0 px-8 opacity-0 group-hover:opacity-100 bg-black/50 text-white p-2">
                  <h3 className="font-bold text-[1vmax]">{member.name}</h3>
                  <p className="text-[1vmax]">{member.role}</p>
                  <div className="flex gap-3 mt-2">
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-white hover:text-blue-400" size={16} />
                      </a>
                    )}
                    {member.github && (
                      <a href={member.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-white hover:text-gray-400" size={16} />
                      </a>
                    )}
                    {member.twitter && (
                      <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-white hover:text-blue-400" size={16} />
                      </a>
                    )}
                    {member.instagram && (
                      <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-white hover:text-pink-400" size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Inovators