"use client";
import useConversation from "@/hooks/useConversation";
import useRoutes from "@/hooks/useRoutes";
import MobileItem from "./MobileItem";

const MobileFooter = () => {
  const routes = useRoutes();
  const { isOpen } = useConversation();
  if (isOpen) {
    return null;
  }
  return (
    <div className="fixed justify-between w-full bottom-0 z-40 flex items-center border-t-[1px] lg:hidden bg-gradient-to-r from-teal-200 to-teal-500">
      {routes.map((route) => (
        <MobileItem
          key={route.href}
          href={route.href}
          active={route.active}
          icon={route.icon}
          onClick={route.onClick}
        />
      ))}
    </div>
  );
};

export default MobileFooter;
