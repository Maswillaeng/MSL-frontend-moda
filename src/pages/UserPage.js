import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserInfo from '../components/UserPage/UserInfo';

const UserPage = () => {
  const params = useParams();
  
  return (
    <>
      <h1>{params.userId}번 마이 페이지입니다.</h1>
      <div className='continer'>
        <UserInfo />
      </div>
    </>
  );
}
export default UserPage;
