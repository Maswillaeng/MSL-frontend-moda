import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


function CardItem({card_data}) {
  const navigate = useNavigate()
  const { postId, img, title, content, thumbCount, readCount, commentCount, nickname, user_img, userId} = card_data;

  const toDetailPage = () => {
    navigate(`/board/${postId}`)
  }

  const toUserPage = () => {
    navigate(`/userpage/${userId}`)
  }


  // console.log(data)
  return (
    <div className='p-4 sm:w-1/3 lg:w-1/4'>
      <div className='h-full border-2 border-gray-100 border-opacity-60 rounded-lg overflow-hidden'>
        <img
          className='lg:h-60 md:h-48 w-full object-cover object-center' 
          src={img}
          alt="Card_image"
        />
        <div className='h-[130px] p-4 cursor-pointer' onClick={toDetailPage}>
          <h1 className='text-xl font-bold mb-2' >
            {title}
          </h1>
          <p className='leading-relaxed mb-3 truncate h-12'>
            {content}
          </p>  
          <div className='flex flex-wrap text-sm text-gray-400'>
            <h2 className='mr-2'>
              2일전
            </h2>
            <h2>{commentCount}개의 댓글</h2>
          </div>
        </div>
        <div className='p-4 flex flex-wrap items-center justify-between'>
          <div className='flex flex-wrap cursor-pointer' onClick={toUserPage}>
            <img 
              className='w-8 h-8 rounded-full'
              src="images/apeach.png"
              alt="user_img"
            />
            <h2 className='p-1 mx-1'>
              {nickname}
            </h2>
          </div>
          <div className='flex justify-'>
            <span className='mx-2'>
              <FontAwesomeIcon icon={faEye} className="mr-2"/>
              {readCount}
            </span>
            <span>
              <FontAwesomeIcon icon={faHeart} className="mr-2"/>
              {thumbCount}
            </span>
          </div>
        </div>

      </div>
    </div>
  )
}
export default CardItem;