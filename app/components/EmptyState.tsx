"use client";

import Image from "next/image";

const EmptyState = () => {
  return (
    // <div className="px-4 py-10 sm:px-6 lg:px-8 h-full flex justify-center items-center bg-gray-100 ">
    //   <div className="text-center items-center flex flex-col">
    //     <Image
    //       alt="tukan"
    //       src="/images/tukan.jpg"
    //       width={80}
    //       height={80}
    //       className="rounded-full"
    //     />
    //     <h3 className="text-green-500 mt-2 text-2xl font-semibold">
    //       Choose a chat or join the Community
    //     </h3>
    //   </div>
    // </div>
    <div className="px-4 py-10 sm:px-6 lg:px-8 h-full flex justify-center items-center bg-gray-100">
      <div className="relative w-full max-w-lg">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="m-8 relative space-y-4">
          <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
            <div className="flex-1">
              <div className="h-4 w-48 bg-gray-300 rounded"></div>
            </div>
            <div>
              <div className="w-24 h-6 rounded-lg bg-purple-300"></div>
            </div>
          </div>
          <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
            <div className="flex-1">
              <div className="h-4 w-56 bg-gray-300 rounded"></div>
            </div>
            <div>
              <div className="w-20 h-6 rounded-lg bg-yellow-300"></div>
            </div>
          </div>
          <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
            <div className="flex-1">
              <div className="h-4 w-44 bg-gray-300 rounded"></div>
            </div>
            <div>
              <div className="w-28 h-6 rounded-lg bg-pink-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyState;
