"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function EditProfile() {
  // State to store user's name and password
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  // Handler functions for input changes
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // Handler function for saving profile changes
  const handleSaveChanges = () => {
    console.log("Saving changes:", { name, password });
  };

  // Handler function for deleting the account
  const handleDeleteAccount = () => {
    const confirmed = confirm("Are you sure you want to delete your account? This action cannot be undone.");
    if (confirmed) {
      console.log("Account deleted");
    }
  };

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6 text-center">
          <h1 className="text-3xl font-bold">Edit Profile</h1>

          <div className="grid gap-4 text-left">
            {/* Name Field */}
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={handleNameChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />

            {/* Password Field */}
            <label htmlFor="password" className="block text-sm font-medium">
              New Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />

            {/* Save Changes Button */}
            <Button className="w-full mt-4" onClick={handleSaveChanges}>
              Save Changes
            </Button>

            {/* Delete Account Button */}
            <Button variant="outline" className="w-full mt-2" onClick={handleDeleteAccount}>
              Delete Account
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        {/* Optional background section to match the style of the landing page */}
      </div>
    </div>
  );
}
