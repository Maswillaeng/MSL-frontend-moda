import React from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

const CommentList = (props) => {
  const commentedYear = dayjs(props.dateCommented).get("y");
  const commentedMonth = dayjs(props.dateCommented).get("M");
  const commentedDay = dayjs(props.dateCommented).get("D");

  return (
    <div className="mt-10 py-6 border-b">
      <div className="flex justify-start items-center mb-5 ">
        <div className="flex ">
          <Link to={"/"}>
            <img
              src="https://picsum.photos/720/400"
              className="w-14 h-14 object-cover rounded-full"
              alt="해당 유저 이미지"
            />
          </Link>
          <div className="ml-4 flex flex-col justify-center">
            <div className="font-bold">{props.userName}</div>
            <div className="text-gray-400 text-subcontent">
              {`${commentedYear}년 ${commentedMonth + 1}월 ${commentedDay}일`}
            </div>
          </div>
        </div>
      </div>

      <div className="my-11">{props.userComment}</div>
    </div>
  );
};

export default CommentList;

// dayjs 사용 댓글 작성 시점 시간 파싱해서 넣기
// 비로그인 시 로그인 창으로 링크 시키는 모달 구현
// 좋아요 기능
