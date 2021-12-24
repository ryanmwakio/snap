import React from "react";
import Link from "next/link";

function MenuItems() {
  return (
    <div className="w-full flex justify-center my-8">
      <div className="rounded-md p-4 shadow-sm hover:shadow-md w-full border border-blue-50 overflow-hidden">
        <ul>
          <li className="my-2 border-b border-gray-50 pb-3">
            <Link href="/">
              <div className="w-full grid grid-cols-2 cursor-pointer">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-200 ml-6 opacity-0 lg:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <div className="flex align-middle">
                  <p className="font-semibold text-blue-900 text-sm capitalize  mt-1 md:-ml-5">
                    Home
                  </p>
                </div>
              </div>
            </Link>
          </li>
          <li className="my-4 border-b border-gray-50 py-3">
            <Link href="/">
              <div className="w-full grid grid-cols-2 cursor-pointer">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-200 ml-6 opacity-0 lg:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div className="w-full flex align-middle">
                  <p className="font-semibold text-blue-900 text-sm capitalize  mt-1 md:-ml-5">
                    People
                    <span className="bg-blue-500 text-white text-sm rounded-full ml-3 px-2 py-1">
                      8
                    </span>
                  </p>
                </div>
              </div>
            </Link>
          </li>
          <li className="my-4 border-b border-gray-50 py-3">
            <Link href="/">
              <div className="w-full grid grid-cols-2 cursor-pointer">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-200 ml-6 opacity-0 lg:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="flex align-middle">
                  <p className="font-semibold text-blue-900 text-sm capitalize  mt-1 md:-ml-5">
                    Photos
                  </p>
                </div>
              </div>
            </Link>
          </li>
          <li className=" my-4 border-l-2 border-blue-500 h-1/3 bg-gray-100">
            <div className="border-b border-gray-50 py-3">
              <Link href="/">
                <div className="w-full grid grid-cols-2 cursor-pointer">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-500 ml-6 opacity-0 lg:opacity-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                      />
                    </svg>
                  </div>
                  <div className="flex align-middle">
                    <p className="font-semibold text-blue-500 text-sm capitalize md:-ml-5  mt-1">
                      News feed
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </li>
          <li className="my-4 border-b border-gray-50 py-3">
            <Link href="/">
              <div className="w-full grid grid-cols-2 cursor-pointer">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-200 ml-6 opacity-0 lg:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div className="flex align-middle">
                  <p className="font-semibold text-blue-900 text-sm capitalize  mt-1 md:-ml-5">
                    Profile
                  </p>
                </div>
              </div>
            </Link>
          </li>
          <li className="my-4 border-b border-gray-50 py-3">
            <Link href="/">
              <div className="w-full grid grid-cols-2 cursor-pointer">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-200 ml-6 opacity-0 lg:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="flex align-middle">
                  <p className="font-semibold text-blue-900 text-sm capitalize  mt-1 md:-ml-5">
                    settings
                  </p>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MenuItems;
