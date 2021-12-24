import React from "react";

function AcceptInvite() {
  return (
    <div className="w-full grid grid-cols-3">
      <div className=" col-span-2 w-auto bg-blue-500 hover:bg-blue-600 text-white px-2 py-2 flex justify-center align-middle text-sm rounded-lg capitalize hover:cursor-pointer shadow-md hover:shadow-sm">
        accept invitation
      </div>
      <div className="flex justify-center align-middle w-full h-full text-xl cursor-pointer hover:text-blue-300">
        &times;
      </div>
    </div>
  );
}

export default AcceptInvite;
