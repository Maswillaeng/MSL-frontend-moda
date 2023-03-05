import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import UserBoard from '../components/UserPage/UserBoard';
import UserInfo from '../components/UserPage/UserInfo';
import useModal from "../hooks/useModal";

const UserPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { openModal } = useModal();
  const updateUserInfo = () => {
    openModal({ type: "userUpdate"})
    return;
  }
  const toChat = () => {
    navigate(`/chat`);
  }
 
  return (
    <>
      {/* <h1>{params.userId}번 마이 페이지입니다.</h1> */}
      <div className='continer max-w-6xl'>
        <div className='flex justify-end space-x-6 mt-8 mb-4'>
          <button 
            className='bg-main text-white rounded-md p-2 hover:bg-buttonHover'
            onClick={toChat}
          >
            메세지 보내기
          </button>
          <button className='text-main font-bold' onClick={updateUserInfo}>
            프로필 수정
          </button>
        </div>
        <div className='flex flex-row justify-center'>
          <UserInfo />
          {/* <userBoard /> */}
          <div className='flex flex-row space-x-8 m-8'>
            {/* <p className="font-bold text-main underline underline-offset-8" >모두 보기</p>
            <p>내가 작성한 게시글</p>
            <p>좋아요한 게시글</p>   */}
            <UserBoard />
          </div>
        </div>
      </div>
    </>
  );
}
export default UserPage;
