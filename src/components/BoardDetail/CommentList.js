import React from "react";
import { Link } from "react-router-dom";

const CommentList = (props) => {
  return (
    <>
      <div className="flex justify-start items-center mb-6 ">
        <div className="flex ">
          <Link to={"/"}>
            <img
              className="w-[50px] h-[50px] rounded-full"
              alt="해당 유저 이미지"
            />
          </Link>
          <div className="ml-4">
            <div>{props.userName}</div>
          </div>
        </div>
      </div>

      <div>{props.userComment}</div>
    </>
  );
};

export default CommentList;
