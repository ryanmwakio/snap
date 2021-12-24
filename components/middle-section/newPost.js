import React from "react";

function NewPost() {
  return (
    <div className="w-full flex justify-center my-5">
      <div className="bg-white p-3 rounded-md shadow-md w-full border border-blue-50 overflow-hidden">
        <div className="w-full flex justify-between">
          <div className="w-1/4 flex justify-start">
            <img
              src="profiles/profile-1.jpg"
              alt=""
              className="w-14 h-14 object-cover rounded-full"
            />
          </div>
          <form action="" className="flex justify-start align-middle w-full">
            <input
              type="text"
              name=""
              id=""
              className=" focus:outline-none text-sm"
              placeholder="What's new Sandra Rose..."
            />
          </form>
          <div className="w-full flex h-full justify-end">
            <div>
              <button className="bg-blue-500 text-white capitalize py-2 px-3 rounded-md text-sm mt-2 hover:bg-blue-600 hover:shadow-md">
                <span className=" inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                </span>{" "}
                post it!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPost;
