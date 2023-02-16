import { useEffect, useState } from "react";
import UserDummyData from "../../data/UserDummyData";

const UserInfo = ({user_data}) => {
  const [userData, setUserData] = useState();
  useEffect(()=> {
    setUserData(UserDummyData)
  }, [])

  console.log(userData)
  return (
    <>
      <div>
        {/* <img 
          src={userImage}
          alt="userImg"
        />
        <h1>
          {nickname}
        </h1> */}
      </div>
    </>
  )
}
export default UserInfo;