const boardList = [
  {
    "post_id": 1,
    "category": "레시피",
    "title": "1번",
    "content": "1번 게시글입니다.",
    "name" : "안보현", 
    "createDate": "2023-01-24",
    "readCount": 3,
  },
  {
    "post_id": 2,
    "category": "칵테일 추천",
    "title": "2번",
    "content": "2번 게시글입니다.",
    "name" : "이준호", 
    "createDate": "2023-01-24",
    "readCount": 11,
  },
  {
    "post_id": 3,
    "category": "자유 게시판",
    "title": "3번",
    "content": "3번 게시글입니다.",
    "name" : "박보검", 
    "createDate": "2023-01-25",
    "readCount": 5,
  },
  {
    "post_id": 4,
    "category": "레시피",
    "title": "4번",
    "content": "4번 게시글입니다.",
    "name" : "차은우", 
    "createDate": "2023-01-25",
    "readCount": 4,
  },
  {
    "post_id": 5,
    "category": "레시피",
    "title": "5번",
    "content": "5번 게시글입니다.",
    "name" : "서강준", 
    "createDate": "2023-01-26",
    "readCount": 5,
  },
  {
    "post_id": 6,
    "category": "자유 게시판",
    "title": "6번",
    "content": "6번 게시글입니다.",
    "name" : "윤아", 
    "createDate": "2023-01-26",
    "readCount": 1,
  },
  {
    "post_id": 7,
    "category": "레시피",
    "title": "7번",
    "content": "7번 게시글입니다.",
    "name" : "아이유", 
    "createDate": "2023-01-27",
    "readCount": 2,
  },
  {
    "post_id": 8,
    "category": "칵테일 추천",
    "title": "8번",
    "content": "8번 게시글입니다.",
    "name" : "수지", 
    "createDate": "2023-01-27",
    "readCount": 3,
  },
  {
    "post_id": 9,
    "category": "레시피",
    "title": "9번",
    "content": "9번 게시글입니다.",
    "name" : "제니", 
    "createDate": "2023-01-28",
    "readCount": 6,
  },
  {
    "post_id": 10,
    "category": "레시피",
    "title": "10번",
    "content": "10번 게시글입니다.",
    "name" : "로제", 
    "createDate": "2023-01-28",
    "readCount": 10,
  },
];
const getPostById = id => {
  const array = boardList.filter(x => x.post_id === id);
  if (array.length === 1) {
    return array[0];
  }
  return null;
}
export {
  getPostById,
  boardList,
};