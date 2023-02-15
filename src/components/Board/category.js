import React, { useState } from 'react';

const Category = () => {
  const [ category ] = useState([
    "전체",
    "인기 게시판",
    "레시피",
    "칵테일 추천",
    "안주 추천",
    "자유 게시판"
  ])
  return (
    <>
        <ul className='flex justify-center m-4'>
          {category.map((val) => (
            <li className='m-3' key={val}>
              <button className='hover:text-main hover:font-bold'>{val}</button>
            </li>
          ))}
        </ul>
      </>  
  )
}
export default Category;