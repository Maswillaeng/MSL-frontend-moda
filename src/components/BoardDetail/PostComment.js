import React, { useState, useRef } from "react";
import CommentList from "./CommentList";

const PostComment = (props) => {
  const [userName, setUserName] = useState("김현준");
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);
  const [isValid, setIsValid] = useState(false);

  const commentArea = useRef();

  const submitComment = (e) => {
    const copyCommentList = [...commentList]; // 불변성 유지
    copyCommentList.push(comment);
    setCommentList(copyCommentList);
    setComment("");
    setIsValid(false);
  };

  const onTextareaChangeHandler = (e) => {
    setComment(e.target.value);
    commentArea.current.style.height = "auto";
    commentArea.current.style.height = `${commentArea.current.scrollHeight}px`;
  };

  const onTextareaKeyUpHandler = (e) => {
    e.target.value.trim().length > 0 ? setIsValid(true) : setIsValid(false);
  };

  return (
    <div className="mt-12">
      <h4 className="my-6 font-semiBold">{commentList.length}개의 댓글</h4>
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
            className="rounded-md px-5 py-2 mt-4 bg-main text-white hover:cursor-pointer"
            type="button"
            onClick={submitComment}
            disabled={isValid ? false : true}
          >
            댓글 작성
          </button>
        </div>
        {commentList.map((userComment) => {
          return <CommentList userName={userName} userComment={userComment} />;
        })}
      </div>
    </div>
  );
};

export default PostComment;
