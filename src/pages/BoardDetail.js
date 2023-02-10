import React from 'react';
import { useParams } from 'react-router-dom';

const BoardDetail = () => {
  const params = useParams();
  // console.log(params)
  return (
    <>
      <h1>{params.boardId}번 게시글 상세 페이지입니다.</h1>
    </>
  );
}
export default BoardDetail;