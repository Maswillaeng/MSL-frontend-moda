import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('id') === null) {
      console.log("로그인 안됨")
    } else {
      setIsLoggedIn(true)
      console.log("로그인 성공")
    }
  }, [])

  // localStorage에 있는 id로 사용자 정보 불러오기

  // 로그아웃 구현
  const onClickLogout = () => {
    localStorage.clear()
    window.location.replace('http://localhost:3000')
  }

  return (
    <div className='relative bg-white'>
      <div className='h-30 flex justify-evenly items-center border-b-2 p-6 sticky-top-0'>
        <div className='flex justify-start font-bold text-2xl'>
          <Link to={"/"}>
            Mashillaeng
          </Link>
        </div>
        {isLoggedIn ? (
          <div className="space-x-5">
            <Link to={"/search"}>
              검색
            </Link>
            <Link to={"/userpage/1"} >
              마이페이지
            </Link>
            <Link to={"/chat"}>
              메세지
            </Link>
            <Link onClick={onClickLogout}>
              로그아웃
            </Link>
          </div>
        ) : (
          <div className="space-x-5">
            <Link to={"/board"}>
              게시판
            </Link>
            <Link to={"/search"}>
              검색
            </Link>
            <Link to={"/signup"}>
              회원가입
            </Link>
            <Link to={"/login"}>
              로그인
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
export default Header;