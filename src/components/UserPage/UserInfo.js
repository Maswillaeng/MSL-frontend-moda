import { useEffect, useState } from "react";
import UserDummyData from "../../data/UserDummyData";
import { useParams } from 'react-router-dom';

const UserInfo = () => {
  const [ isMine, setIsMine ] = useState(false);
  const [follow, setFollow] = useState(0)
  const [ disabled, setDisabled ]= useState(false);
  const params = useParams();
  // localStorage에 있는 id로 사용자 정보 불러오기

  useEffect(() => {
    if (params.userId == user1.userId) {
      setIsMine(true)
    } else {
      console.log('나의 페이지가 아닙니다.')
    }
  }, [])

  const user1 = {
    "userId" : 1,
    "nickname": "asdf1234",
    "email" : "asdf1234@naver.com",
    "phoneNumber": "010-111-1111",
    "userImage" : "public/images/apeach.png",
    "introduction": "안녕하세요. 잘 부탁드립니다."
  }

  // 팔로우 하기 버튼 핸들러
  const onClickFollowBtn = () => {
    if (disabled == false) {
      setFollow(follow + 1)
      setDisabled(true)
    } else {
      setFollow(follow - 1)
      setDisabled(false)
    }
  }

  // 팔로우 목록 불러오기

  return (
    <div className="p-4 max-w-md h-[500px]">
    {isMine ? (
      <div className=" flex flex-col items-center h-full p-6 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
      <img
        className="w-[140px] h-[140px] rounded-full" 
        alt="userImage"
        src="https://picsum.photos/id/29/720/400/"
      />
      <p className="font-bold text-[28px] m-2">{user1.nickname}</p>
      <div className="flex flex-row space-x-3">
        <p>팔로워 0</p>
        <p>팔로우 {follow}</p>
      </div>
      {/* 본인 페이지면 팔로우 버튼 없애기 */}
      <p className="text-[20px] m-2">{user1.introduction}</p>
    </div>
    ) : (
        <div className=" flex flex-col items-center h-full p-6 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="w-[140px] h-[140px] rounded-full" 
            alt="userImage"
            src="https://picsum.photos/id/29/720/400/"
          />
          <p className="font-bold text-[28px] m-2">{user1.nickname}</p>
          <div className="flex flex-row space-x-3">
            <p>팔로워 0</p>
            <p>팔로우 {follow}</p>
          </div>
          {/* 본인 페이지면 팔로우 버튼 없애기 */}
          <button 
            className={(disabled ? "bg-gray-200 text-black rounded-md p-1 w-[140px] mt-2" : "bg-main text-white rounded-md p-1 w-[140px] mt-2")}
            onClick={onClickFollowBtn}
            
          >
            팔로우 하기
          </button>
          <p className="text-[20px] m-2">{user1.introduction}</p>
        </div>

)}
</div>
  )
}
export default UserInfo;