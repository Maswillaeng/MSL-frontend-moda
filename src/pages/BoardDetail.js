import React from "react";
import { useParams } from "react-router-dom";
import PostHeader from "../components/BoardDetail/PostHeader";
import PostMain from "../components/BoardDetail/PostMain";
import PostComment from "../components/BoardDetail/PostComment";
import { getPostById } from "../data/BoardDummyData";

const BoardDetail = () => {
  const params = useParams();
  // getPostById 함수로 필터링한 게시글의 데이터를 구조 분해 할당한 후 각 컴포넌트에 props로 내려줌.
  const { post_id, category, title, content, name, createDate, readCount } =
    getPostById(Number(params.boardId)); // params의 Id가 string으로 인식되어 getPostById 함수가 오작동하는 이슈 발견, Number 메소드로 파싱해주어 해결.

  return (
    <>
      <div className="mx-[18%] mt-[5%] ">
        <PostHeader
          postId={post_id}
          name={name}
          createDate={createDate}
          readCount={readCount}
        />
        <PostMain title={title} content={content} category={category} />
        <PostComment>댓글</PostComment>
      </div>
      <h1>{params.boardId}번 게시글 상세 페이지입니다.</h1>
    </>
  );
};
export default BoardDetail;
