import React from "react";
import { Link } from "react-router-dom";

const CommentList = (props) => {
  return (
    <div className="py-6 border-b">
      <div className="flex justify-start items-center mb-5 ">
        <div className="flex ">
          <Link to={"/"}>
            <img
              src="https://picsum.photos/720/400"
              className="w-[50px] h-[50px] rounded-full"
              alt="해당 유저 이미지"
            />
          </Link>
          <div className="ml-4">
            <div className="font-bold">{props.userName}</div>
          </div>
        </div>
      </div>

      <div className="mb-14">{props.userComment}</div>
    </div>
  );
};

export default CommentList;

// dayjs 사용 댓글 작성 시점 시간 파싱해서 넣기
// 비로그인 시 로그인 창으로 링크 시키는 모달 구현
// 좋아요 기능
