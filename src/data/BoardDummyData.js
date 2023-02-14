const boardList = [
  {
    post_id: 1,
    category: "레시피",
    title: "1번",
    content:
      "1번 게시글입니다. The Golden Order has been brok황금률은 부서졌다.Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Betwe일어나라, 빛바랜 자여. 축복의 인도를 받아 엘든 링의 힘을 휘두르고 틈새의 땅에서 엘데의 왕이 되어라.In the Lands Between ruled by Queen Marika the Eternal, the Elden Ring, the source of the Erdtree, has been shatter영원의 여왕 마리카가 다스리는 틈새의 땅에서 황금 나무의 근원인 엘든 링이 파쇄되었다.Marika's offspring, demigods all, claimed the shards of the Elden Ring known as the Great Runes, and the mad taint of their newfound strength triggered a war: The Shattering. A war that meant abandonment by the Greater Wi마리카의 자식들, 모두가 데미갓인 그들은 거대한 룬이라 불리우는, 엘든 링의 조각을 차지했으며, 그 새로운 힘에 미쳐 타락하고 파쇄전쟁을 일으킨 끝에 위대한 의지에게 버림받았다.And now the guidance of grace will be brought to the Tarnished who were spurned by the grace of gold and exiled from the Lands Betwe그리고 이제 황금의 축복에 의해 틈새의 땅에서 추방된 빛바랜 자들에게 축복의 인도가 전해질 것이다.Ye dead who yet live, your grace long lost, follow the path to the Lands Between beyond the foggy sea to stand before the Elden Ri죽어있으나 살아있는 자들이여, 오래 전에 축복을 잃은 자들이여, 안개 낀 바다를 넘고 틈새의 땅으로 향하는 길을 걸어 엘든 링을 뵈어라.And become the Elden Lo그리고 엘데의 왕이 되어라.",
    name: "안보현",
    createDate: "2023-01-24",
    readCount: 3,
  },
  {
    post_id: 2,
    category: "칵테일 추천",
    title: "2번",
    content: "2번 게시글입니다.",
    name: "이준호",
    createDate: "2023-01-24",
    readCount: 11,
  },
  {
    post_id: 3,
    category: "자유 게시판",
    title: "3번",
    content: "3번 게시글입니다.",
    name: "박보검",
    createDate: "2023-01-25",
    readCount: 5,
  },
  {
    post_id: 4,
    category: "레시피",
    title: "4번",
    content: "4번 게시글입니다.",
    name: "차은우",
    createDate: "2023-01-25",
    readCount: 4,
  },
  {
    post_id: 5,
    category: "레시피",
    title: "5번",
    content: "5번 게시글입니다.",
    name: "서강준",
    createDate: "2023-01-26",
    readCount: 5,
  },
  {
    post_id: 6,
    category: "자유 게시판",
    title: "6번",
    content: "6번 게시글입니다.",
    name: "윤아",
    createDate: "2023-01-26",
    readCount: 1,
  },
  {
    post_id: 7,
    category: "레시피",
    title: "7번",
    content: "7번 게시글입니다.",
    name: "아이유",
    createDate: "2023-01-27",
    readCount: 2,
  },
  {
    post_id: 8,
    category: "칵테일 추천",
    title: "8번",
    content: "8번 게시글입니다.",
    name: "수지",
    createDate: "2023-01-27",
    readCount: 3,
  },
  {
    post_id: 9,
    category: "레시피",
    title: "9번",
    content: "9번 게시글입니다.",
    name: "제니",
    createDate: "2023-01-28",
    readCount: 6,
  },
  {
    post_id: 10,
    category: "레시피",
    title: "10번",
    content: "10번 게시글입니다.",
    name: "로제",
    createDate: "2023-01-28",
    readCount: 10,
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
