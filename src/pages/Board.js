import React from "react";
import { useNavigate } from "react-router-dom";
import Category from "../components/Board/category";
import CardList from "../components/Board/CardList";


export default function Board() {
  const navigate = useNavigate();
  
  const toCreatePage = () => {
    navigate(`/create`)
  }

  return (
    <div className="container">
      <h1 className="text-center mt-20 mb-10 font-bold text-4xl">게시판</h1>
      <div className="flex justify-end mr-[200px]">
        <button type="button" onClick={toCreatePage} className='bg-main h-10 w-[100px] text-white rounded-md cursor-pointer'>글 작성</button>
      </div>
      <div className="container px-5 py-10 mx-auto">
        {/* 카테고리 */}
        <Category />
        {/* 게시판 */}
        <CardList />
      </div>
    </div>
  );
}
