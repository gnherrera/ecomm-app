// import ProfileHeader from "./components/profile-header";
// import ProfileContent from "./components/profile-content";

import ProfileHeader from "@/src/components/profile-page/components/profile-header";

import ProfileContent from "@/src/components/profile-page/components/profile-content"; 

export default function ProfilePage() {
  return (
    <div className="container mx-auto space-y-6 px-4 py-10">
      <ProfileHeader />
      <ProfileContent />
    </div>
  );
}
