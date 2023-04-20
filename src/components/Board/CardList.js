import { useEffect, useState, useRef, useCallback } from "react";
import { boardList } from "../../data/BoardDummyData";
import CardItem from "./CardItem";
import axios from "axios";

const CardList = () => {
 // 데이터 10개씩 잘라주기
//  let [ page, setPage ] = useState(1);
//  const limit = 10;
//  const offset = (page - 1) * limit
//  const total = boardList.length;

//  const boardData = (boardList) => {
//   if (boardList) {
//     let result = boardList.slice(offset, offset + limit)
//     return result;
//   }
//  }

 // 무한 스크롤 구현
 const obsRef = useRef(null); // observer Element
 const [ load, setLoad ] = useState(false); // 로딩 스피너
 const [ list, setList ] = useState([]);
 const [ page, setPage ] = useState(1);
 const preventRef = useRef(true) // 옵저버 중복 실행 방지
 const endRef = useRef(false); // 모든 글 로드 확인

 // 옵저버 생성
 useEffect(() => {
  const observer = new IntersectionObserver(obsHandler, { threshold: 0.5});
  if (obsRef.current) observer.observe(obsRef.current);
  return () => { observer.disconnect()};
 }, []);

//  useEffect(() => {
//   boardData()
//  }, [page])

// useEffect(() => {
//   getCat()
// }, [page])

 // 옵저버 콜백함수
 const obsHandler = ((entries) => {
  const target = entries[0]
  // 옵저버 중복 실행 방지
  if (!endRef.current && target.isIntersecting && preventRef.current) {
    preventRef.current = false;
    setPage(prev => prev + 1)
  }
})

// 글불러오기
// const boardData = useCallback(async(boardList) => {
//   setLoad(true);
//   try {
//     const res = await axios({method: 'GET', url: '/'})
//     if (res.data.end) {
//       endRef.current = true;

//     }  
    
//   } catch (e) {
//     console.error(e)
//   } finally {
//     setLoad(false); // 
//   }
// })
// const getCat = useCallback(async() => {
//   setLoad(true); // 로딩시작
//   const res = await axios({method : 'GET', url : `https://api.thecatapi.com/v1/images/search`});
//   if (res.data) {
//     setList(prev => [...prev, {...res.data[0]}]); // 리스트 추가
//     preventRef.current = true;
//   } else {
//     console.log(res);
//   }
//   setLoad(false); // 로딩 종료
// }, [page])
  
  return (
    <div className="flex flex-wrap">
      {boardList.map(post => (
        <CardItem key={post.postId} card_data={post}/>
      ))}
      {/* {list.map(li => (
        <img key={li.id} className="opacity-100 mx-auto mb-6" src={li.url} alt={li.dke} width={'500px'} height={'300px'} />
      ))} */}
      <div ref={obsRef} />
    </div>
  )
}
export default CardList;