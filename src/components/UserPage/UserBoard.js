import { useState } from "react";
import TabList from "./TabList";

const UserBoard = () => {
  const [ tab, setTab ] = useState([
    { name: '모두보기' },
    { name: '내가 작성한 게시글' },
    { name: '좋아요한 게시글'}
  ])
  return (
    <>
      <TabList tab={tab} />
    </>
  )
}
export default UserBoard;