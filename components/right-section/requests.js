import React from "react";

function Requests() {
  return (
    <div className=" my-4">
      <div className="bg-white rounded-md p-2 shadow-md border border-blue-50">
        <div className="grid grid-cols-4">
          <img
            src="profiles/profile-9.jpg"
            alt=""
            className="w-10 h-10 object-cover rounded-full inline-block"
          />
          <p className="inline-block text-sm col-span-3">
            <span className="text-blue-900 font-semibold cursor-pointer text-sm">
              Aaron Mwangi
            </span>{" "}
            wants to add you to friends
          </p>
        </div>
        <div className=" flex justify-between mt-3 mb-1 mx-2">
          <button className="text-xs bg-blue-500 hover:bg-blue-600 text-white capitalize px-3 py-2 rounded-md cursor-pointer">
            Accept
          </button>
          <button className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-400 capitalize px-3 py-2 rounded-md cursor-pointer">
            Decline
          </button>
        </div>
      </div>

      <div className="bg-white rounded-md p-2 shadow-md border border-blue-50 mt-4">
        <div className="grid grid-cols-4">
          <img
            src="profiles/profile-10.jpg"
            alt=""
            className="w-10 h-10 object-cover rounded-full inline-block"
          />
          <p className="inline-block text-sm col-span-3">
            <span className="text-blue-900 font-semibold cursor-pointer text-sm">
              Rose G
            </span>{" "}
            wants to add you to friends
          </p>
        </div>
        <div className=" flex justify-between mt-3 mb-1 mx-2">
          <button className="text-xs bg-blue-500 hover:bg-blue-600 text-white capitalize px-3 py-2 rounded-md cursor-pointer">
            Accept
          </button>
          <button className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-400 capitalize px-3 py-2 rounded-md cursor-pointer">
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}

export default Requests;
