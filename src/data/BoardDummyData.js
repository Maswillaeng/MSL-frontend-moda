const boardList = [
  {
    post_id: 1,
    img: "https://picsum.photos/720/400",
    category: "레시피",
    title: "1번",
    content:
      "1번 게시글입니다. 제가 가장 좋아하는 칵테일은 롱 아일랜드 티입니다. 너무 맛있어요. 여러분도 도전해보세요! 워낙 유명하지만 혹시 안드신 분들이 있다면..ㅎㅎ",
    user: "안보현",
    user_img: "public/images/apeach.png",
    createDate: "2023-01-24",
    readCount: 3,
    commentCount: 2,
    thumbCount: 1,
  },
  {
    post_id: 2,
    img: "https://picsum.photos/id/16/720/400/",
    category: "칵테일 추천",
    title: "2번",
    content: "2번 게시글입니다.",
    user: "이준호",
    createDate: "2023-01-24",
    readCount: 11,
    commentCount: 4,
    thumbCount: 3,
  },
  {
    post_id: 3,
    img: "https://picsum.photos/id/25/720/400/",
    category: "자유 게시판",
    title: "3번",
    content: "3번 게시글입니다.",
    user: "박보검",
    createDate: "2023-01-25",
    readCount: 5,
    commentCount: 1,
    thumbCount: 7,
  },
  {
    post_id: 4,
    img: "https://picsum.photos/id/65/720/400/",
    category: "레시피",
    title: "4번",
    content: "4번 게시글입니다.",
    user: "차은우",
    createDate: "2023-01-25",
    readCount: 4,
    commentCount: 2,
    thumbCount: 8,
  },
  {
    post_id: 5,
    img: "https://picsum.photos/id/36/720/400/",
    category: "레시피",
    title: "5번",
    content: "5번 게시글입니다.",
    user: "서강준",
    createDate: "2023-01-26",
    readCount: 5,
    commentCount: 22,
    thumbCount: 11,
  },
  {
    post_id: 6,
    img: "https://picsum.photos/id/87/720/400/",
    category: "자유 게시판",
    title: "6번",
    content: "6번 게시글입니다.",
    user: "윤아",
    createDate: "2023-01-26",
    readCount: 1,
    commentCount: 4,
    thumbCount: 15,
  },
  {
    post_id: 7,
    img: "https://picsum.photos/id/72/720/400/",
    category: "레시피",
    title: "7번",
    content: "7번 게시글입니다.",
    user: "아이유",
    createDate: "2023-01-27",
    readCount: 2,
    commentCount: 7,
    thumbCount: 2,
  },
  {
    post_id: 8,
    img: "https://picsum.photos/id/4/720/400/",
    category: "칵테일 추천",
    title: "8번",
    content: "8번 게시글입니다.",
    user: "수지",
    createDate: "2023-01-27",
    readCount: 3,
    commentCount: 3,
    thumbCount: 0,
  },
  {
    post_id: 9,
    img: "https://picsum.photos/id/29/720/400/",
    category: "레시피",
    title: "9번",
    content: "9번 게시글입니다.",
    user: "제니",
    createDate: "2023-01-28",
    readCount: 6,
    commentCount: 1,
    thumbCount: 9,
  },
  {
    post_id: 10,
    img: "https://picsum.photos/id/27/720/400/",
    category: "레시피",
    title: "10번",
    content: "10번 게시글입니다.",
    user: "로제",
    createDate: "2023-01-28",
    readCount: 10,
    commentCount: 12,
    thumbCount: 4,
  },
];
const getPostById = (id) => {
  const array = boardList.filter((x) => x.post_id === id);
  if (array.length === 1) {
    return array[0];
  }
  return null;
};
export { getPostById, boardList };
