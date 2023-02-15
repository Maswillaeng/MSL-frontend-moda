import React from "react";
import { Link } from "react-router-dom";
import { ModalTemplate } from "./ModalContainer";
import "../../styles/input.css";

const NeedLoginModal = (props) => {
  return (
    <ModalTemplate>
      <div className="flex flex-col">
        <h1 className="text-center text-[1.6rem] font-bold h-32 mt-10 pb-10">
          로그인이 필요합니다.
        </h1>
        <div className="flex justify-between items-center w-full pb-16 px-28">
          <Link to="/login">
            <button className="button" onClick={props.onModalClose}>
              로그인
            </button>
          </Link>
          <button className="button" onClick={props.onModalClose}>
            취소
          </button>
        </div>
        <div className="flex justify-end">
          <div className="pr-2">아직 회원이 아니신가요?</div>
          <Link to="/signup">
            <div
              className="font-bold text-main hover:cursor-pointer hover:underline"
              onClick={props.onModalClose}
            >
              회원가입
            </div>
          </Link>
        </div>
      </div>
    </ModalTemplate>
  );
};

export default NeedLoginModal;
