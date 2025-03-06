import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface Profile {
  user: { name: string };
  profilePicture: string;
  bio: string;
  dob: string;
  contactNo: string;
  skills: string[];
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
  };
}

const ProfilePageAdvanced: React.FC = () => {
  const profile: Profile = {
    user: { name: "John Doe" },
    profilePicture: "https://th.bing.com/th/id/OIP.IWtvQ9Kr4yjIxxC-YdmDWAHaE6?w=264&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    bio: "Passionate Full Stack Developer specializing in the MERN stack with 5 years of experience in building scalable web applications.",
    dob: "1990-05-15",
    contactNo: "9876543210",
    skills: ["JavaScript", "React", "Node.js", "MongoDB", "TailwindCSS", "TypeScript"],
    socialLinks: {
      github: "https://github.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      email: "mailto:johndoe@example.com",
    },
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-8">
      <div>
        <Card className="shadow-2xl rounded-3xl overflow-hidden bg-white border border-gray-200">
          <CardContent className="p-10 bg-gradient-to-b from-blue-200 to-indigo-300 text-blue-700 text-center">
            <img className="w-32 h-32 mx-auto rounded-full shadow-lg border-4 border-white transform hover:scale-105 transition duration-500" src={profile.profilePicture} alt="Profile Picture" />
            <h2 className="text-4xl font-extrabold mt-6">{profile.user.name}</h2>
            <p className="mt-3 text-lg italic">{profile.bio}</p>
          </CardContent>
          <CardContent className="p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <p className="text-gray-700">Date of Birth: {new Date(profile.dob).toLocaleDateString()}</p>
                <p className="text-gray-700">Contact: {profile.contactNo}</p>
                <div className="flex gap-4 mt-6">
                  <Button variant="outline" asChild className="hover:bg-blue-600 text-gray-700 hover:text-white transition duration-300">
                    <a href={profile.socialLinks.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub size={20} className="mr-2" />GitHub
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="hover:bg-blue-600 text-gray-700 hover:text-white transition duration-300">
                    <a href={profile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin size={20} className="mr-2" />LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="hover:bg-blue-600 text-gray-700 hover:text-white transition duration-300">
                    <a href={profile.socialLinks.email}>
                      <FaEnvelope size={20} className="mr-2" />Email
                    </a>
                  </Button>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Skills</h3>
                <div className="flex flex-wrap gap-4">
                  {profile.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-lg shadow-md text-sm font-medium hover:bg-indigo-200 transition duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePageAdvanced;
