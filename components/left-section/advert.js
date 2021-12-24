import React from "react";
import Link from "next/link";

function Advert() {
  return (
    <Link href="#">
      <div className="w-full shadow-sm hover:shadow-md rounded-md border border-blue-50 my-5 h-80 overflow-hidden">
        <div
          className="w-full p-5 relative h-80"
          style={{
            backgroundImage: "url('/ui/advert.jpg')",
            objectFit: "cover",
          }}
        >
          <img
            src="profiles/profile-2.jpg"
            alt=""
            className=" w-11 h-11 object-cover rounded-md border-2 border-white shadow-md"
          />

          <div className="absolute bottom-6 left-2 w-3/4">
            <h4 className="text-white font-semibold text-sm ml-2">
              How to build a strong company...
            </h4>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Advert;
