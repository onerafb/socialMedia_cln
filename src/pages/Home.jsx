import React from "react";
import {
  CustomButton,
  EditProfile,
  FriendsCard,
  Loading,
  PostCard,
  ProfileCard,
  TextInput,
  TopBar,
} from "../components/Export";
const Home = () => {
  const user = {
    a: "sf",
  };
  return (
    <div className="w-full px-0 lg:px-10 pb-20 2xl:px-40 bg-bgColor h-screen overflow-hidden ">
      <TopBar />
      <div className="w-full flex gap-2 lg:gap-4 pt-5 pb-10 h-full">
        <div className="hidden w-1/3 lg:w-1/4 h-full md:flex flex-col gap-6 overflow-y-auto">
          <ProfileCard user={user} />
          <FriendsCard friends={user?.friends} />
        </div>
      </div>
    </div>
  );
};

export default Home;
