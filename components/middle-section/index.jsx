import React from "react";
import Status from "./status";
import NewPost from "./newPost";
import Posts from "./Posts";

function MiddleSection() {
  return (
    <div className="border-r border-gray-50 p-6 max-h-screen overflow-y-scroll">
      <Status />
      <NewPost />
      <Posts />
    </div>
  );
}

export default MiddleSection;
