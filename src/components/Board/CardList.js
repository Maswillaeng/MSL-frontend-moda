import { useEffect, useState } from "react";
import { boardList } from "../../data/BoardDummyData";
import CardItem from "./CardItem";

const CardList = () => {
  // const [ posts, setPosts ] = useState(null);
  const [ loading, setLoading ] = useState(false);

  
  return (
    <div className="flex flex-wrap">
      {boardList.map(post => (
        <CardItem key={post.post_id} card_data={post}/>
      ))}
    </div>
  )
}
export default CardList;