import React from "react";
import { useNavigate } from "react-router-dom";
import Category from "../components/Board/category";
import CardList from "../components/Board/CardList";

export default function Board() {
  // const [modalOpen, setModalOpen] = useState(false); // 모달 자체 컴포넌트는 하나만 생성하되, 사용처에 따라 내용을 다르게 보여줄 생각 따라서 추후 확장을 대비해 메인 페이지가 될 Board.js 에서 모달 오픈 상태를 관리하려 했으나...
  // CardItem.js 에서 BoardDetail로 이동하는 방식이 컴포넌트 간 연결이 아닌 route 처리라 BoardDetail에서 props 끌어올리기로 통제 불가능, 모달 상태를 전역에서 관리하기 위해 컨텍스트를 사용하겠음
  // const showModalHandler = () => {
  //   setModalOpen(true);
  // };

  // const hideModalHandler = () => {
  //   setModalOpen(false);
  // };

  const navigate = useNavigate();

  const toCreatePage = () => {
    navigate(`/create`);
  };

  return (
    <div className="container">
      <h1 className="text-center mt-20 mb-10 font-bold text-4xl">게시판</h1>
      <div className="flex justify-end mr-[200px]">
        <button
          type="button"
          onClick={toCreatePage}
          className="bg-main h-10 w-[100px] text-white rounded-md"
        >
          글 작성
        </button>
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
