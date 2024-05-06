"use client";

import { User } from "@prisma/client";
import UserBox from "./UserBox";
import Image from "next/image";

interface UserListProps {
  items: User[];
}
const UserList: React.FC<UserListProps> = ({ items }) => {
  return (
    <aside className="fixed inset-y-0 pb-20 lg:pb-0 lg:left-20 lg:w-80 lg:block overflow-y-auto border-r border-gray-200 block w-full left-0">
      <div className="px-5">
        <div className="flex-col">
          <div className="text-2xl font-bold text-neutral-700 py-4">
            Contacts
          </div>
        </div>
        {items.map((item) => (
          <UserBox key={item.id} data={item} />
        ))}
        <div className="hidden lg:block fixed bottom-3 left-[295px]">
          <Image
            src="/Gifs/tenor.gif"
            alt="gif"
            width={90}
            height={90}
            unoptimized
            className="rounded-full"
          />
        </div>
      </div>
    </aside>
  );
};

export default UserList;
