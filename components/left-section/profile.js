import React from "react";

function Profile() {
  return (
    <div className="w-full flex justify-center">
      <div className="shadow-sm hover:shadow-md p-4 w-full rounded-md grid grid-cols-2 bg-white border border-blue-50 overflow-hidden">
        <div className="flex justify-center">
          <img
            src="profiles/profile-1.jpg"
            alt="profile image"
            className="object-cover w-14 h-14 rounded-full"
          />
        </div>
        <div className="-ml-13">
          <p className=" font-semibold text-blue-900 text-sm capitalize">
            Sandra Rose
          </p>
          <p className="text-purple-200 text-sm">@srose</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
