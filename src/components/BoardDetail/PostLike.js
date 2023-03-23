import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faEmptyHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faFillHeart } from "@fortawesome/free-solid-svg-icons";

const heartConfig = {
  likeClick: "animate-like-click",
  textColor: "text-[#FB375B]",
};

const PostLike = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeAmount, setLikeAmount] = useState(0);

  const likeClickHandler = () => {
    setIsLiked(!isLiked);
    isLiked ? setLikeAmount(likeAmount - 1) : setLikeAmount(likeAmount + 1);
  };

  return (
    <div className="sticky pt-32 top-0">
      <div className="relative mt-4">
        <div className="absolute -left-28">
          <div className="w-16 h-auto py-2 pb-4 rounded-full flex flex-col justify-center items-center border">
            <div className="rounded-full border py-2 px-2 flex justify-center items-center">
              <FontAwesomeIcon
                icon={isLiked ? faFillHeart : faEmptyHeart}
                size="2x"
                className={`${
                  isLiked && heartConfig.textColor
                } hover:cursor-pointer ${isLiked && heartConfig.likeClick}`}
                onClick={likeClickHandler}
              />
            </div>
            <div className="pt-2 font-[550]">{likeAmount}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostLike;

// 인스타 좋아요처럼 좋아요를 누를 때, 취소할 때 모두 애니메이션 효과를 넣고 싶었으나, 리액트의 한계인지 테일윈드의 한계인지 6시간의
// 도전 끝에 누를 때만 효과를 넣기로 타협을 봤다... 무능한 프론트라 죄송합니다.. css 더 배워올게요
