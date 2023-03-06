import React from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const toSignupPage = () => {
    navigate(`/signup`)
  }
  const checkEmail = (e) => {
    const regExp = /^([a-zA-Z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/
    console.log('이메일 유효성 검사', regExp.test(e.target.value))
  }
  
  const checkPassword = (e) => {
    const regExpPw = /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{6,20}$/
    console.log('비밀번호 유효성 검사', regExpPw.test(e.target.value))
  }

  return(
    <div className='h-screen'>
      <div className='flex flex-col items-center '>
        <h1 className='text-lg'>
          로그인
        </h1>
        <div className='flex flex-col items-center justify-center'>
            <input
              className='rounded-md border-2 border-gray-200 w-[300px] my-2 h-9 p-2' 
              placeholder='OOOO@gmail.com'
              onBlur={checkEmail}
            />
            <input 
              className='rounded-md border-2 border-gray-200 w-[300px] my-2 h-9 p-2' 
              placeholder='비밀번호'
              onBlur={checkPassword}
            />
            <p className='text-xs'>* 대/소문자, 숫자, 특수문자 각각 최소 하나씩 포함</p>
          <button className='bg-main text-white w-[100px] rounded-md mt-5 p-1.5'>
            로그인
          </button>
          <div className='flex flex-row space-x-3 mt-4 text-sm'>
            <p className='cursor-pointer' onClick={toSignupPage}>회원가입</p>
            <p>|</p>
            <p className='cursor-pointer'>비밀번호 찾기</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login;