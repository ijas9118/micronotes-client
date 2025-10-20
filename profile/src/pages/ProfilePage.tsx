import { useState } from "react";
import { useUserStore } from "../store/user-store";
import "../index.css";

const ProfilePage = () => {
  const { user, updateUser } = useUserStore();
  const [formData, setFormData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    bio: user?.bio || "",
  });

  if (!user) return <p className="p-6">Loading profile...</p>;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    updateUser(formData);
    alert("Profile updated successfully!");
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-amber-600 mb-4">Profile</h2>

      <div className="flex items-center mb-8">
        <img
          src={user.avatarUrl}
          alt="Avatar"
          className="w-24 h-24 rounded-full mr-6 border-2 border-amber-400"
        />
        <div>
          <h2 className="text-2xl font-semibold">
            {user.firstName} {user.lastName}
          </h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-1">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-amber-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-amber-500 outline-none"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Bio</label>
          <textarea
            name="bio"
            rows={4}
            value={formData.bio}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-amber-500 outline-none resize-none"
          />
        </div>
      </div>

      <div className="mt-6">
        <button
          onClick={handleSave}
          className="bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition-all"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
