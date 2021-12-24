import React from "react";

function ContactsHeader() {
  return (
    <div className="flex justify-between mt-3">
      <span className="uppercase text-xs text-gray-400">contacts</span>
      <span className="bg-blue-500 text-white py-0 px-1 text-sm rounded-full">
        5
      </span>
    </div>
  );
}

export default ContactsHeader;
