"use client";

import useRoutes from "@/hooks/useRoutes";
import { useState } from "react";
import DesktopItem from "./DesktopItem";
import Image from "next/image";
import { useRouter } from "next/navigation";

const DesktopSidebar = () => {
  const router = useRouter();
  const routes = useRoutes();
  const [isOpen, setIsOpen] = useState(false);
  const navigateToHomePage = () => {
    router.push("/"); // Navigate to the home page
  };
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:w-20 xl:px-6 lg:overflow-y-auto lg:bg-white lg:border-r-[1px] lg:pb-4 lg:flex lg:flex-col">
      <nav className="mt-4 flex flex-col justify-between">
        <Image
          src="/images/tukan-3.jpg"
          alt="logo"
          width={50}
          height={50}
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
    </div>
  );
};

export default DesktopSidebar;
