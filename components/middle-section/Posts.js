import React from "react";

function Posts() {
  return (
    <div className="w-full">
      <div className="w-full shadow-md p-3 rounded-md border border-blue-50 overflow-hidden">
        <div className="relative h-96">
          <img
            src="profiles/profile-6.jpg"
            alt=""
            className=" absolute top-2 left-2 h-14 w-14 object-cover rounded-full"
          />
          <span className="absolute top-4 left-20 text-blue-900 font-semibold text-sm capitalize cursor-pointer">
            June Fisher
          </span>
          <span className="absolute top-9 left-20 text-gray-300 text-sm">
            3 hours ago
          </span>
          <span className="absolute top-3 right-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </span>
          <p className="absolute top-20 left-3 w-5/5 text-sm text-gray-600">
            This was one of the most epic journeys, that I've got myself
            invloved in a long time. Maybe one to remember for the entire life!
          </p>
          <div className="absolute left-3 top-32 grid grid-cols-3 gap-2 overflow-hidden">
            <img
              src="posts/post-1.jpg"
              alt=""
              className="object-cover rounded-md cursor-pointer h-60"
            />
            <div className=" col-span-2">
              <img
                src="posts/post-2.jpg"
                alt=""
                className="rounded-md w-72 cursor-pointer h-40 object-cover"
              />
              <img
                src="posts/post-5.jpg"
                alt=""
                className="rounded-md w-72 mt-2 cursor-pointer h-26 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full shadow-md p-3 rounded-md border border-blue-50 overflow-hidden my-5">
        <div className="relative h-96">
          <img
            src="profiles/profile-4.jpg"
            alt=""
            className=" absolute top-2 left-2 h-14 w-14 object-cover rounded-full"
          />
          <span className="absolute top-4 left-20 text-blue-900 font-semibold text-sm capitalize cursor-pointer">
            Janet Keri
          </span>
          <span className="absolute top-9 left-20 text-gray-300 text-sm">
            4 hours ago
          </span>
          <span className="absolute top-3 right-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </span>
          <p className="absolute top-20 left-3 w-5/5 text-sm text-gray-600">
            The new clothes store isofficially open for public. Had a tour and
            was amazed by the amount of quality outfits available.
          </p>
          <div className="absolute left-3 top-32 grid grid-cols-3 gap-2 overflow-hidden">
            <img
              src="posts/post-3.jpg"
              alt=""
              className="object-cover rounded-md cursor-pointer h-60"
            />
            <div className=" col-span-2">
              <img
                src="posts/post-4.jpg"
                alt=""
                className="rounded-md cursor-pointer h-40 w-72"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
