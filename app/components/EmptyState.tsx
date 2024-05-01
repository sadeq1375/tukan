"use client";

import Image from "next/image";

const EmptyState = () => {
  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8 h-full flex justify-center items-center bg-gray-100">
      <div className="text-center items-center flex flex-col">
        <Image
          alt="tukan"
          src="/images/tukan.jpg"
          width={80}
          height={80}
          className="rounded-full"
        />
        <h3 className="text-green-500 mt-2 text-2xl font-semibold">
          Choose a chat or join the Community
        </h3>
      </div>
    </div>
  );
};

export default EmptyState;
