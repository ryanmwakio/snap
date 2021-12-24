import React from "react";

function Navbar(props) {
  const searchIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );

  return (
    <div className="w-full flex justify-center mt-4">
      <div className="grid grid-cols-3 w-full md:mx-12 my-2 py-3 rounded-md ">
        <div className="flex justify-center">
          <img
            src="ui/logo.png"
            alt=""
            className="opacity-0 md:opacity-100 w-0 h-0 md:w-10 md:h-10 object-cover inline-block"
          />
          <h2 className="capitalize tracking-widest text-xl font-semibold inline-block">
            snap
          </h2>
        </div>
        <div>
          <form action="">
            <input
              type="text"
              name=""
              id=""
              className="px-4 py-2 border border-gray-100 focus:outline-none focus:border-blue-100 focus:shadow-sm  rounded-l-md w-2/3 md:w-3/4 text-sm rounded-br-md"
              placeholder="Search   users / topics / trends"
            />
            <button
              type="submit"
              className=" bg-blue-500 hover:bg-blue-600 py-2  px-2 rounded-r-md"
            >
              {searchIcon}
            </button>
          </form>
        </div>
        <div className="flex w-full">
          <div>
            <button className="bg-blue-500 text-white hover:bg-blue-600 hover:shadow-md px-3 py-2 text-sm capitalize rounded-md hidden md:inline">
              <span className="inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white mr-1 pt-1"
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
              </span>
              Create
            </button>

            <img
              src="profiles/profile-1.jpg"
              alt=""
              className="h-10 w-10 inline-block object-cover mx-2 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
