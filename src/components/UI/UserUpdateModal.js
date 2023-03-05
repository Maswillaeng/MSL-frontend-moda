import { useRef, useState } from "react";
import { ModalTemplate } from "./ModalContainer";

const UserUpdateModal = (props) => {
  const [ img, setImg ] = useState("https://picsum.photos/id/29/720/400/")
  const fileInput = useRef(null)

  return (
    <ModalTemplate>
      <div className="p-2">
        <div className="flex flex-row space-x-10">
          <div >
            <img 
              className="w-[130px] h-[130px] rounded-full mx-auto"
              alt="userImage"
              src={img}
              onClick={() =>{fileInput.current.click()}}
            />
            <input 
              className="hidden"
              type="file"
              accept="image/*"
              ref={fileInput}
            />
            <button className="button w-[150px] mb-3 mt-6" onClick={() =>{fileInput.current.click()}}>
              이미지 수정
            </button>
          </div>
          <div>
            <input 
              type="text"
              placeholder="닉네임"
              className="form-input w-[300px] rounded-md border-gray-300"
            />
            <textarea
              type="text"
              rows="5"
              className="rounded-md border-gray-300 mt-3 w-[300px]"
            />
          </div>
        </div>
        <div className="flex justify-center items-center space-x-10 mt-5">
          <button className="button" onClick={props.onModalClose}>
            수정하기
          </button>
          <button className="text-main font-bold" onClick={props.onModalClose}>
            취소
          </button>
        </div>
      </div>
    </ModalTemplate>
  )
}
export default UserUpdateModal;