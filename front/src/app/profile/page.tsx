"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/parts/navbar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getUser, getUserProfile, updateUserProfile } from "./action";
import { Edit, User } from "lucide-react";
import {
  Twitter,
  Linkedin,
  Github,
  Instagram,
  Facebook,
  Globe
} from "lucide-react";

import EditProfileModal from "@/components/parts/profilemodel";
import Loading from "./loading";

const ProfilePage = () => {
  const [profile, setProfile] = useState<any>(null);
  const [tempProfile, setTempProfile] = useState<any>({});
  const [showModal, setShowModal] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="));
    if (!token) router.replace("/home");
  }, [router]);

  const fetchProfile = async () => {
    try {
      const data = await getUser();
      const userProfile = await getUserProfile();
      setProfile(data.user);
      setTempProfile(userProfile.user || {});
    } catch (err) {
      console.error("Failed to load profile", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchProfile();
  }, []);

  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append("bio", tempProfile.bio || "");
      formData.append("contactNo", tempProfile.contactNo || "");
      formData.append("dob", tempProfile.dob || "");
      formData.append("location", tempProfile.location || "");

      formData.append("skills", JSON.stringify(tempProfile.skills || []));
      formData.append("socialLinks", JSON.stringify(tempProfile.socialLinks || []));

      if (tempProfile.image) {
        formData.append("file", tempProfile.image);
      }

      await updateUserProfile(formData);
      fetchProfile()
      setShowModal(false);
    } catch (err) {
      console.error("Update failed:", err);
      alert("Failed to update profile.");
    }
  };

  if (isLoading || !profile) return <Loading />;
  const { name } = profile;

  return (
    <div className="bg-darkblue h-[100vmax] md:h-screen">
      <Navbar />
      {
        isLoading ?
          <Loading /> :
          <div
            className="container h-full bg-darkblue mx-auto px-1 md:px-4"
            onMouseMove={handleMouseMove}
            ref={cardRef}
            style={{
              backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgb(255, 255, 255, 0.1) , transparent 10%)`,
            }}
          >
            <div className="ellipse2 top-right"></div>

            <div className="rounded-3xl p-8 text-center">

              {tempProfile.profilePicture ? (
                <div className="object-fit border-2 overflow-hidden rounded-lg w-28 h-28 mx-auto mb-4">
                  <Image
                    src={tempProfile.profilePicture}
                    alt="Profile Picture"
                    width={220}
                    height={220}
                    className="rounded-lg hover:scale-105 mx-auto"
                  />
                </div>
              ) : (
                <User className="w-28 h-28 text-white mx-auto" />
              )}
              <h1 className="text-2xl font-bold text-white mt-4">{name}</h1>
              <p className="text-white/80 italic">
                {tempProfile.bio || "No bio provided."}
              </p>
            </div>
            <Card className="bg-white/10 w-full backdrop-blur-lg  p-6 sm:p-8 mt-6 border border-white shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(155,135,245,0.12)]">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <h2 className="text-xl sm:text-2xl font-semibold text-white">Profile Details</h2>
                <Button
                  onClick={() => setShowModal(true)}
                  variant="outline"
                  className="bg-lightblue text-white border-white/10"
                >
                  <Edit className="mr-2 h-4 w-4" />
                  Edit Profile
                </Button>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="text-white/90">
                    <h3 className="text-sm text-white/60 mb-1 sm:mb-2">Contact Number</h3>
                    <p className="break-words">{tempProfile?.contactNo || "N/A"}</p>
                  </div>
                  <div className="text-white/90">
                    <h3 className="text-sm text-white/60 mb-1 sm:mb-2">Location</h3>
                    <p className="break-words">{tempProfile?.location || "N/A"}</p>
                  </div>
                  <div className="text-white/90">
                    <h3 className="text-sm text-white/60 mb-1 sm:mb-2">Date of Birth</h3>
                    <p>{tempProfile.dob ? new Date(tempProfile?.dob).toLocaleDateString() : "N/A"}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="text-white/90">
                    <h3 className="text-sm text-white/60 mb-1 sm:mb-2">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {tempProfile?.skills?.map((skill: any, index: any) => (
                        <span
                          key={index}
                          className="bg-white text-darkblue border border-white/20 px-3 py-1 text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm text-white/60 mb-1 sm:mb-2">Connect</h3>
                    <div className="flex flex-wrap gap-3">
                      {tempProfile?.socialLinks?.map((link: any) => {
                        const platformIcon = {
                          Twitter: <Twitter className="w-5 h-5" />,
                          LinkedIn: <Linkedin className="w-5 h-5" />,
                          GitHub: <Github className="w-5 h-5" />,
                          Instagram: <Instagram className="w-5 h-5" />,
                          Facebook: <Facebook className="w-5 h-5" />,
                          Other: <Globe className="w-5 h-5" />,
                        };
                        return (
                          <a
                            key={link._id}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center bg-lightblue p-2 text-white  underline hover:text-white transition break-all"
                          >
                            {platformIcon[link.platform] || <Globe className="w-12 h-12 mr-1" />}
                            {/* {link.platform} */}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
      }

      <EditProfileModal
        open={showModal}
        onClose={() => setShowModal(false)}
        tempProfile={tempProfile}
        setTempProfile={setTempProfile}
        onSave={handleSave}
      />
    </div>
  );
};

export default ProfilePage;