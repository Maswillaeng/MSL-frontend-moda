import React from "react";
import { Link } from "react-router-dom";

const PostMain = (props) => {
  return (
    <div className="mx-auto my-12">
      <header className="text-center ">
        <Link to={"/board"}>
          <div className="text-gray-500 font-medium ">{props.category}</div>
        </Link>
        <h1 className="text-[2.5rem] font-semiBold ">{props.title}</h1>
      </header>
      <div className="mt-20 ">
        <div className="text-content leading-[2] ">{props.content}</div>
      </div>
    </div>
  );
};

export default PostMain;
