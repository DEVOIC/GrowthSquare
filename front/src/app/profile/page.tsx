
"use client";

import { useState, useEffect } from "react";
import { Phone, Calendar, Link, Code, FileText } from "lucide-react";
import Image from "next/image";

// Define the user profile interface
interface UserProfile {
  username: string;
  contactNumber: string;
  bio: string;
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
  dateOfBirth: string;
  profilePicture: string;
  skills: string[];
}

export default function ProfilePage() {
  // State to store user profile data
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  // Simulate fetching user profile data from backend
  useEffect(() => {
    // This would be replaced with an actual API call
    const fetchProfile = async () => {
      try {
        // Simulating API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data
        const mockProfile: UserProfile = {
          username: "Sumit Singh Raghuwanshi",
          contactNumber: "+91 8770487454",
          bio: "Senior Software Engineer with 5+ years of experience in full-stack development. Passionate about creating intuitive user experiences and scalable backend solutions.",
          socialLinks: {
            twitter: "https://twitter.com/Sumit",
            linkedin: "https://linkedin.com/in/sumit",
            github: "https://github.com/sumit",
            website: "https://sumit.dev"
          },
          dateOfBirth: "1895-05-19",
          profilePicture: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          skills: ["React", "TypeScript", "Node.js", "HTML", "AWS", "Docker", "MongoDB", "Next.js", "CSS", "JavaScript", ]
        };
        
        setProfile(mockProfile);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching profile:", error);
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-800 via-blue-600 to-blue-900">
        <div className="animate-pulse text-white text-xl">Loading profile...</div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-800 via-blue-600 to-blue-900">
        <div className="text-white text-xl">Profile not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-white ">         {/*  bg-gradient-to-br from-blue-800 via-blue-600 to-blue-900 */}
      <div className="max-w-4xl mx-auto">
        {/* card */}
        <div className="backdrop-blur-lg bg-blue-700 rounded-2xl shadow-xl overflow-hidden border border-white/20">
          {/* Profile picture centered at the top */}
          <div className="flex flex-col items-center pt-10 pb-6">
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white/20 shadow-lg mb-4">
              <Image 
                src={profile.profilePicture} 
                alt={profile.username}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <h1 className="text-3xl font-bold text-white">{profile.username}</h1>
          </div>

          {/* Contact info centered with stacked layout */}
          <div className="flex flex-col items-center px-8 py-6 bg-white/5 space-y-4">
            <div className="flex flex-col items-center gap-1 text-white/90">
              <span className="font-bold text-white text-lg">Contact No.:</span>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>{profile.contactNumber}</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-1 text-white/90">
              <span className="font-bold text-white text-lg">DoB:</span>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{formatDate(profile.dateOfBirth)}</span>
              </div>
            </div>
          </div>

          {/* Profile content */}
          <div className="p-8">
            {/* Bio */}
            <div className="mb-8 p-4 backdrop-blur-md bg-white/5 rounded-xl">
              <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <FileText size={20} />
                Bio
              </h2>
              <p className="text-white/90 leading-relaxed">{profile.bio}</p>
            </div>

            {/* Two column layout for remaining info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Social Links */}
              <div className="p-4 backdrop-blur-md bg-white/5 rounded-xl">
                <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <Link size={20} />
                  Social Links
                </h2>
                <ul className="space-y-3">
                  {Object.entries(profile.socialLinks).map(([platform, url]) => (
                    <li key={platform} className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                        {platform === "twitter" && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>}
                        {platform === "linkedin" && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>}
                        {platform === "github" && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>}
                        {platform === "website" && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>}
                      </div>
                      <a 
                        href={url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-200 hover:text-white transition-colors"
                      >
                        {platform.charAt(0).toUpperCase() + platform.slice(1)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div className="p-4 backdrop-blur-md bg-white/5 rounded-xl">
                <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <Code size={20} />
                  Skills
                </h2>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm border border-white/20"
                    >

                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

