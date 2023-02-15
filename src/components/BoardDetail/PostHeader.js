import React from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";

const PostHeader = (props) => {
  const formattedPostCreateDate = dayjs(props.postCreateDate);
  formattedPostCreateDate.format();

  const postCreateYear = formattedPostCreateDate.get("y");
  const postCreateMonth = formattedPostCreateDate.get("M");
  const postCreateDay = formattedPostCreateDate.get("D");

  return (
    <div className="w-auto flex justify-between">
      <Link to={"/"}>
        <img
          className="w-14 h-14 object-cover rounded-full"
          alt="유저 프로필 이미지"
          src="https://picsum.photos/720/400"
        />
      </Link>

      <div className="min-w-[60%] ml-4 flex flex-col justify-center">
        <div className="font-bold">{props.nickname}</div>
        <div className="text-gray-400 text-subcontent">
          {`${postCreateYear}년 ${postCreateMonth + 1}월 ${postCreateDay}일`}
        </div>
      </div>
      <div className="min-w-[30%] flex justify-evenly items-center">
        <div className="flex justify-between items-center font-semiBold">
          <FontAwesomeIcon icon={faCommentDots} className="mr-3 " />
          댓글 {props.commentList.length}
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
