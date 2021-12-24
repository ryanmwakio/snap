import React from "react";

function Status() {
  return (
    <div className="w-full flex justify-between">
      <div className="w-full grid grid-cols-4 lg:grid-cols-6 gap-2">
        <div>
          <div className="w-full h-full flex justify-center align-middle">
            <div
              className="overflow-hidden rounded-md w-full h-48"
              style={{
                backgroundImage: "url('status/status-1.jpg')",
                objectFit: "cover",
              }}
            >
              <div
                className="w-full h-full relative"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7))",
                }}
              >
                <div className="absolute bottom-16 left-1/3 bg-white shadow-lg p-1 rounded-md cursor-pointer hover:shadow-sm border border-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-500 animate-pulse"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <div className="absolute bottom-8 left-1/4 text-xs text-white font-semibold">
                  Add Story
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="w-full h-full flex justify-center align-middle">
            <div
              className="overflow-hidden rounded-md w-full h-48"
              style={{
                backgroundImage: "url('status/status-2.jpg')",
                objectFit: "cover",
              }}
            >
              <div
                className="w-full h-full relative"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.1))",
                }}
              >
                <div className="absolute top-2 left-2 border-2 border-dotted border-blue-500 shadow-lg  rounded-full cursor-pointer hover:shadow-sm">
                  <img
                    src="profiles/profile-3.jpg"
                    alt=""
                    className="w-10 h-10 object-cover rounded-full"
                  />
                </div>
                <div className="absolute bottom-8 left-1/4 text-xs text-white font-semibold">
                  Sam Brown
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="w-full h-full flex justify-center align-middle">
            <div
              className="overflow-hidden rounded-md w-full h-48 cursor-pointer"
              style={{
                backgroundImage: "url('status/status-3.jpg')",
                objectFit: "cover",
              }}
            >
              <div
                className="w-full h-full relative"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.1))",
                }}
              >
                <div className="absolute top-2 left-2  shadow-lg  rounded-full cursor-pointer hover:shadow-sm">
                  <img
                    src="profiles/profile-4.jpg"
                    alt=""
                    className="w-10 h-10 object-cover rounded-full"
                  />
                </div>
                <div className="absolute bottom-8 left-1/4 text-xs text-white font-semibold">
                  Janet Keri
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="w-full h-full flex justify-center align-middle">
            <div
              className="overflow-hidden rounded-md w-full h-48 cursor-pointer"
              style={{
                backgroundImage: "url('status/status-4.jpg')",
                objectFit: "cover",
              }}
            >
              <div
                className="w-full h-full relative"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.1))",
                }}
              >
                <div className="absolute top-2 left-2  shadow-lg  rounded-full cursor-pointer hover:shadow-sm">
                  <img
                    src="profiles/profile-5.jpg"
                    alt=""
                    className="w-10 h-10 object-cover rounded-full"
                  />
                </div>
                <div className="absolute bottom-8 left-1/4 text-xs text-white font-semibold">
                  Faridah H
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="w-full h-full flex justify-center align-middle">
            <div
              className="overflow-hidden rounded-md w-full h-48 cursor-pointer"
              style={{
                backgroundImage: "url('status/status-5.jpg')",
                objectFit: "cover",
              }}
            >
              <div
                className="w-full h-full relative"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.1))",
                }}
              >
                <div className="absolute top-2 left-2  shadow-lg  rounded-full cursor-pointer hover:shadow-sm">
                  <img
                    src="profiles/profile-7.jpg"
                    alt=""
                    className="w-10 h-10 object-cover rounded-full"
                  />
                </div>
                <div className="absolute bottom-8 left-1/4 text-xs text-white font-semibold">
                  Simon M
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full h-full flex justify-center align-middle">
            <div
              className="overflow-hidden rounded-md w-full h-48 cursor-pointer"
              style={{
                backgroundImage: "url('status/status-6.jpg')",
                objectFit: "cover",
              }}
            >
              <div
                className="w-full h-full relative"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.1))",
                }}
              >
                <div className="absolute top-2 left-2  shadow-lg  rounded-full cursor-pointer hover:shadow-sm">
                  <img
                    src="profiles/profile-8.jpg"
                    alt=""
                    className="w-10 h-10 object-cover rounded-full"
                  />
                </div>
                <div className="absolute bottom-8 left-1/4 text-xs text-white font-semibold">
                  Johansen Td
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Status;
