"use client";

import useRoutes from "@/hooks/useRoutes";
import { useState } from "react";
import DesktopItem from "./DesktopItem";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { User } from "@prisma/client";
import Avatar from "../Avatar";

interface DesktopSidebarProps {
  currentUser: User;
}
const DesktopSidebar: React.FC<DesktopSidebarProps> = ({ currentUser }) => {
  const router = useRouter();
  const routes = useRoutes();
  const [isOpen, setIsOpen] = useState(false);
  console.log(currentUser);
  const navigateToHomePage = () => {
    router.push("/"); // Navigate to the home page
  };
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:w-20 lg:overflow-y-auto lg:bg-white lg:border-r-[1px] lg:pb-4 lg:flex lg:flex-col lg:justify-between">
      <nav className="mt-4 flex flex-col justify-between">
        <Image
          src="/images/tukan.jpg"
          alt="logo"
          width={55}
          height={55}
          className="rounded-full cursor-pointer m-auto"
          onClick={navigateToHomePage}
        />

        <ul role="list" className="flex flex-col items-center space-y-1 mt-3">
          {routes.map((item) => (
            <DesktopItem
              key={item.label}
              href={item.href}
              label={item.label}
              active={item.active}
              onClick={item.onClick}
              icon={item.icon}
            />
          ))}
        </ul>
      </nav>
      <nav className="mt-4 flex flex-col justify-end items-center">
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer hover:opacity-75 transition"
        >
          <Avatar user={currentUser} />
        </div>
      </nav>
    </div>
  );
};

export default DesktopSidebar;
