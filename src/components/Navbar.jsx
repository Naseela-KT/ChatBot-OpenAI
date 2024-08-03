import React from "react";
import { Navbar, Typography, Avatar } from "@material-tailwind/react";

const NavbarDefault = () => {
  return (
    <Navbar className="mx-auto max-w-screen px-4 py-3 lg:px-8 lg:py-3 rounded-none bg-[#2B2D42] border-none shadow-none">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography color="white" className="py-1.5 font-medium">
          AI Chat Bot
        </Typography>

        <Avatar
          color="white"
          size="xs"
          src="/user-default.svg"
          alt="avatar"
          withBorder={true}
          className=" text-white bg-white"
        />
      </div>
    </Navbar>
  );
};

export default NavbarDefault;
