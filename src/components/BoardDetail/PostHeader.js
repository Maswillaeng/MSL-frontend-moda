import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";

const PostHeader = (props) => {
  return (
    <div className="flex justify-between">
      <Link to={"/"}>
        <img
          className="w-[50px] h-[50px] rounded-full"
          alt="유저 프로필 이미지"
        />
      </Link>

      <div className="min-w-[70%]">
        <div className="font-bold">{props.user}</div>
        <div>{props.createDate}</div>
      </div>
      <div className="min-w-[20%] flex justify-between items-center">
        <div>
          <FontAwesomeIcon icon={faCommentDots} />
          &nbsp;댓글 1
        </div>
        <div>URL 복사</div>
        <FontAwesomeIcon
          className="text-gray-400"
          icon={faEllipsisVertical}
          size="2x"
        />
      </div>
    </div>
  );
};

export default PostHeader;
