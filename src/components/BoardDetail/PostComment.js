import React, { useState, useRef } from "react";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
import CommentList from "./CommentList";
import useModal from "../../hooks/useModal";

const PostComment = (props) => {
  const [userName, setUserName] = useState(""); // userName은 직접 입력이 아닌 로그인 유저 정보를 서버로부터 받아와야 하므로 비워둠
  const [comment, setComment] = useState("");
  const [isValid, setIsValid] = useState(false);

  const { openModal } = useModal(); // 컨텍스트의 모달 상태를 제어해 모달을 오픈하도록 하는 함수
  const commentArea = useRef();

  const submitComment = (e) => {
    if (userName.length !== 0) {
      // 추후 서버로부터 받아온 정보로 로그인 여부를 알 수 있게되면 userName의 length 검사가 아닌 토큰 존재 여부 로직 구현 필요
      openModal({ type: "needLogin" });
      return;
    }

    const commentedDate = dayjs().format();

    const newComment = {
      // 댓글 작성 후 제출 시마다 댓글 정보를 담은 객체를 생성, commentList에 push
      commentedDate: commentedDate,
      commentedUser: userName,
      commentContent: comment,
    };

    const copyCommentList = [...props.commentList]; // 불변성 유지
    copyCommentList.push(newComment);
    props.onUpdateCommentList(copyCommentList);
    setComment("");
    setIsValid(false);
  };

  const onTextareaChangeHandler = (e) => {
    setComment(e.target.value);
    commentArea.current.style.height = "auto";
    commentArea.current.style.height = `${commentArea.current.scrollHeight}px`; // 텍스트가 변경 될 때마다 state setter와 ref 조작이 이루어지기 때문에 퍼포먼스 향상을 위해선 추후 디바운싱 작업 필요.
  };

  const onTextareaKeyUpHandler = (e) => {
    e.target.value.trim().length > 0 ? setIsValid(true) : setIsValid(false);
  };

  return (
    <div className="my-20">
      <h4 className="my-6 font-semiBold">
        {props.commentList.length}개의 댓글
      </h4>
      <div className="w-full">
        <textarea
          className="w-full h-24 px-4 pt-4 pb-6 border-gray-200 rounded-md resize-none overflow-hidden"
          placeholder="댓글을 작성하세요."
          onChange={onTextareaChangeHandler}
          onKeyUp={onTextareaKeyUpHandler}
          value={comment}
          ref={commentArea}
        ></textarea>
        <div className="flex justify-end">
          <button
            className="button mt-4"
            type="button"
            onClick={submitComment}
            disabled={isValid ? false : true}
          >
            댓글 작성
          </button>
        </div>
        {props.commentList.map((commentInfo) => {
          return (
            <CommentList
              key={uuidv4()}
              userName={commentInfo.commentedUser}
              userComment={commentInfo.commentContent}
              dateCommented={commentInfo.commentedDate}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PostComment;

// uuid 라이브러리 사용, key 값을 해결하였으나 논란이 존재하기 때문에 추후 토론 필요.
