import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PostHeader from "../components/BoardDetail/PostHeader";
import PostMain from "../components/BoardDetail/PostMain";
import PostComment from "../components/BoardDetail/PostComment";
import { getPostById } from "../data/BoardDummyData";

const BoardDetail = () => {
  const [commentList, setCommentList] = useState([]); // 댓글 수를 postheader 에서 표시해야 하므로 전체 댓글 리스트는 props 끌어올리기를 사용, Board 페이지에서도 게시글 별 댓글 수를 표시하니 추후 Context 사용이 필요해보임

  const params = useParams();
  // getPostById 함수로 필터링한 게시글의 데이터를 구조 분해 할당한 후 각 컴포넌트에 props로 내려줌.
  const { post_id, category, title, content, user, createDate, readCount } =
    getPostById(Number(params.boardId)); // params의 Id가 string으로 인식되어 getPostById 함수가 오작동하는 이슈 발견, Number 메소드로 파싱해주어 해결.

  return (
    <>
      <div className="max-w-3xl mx-auto mt-[5%] ">
        <PostHeader
          postId={post_id}
          user={user}
          postCreateDate={createDate}
          readCount={readCount}
          commentList={commentList}
        />
        <PostMain title={title} content={content} category={category} />
        <PostComment
          commentList={commentList}
          onUpdateCommentList={setCommentList}
        />
      </div>
      <h1>{params.boardId}번 게시글 상세 페이지입니다.</h1>
    </>
  );
};
export default BoardDetail;
