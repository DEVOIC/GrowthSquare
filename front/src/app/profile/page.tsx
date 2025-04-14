"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Navbar from "@/components/parts/navbar";

const ProfilePage = () => {
  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState<any>(null);
  const [tempSkills, setTempSkills] = useState<string[]>([]);
  const [tempSocials, setTempSocials] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACK_API}/${process.env.NEXT_PUBLIC_ROUTE}/auth/check-auth`, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });

        const user = response.data.data.user;
        setProfileData(user);
        setTempSocials(user?.socialLinks || {});
        setTempSkills(user?.skills || []);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  const handleSkillChange = (index: number, value: string) => {
    const updated = [...tempSkills];
    updated[index] = value;
    setTempSkills(updated);
  };

  const handleSocialChange = (key: string, value: string) => {
    setTempSocials({ ...tempSocials, [key]: value });
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_BACK_API}/${process.env.NEXT_PUBLIC_ROUTE}/profile/edit`,  //change this 
        {
          skills: tempSkills,
          socialLinks: tempSocials,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // Send cookies (e.g. JWT token)
        }
      );
  
      const updatedUser = response.data.data;
      setProfileData(updatedUser);
      setEditMode(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
    }
  };
  
  if (!profileData) return <div className="text-center py-10 text-white">Loading...</div>;

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="bg-gradient-to-b from-blue-200 to-blue-100 rounded-3xl p-8 text-center">
          <Image
            src={profileData?.profilePicture}
            alt="Profile"
            width={100}
            height={100}
            className="rounded-full mx-auto"
          />
          <h1 className="text-2xl font-bold text-darkblue mt-4">
            {profileData?.name || "John Doe"}
          </h1>
          <p className="text-blue-700 italic">
            {profileData?.bio ||
              "Passionate Full Stack Developer specializing in the MERN stack with 5 years of experience in building scalable web applications."}
          </p>
        </div>

        <div className="mt-6 bg-white rounded-3xl p-6 shadow-sm flex flex-col md:flex-row md:justify-between">
          <div className="space-y-4 md:w-1/2">
            <h2 className="text-xl font-semibold">Contact Information</h2>
            <p>Date of Birth: {profileData?.dob || "Can't find dob"}</p>
            <p>Contact: {profileData?.contact || "Can't find number"}</p>
            <div className="flex gap-4 mt-4">
              <Button variant="secondary" className="flex items-center gap-2">
                <FaGithub /> GitHub
              </Button>
              <Button variant="secondary" className="flex items-center gap-2">
                <FaLinkedin /> LinkedIn
              </Button>
              <Button variant="secondary" className="flex items-center gap-2">
                <MdEmail /> Email
              </Button>
            </div>
          </div>

          <div className="space-y-4 md:w-1/2 mt-6 md:mt-0">
            <h2 className="text-xl font-semibold">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {tempSkills?.map((skill, idx) =>
                editMode ? (
                  <input
                    key={idx}
                    value={skill}
                    onChange={(e) => handleSkillChange(idx, e.target.value)}
                    className="px-2 py-1 rounded bg-blue-100 text-sm"
                  />
                ) : (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>

            <h2 className="text-xl font-semibold">Social Links</h2>
            <div className="flex flex-col gap-3">
              {Object.entries(tempSocials || {}).map(([platform, link], idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-gray-700">{platform}:</span>
                  {editMode ? (
                    <input
                      type="text"
                      value={link}
                      onChange={(e) => handleSocialChange(platform, e.target.value)}
                      className="px-2 py-1 border rounded text-sm"
                    />
                  ) : (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      {link}
                    </a>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6">
              {!editMode ? (
                <Button onClick={() => setEditMode(true)}>Edit Profile</Button>
              ) : (
                <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
                  Save Changes
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
