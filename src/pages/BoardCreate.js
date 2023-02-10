import React, { useState } from 'react';
import Header from '../components/Header';
import CkEditor from '../components/BoardCreate/Editor';

const BoardCreate = ({editor}) => {
  const [ title, setTitle ] = useState("")
  const [ content, setContent ] = useState("")

  // 내용 받아오기
  const content_data = (data) => {
    console.log(data)
    setContent(data)
  }
  return (
    <div>
      <Header />
      <h1 className="text-center mt-20 mb-10 font-bold text-4xl">글 작성</h1>
      {/* 카테고리 라디오 버튼 */}
      <div className='max-w-5xl mx-auto'>
        <div className='form-group flex justify-center'>
          <input type="text" placeholder='제목' onChange={(e) => setTitle(e.target.value)} className='form-input w-[100%] flex-1 mb-8 rounded-md border-gray-300'/>
        </div>
        <CkEditor content={content_data}/>
      </div>
      <div className='flex justify-center m-7'>
        <button type='button' className='bg-main h-10 w-[120px] text-white rounded-md'>글 작성하기</button>
      </div>
    </div>
  );
}
export default BoardCreate;
