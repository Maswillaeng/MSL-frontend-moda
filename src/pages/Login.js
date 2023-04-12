import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  // 오류 메세지
  const [ emailMessage, setEmailMessage ] = useState('')
  const [ passwordMessage, setPasswordMessage ] = useState('')

  // 유효성 검사
  const [ isEmail, setIsEmail ] = useState(false)
  const [ isPassword, setIsPassword ] = useState(false)
  
  const navigate = useNavigate();

  const toSignupPage = () => {
    navigate(`/signup`)
  }
  
  // 로그인
  // const onClickLogin = useCallback((e) => {
  //   // axios.post('', {})
  //   console.log(e)
  // })
  const onClickLogin = (e) => {
    console.log(email, password)
    localStorage.clear()
    localStorage.setItem('id', email)
    // localStorage.setItem('pw', password)
    window.location.replace('http://localhost:3000')
  }

  // 이메일 유효성 검사
  const checkEmail = useCallback((e) => {
    const regExp = /^([a-zA-Z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/
    const emailCurrent = e.target.value
    setEmail(emailCurrent)
    // console.log('이메일 유효성 검사', regExp.test(e.target.value))

    if (!regExp.test(emailCurrent)) {
      setEmailMessage('올바른 이메일 형식이 아닙니다! 다시 입력해주세요')
      setIsEmail(false)
    } else {
      setEmailMessage('')
      setIsEmail(true)
    }
  }, [])
  
  // 비밀번호 유효성 검사
  const checkPassword = useCallback((e) => {
    const regExpPw = /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{6,20}$/
    const passwordCurrent = e.target.value
    setPassword(passwordCurrent)
    // console.log('비밀번호 유효성 검사', regExpPw.test(e.target.value))

    if(!regExpPw.test(passwordCurrent)) {
      setPasswordMessage('비밀번호를 다시 한 번 확인해주세요!')
      setIsPassword(false)
    } else {
      setPasswordMessage('')
      setIsPassword(true)
    }
  }, [])

  return(
    <div className='h-screen'>
      <div className='flex flex-col h-full items-center justify-center'>
        <h1 className='text-lg mb-7'>
          로그인
        </h1>
        <div className='flex flex-col items-center justify-center mt-7'>
          <div className='flex flex-col'>
            <input
              className='rounded-md border-2 border-gray-200 w-[300px] my-2 h-9 p-2 focus:border-black' 
              placeholder='example@gmail.com'
              onChange={checkEmail}
            />
            <div className='text-xs text-main'>
              {email.length > 0 && <span className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</span>}
            </div>
          </div>
          <div>
            <input
              type='password' 
              className='rounded-md border-2 border-gray-200 w-[300px] my-2 h-9 p-2 focus:border-black ' 
              placeholder='비밀번호'
              onChange={checkPassword}
            />
            <div className='text-xs text-main'>
            {password.length > 0 && <span className={`message ${isPassword ? 'success' : 'error'}`}>{passwordMessage}</span>}
            </div>
          </div>
            <p className='text-xs'>* 대/소문자, 숫자, 특수문자 각각 최소 하나씩 포함</p>
          <button 
            className='bg-main text-white w-[100px] rounded-md mt-5 p-1.5'
            disabled={!isEmail && !isPassword}
            // onSubmit={onClickLogin}
            onClick={onClickLogin}
          >
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