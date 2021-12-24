import React from "react";
import Profile from "./profile";
import MenuItems from "./menuItems";
import Invitations from "./invitations";
import Advert from "./advert";
import AcceptInvite from "./acceptInvite";

function LeftSection() {
  return (
    <div className="border-r border-blue-50 p-6 max-h-screen overflow-y-scroll">
      <Profile />
      <MenuItems />
      <Invitations />
      <Advert />
      <AcceptInvite />
    </div>
  );
}

export default LeftSection;
