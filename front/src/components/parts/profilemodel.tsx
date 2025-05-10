"use client";
import React, { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const platforms = ["Twitter", "LinkedIn", "GitHub", "Instagram", "Facebook", "Other"];

const EditProfileModal = ({
  open,
  onClose,
  tempProfile,
  setTempProfile,
  onSave,
}: {
  open: boolean;
  onClose: () => void;
  tempProfile: any;
  setTempProfile: (profile: any) => void;
  onSave: () => void;
}) => {
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    if (typeof tempProfile.image === "string") {
      setPreviewImage(tempProfile.image);
    }
  }, [tempProfile.image]);

  const handleChange = (field: string, value: any) => {
    setTempProfile({ ...tempProfile, [field]: value });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file)); // For preview
      handleChange("image", file); // Store actual File object
    }
  };


  const handleSocialLinkChange = (index: number, key: string, value: string) => {
    const newLinks = [...(tempProfile.socialLinks || [])];
    newLinks[index] = { ...newLinks[index], [key]: value };
    handleChange("socialLinks", newLinks);
  };

  const addSocialLink = () => {
    handleChange("socialLinks", [...(tempProfile.socialLinks || []), { platform: "", url: "" }]);
  };

  const removeSocialLink = (index: number) => {
    const newLinks = [...(tempProfile.socialLinks || [])];
    newLinks.splice(index, 1);
    handleChange("socialLinks", newLinks);
  };

  return (
    <Dialog open={open} onOpenChange={onClose} >
      <DialogContent className="backdrop-blur-md mt-4 md:mt-12 w-[90%] bg-white/10 text-white border border-white/30 rounded-2xl   shadow-lg max-h-[80vh] px-2 ">
        <h2 className="text-xl font-semibold text-center mb-0">Edit Profile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto px-2 md:py-6 md:px-6 ">
          <div>
            <Label className="text-white/70">Contact No</Label>
            <Input
              type="number"
              className="bg-white/10 border-white/20 text-white"
              value={tempProfile.contactNo || ""}
              onChange={(e) => handleChange("contactNo", e.target.value)}
            />
          </div>

          <div>
            <Label className="text-white/70">Date of Birth</Label>
            <Input
              type="date"
              className="bg-white/10 border-white/20 text-white"
              value={tempProfile.dob || ""}
              onChange={(e) => handleChange("dob", e.target.value)}
            />
          </div>

          <div>
            <Label className="text-white/70">Location</Label>
            <Input
              type="text"
              className="bg-white/10 border-white/20 text-white"
              value={tempProfile.location || ""}
              onChange={(e) => handleChange("location", e.target.value)}
            />
          </div>

          <div>
            <Label className="text-white/70">Profile Picture</Label>
            <Input
              type="file"
              accept="image/*"
              className="bg-white/10 border-white/20 text-white"
              onChange={handleFileUpload}
            />
            {previewImage && (
              <img
                src={previewImage}
                alt="Profile Preview"
                className="mt-2 rounded-lg max-h-32 object-cover"
              />
            )}
          </div>

          <div className="md:col-span-2">
            <Label className="text-white/70">Bio</Label>
            <Textarea
              rows={3}
              className="bg-white/10 border-white/20 text-white"
              value={tempProfile.bio || ""}
              onChange={(e) => handleChange("bio", e.target.value)}
            />
          </div>

          <div className="md:col-span-2">
            <Label className="text-white/70">Skills (comma-separated)</Label>
            <Input
              type="text"
              className="bg-white/10 border-white/20 text-white"
              value={tempProfile.skills?.join(", ") || ""}
              onChange={(e) =>
                handleChange("skills", e.target.value.split(",").map((s) => s.trim()))
              }
            />
          </div>

          <div className="md:col-span-2 space-y-4">
            <Label className="text-white/70">Social Links</Label>
            {(tempProfile.socialLinks || []).map((link: any, index: number) => (
              <div key={index} className="flex gap-2 items-center">
                <Select
                  value={link.platform}
                  onValueChange={(value) => handleSocialLinkChange(index, "platform", value)}
                >
                  <SelectTrigger className="bg-white/10 text-white border-white/20 w-16 md:w-40">
                    <SelectValue placeholder="Platform" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1e293b] text-white">
                    {platforms.map((platform) => (
                      <SelectItem key={platform} value={platform}>
                        {platform}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  type="text"
                  placeholder="https://"
                  className="bg-white/10 border-white/20 text-white flex-1"
                  value={link.url}
                  onChange={(e) => handleSocialLinkChange(index, "url", e.target.value)}
                />
                <Button
                  variant="ghost"
                  className="text-red-400"
                  onClick={() => removeSocialLink(index)}
                >
                  ✕
                </Button>
              </div>
            ))}
            <Button
              className="bg-white/10 hover:bg-white/20 text-white block"
              onClick={addSocialLink}
            >
              + Add Social Link
            </Button>
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <Button
            variant="secondary"
            className="bg-white/10 hover:bg-white/20 text-white"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            className=" text-white"
            onClick={onSave}
          >
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfileModal;