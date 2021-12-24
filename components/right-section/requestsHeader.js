import React from "react";

function RequestsHeader() {
  return (
    <div className="flex justify-between">
      <span className="uppercase text-xs text-gray-400">requests</span>
      <span className="bg-blue-500 text-white py-0 px-1 text-sm rounded-full">
        2
      </span>
    </div>
  );
}

export default RequestsHeader;
