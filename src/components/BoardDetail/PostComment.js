import React, { useState } from "react";
import CommentList from "./CommentList";

const PostComment = (props) => {
  const [userName, setUserName] = useState("김현준");
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);
  const [isValid, setIsValid] = useState(false);

  const submitComment = (e) => {
    const copyCommentList = [...commentList]; // 불변성 유지
    copyCommentList.push(comment);
    setCommentList(copyCommentList);
    setComment("");
  };

  const onTextareaChangeHandler = (e) => {
    setComment(e.target.value);
    console.log(comment);
  };

  const onTextareaKeyUpHandler = (e) => {
    e.target.value.length > 0 ? setIsValid(true) : setIsValid(false);
  };

  return (
    <div className="mt-12">
      <div>전체 댓글 수</div>
      <div className="w-full">
        <textarea
          className="w-full border-gray-300 rounded-md "
          placeholder="댓글을 작성하세요."
          onChange={onTextareaChangeHandler}
          onKeyUp={onTextareaKeyUpHandler}
        >
          {comment}
        </textarea>
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
        {commentList.map((comList) => {
          return <CommentList userName={userName} userComment={comList} />;
        })}
        <div>댓글 목록</div>
      </div>

      {props.children}
    </div>
  );
};

export default PostComment;
