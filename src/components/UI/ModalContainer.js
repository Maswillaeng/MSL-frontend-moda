import React from "react";
import ReactDOM from "react-dom";
import { useContext } from "react";
import { ModalStateContext } from "../../context/modal-context";
import NeedLoginModal from "./NeedLoginModal";
import useModal from "../../hooks/useModal";
import UserUpdateModal from "./UserUpdateModal";

export const ModalTemplate = (props) => {
  return (
    <div className="fixed top-[30vh] w-[35rem] bg-white p-6 rounded-[14px] z-[1000] shadow-modal">
      {props.children}
    </div>
  );
};

const BackDrop = (props) => {
  return (
    <div
      onClick={props.onModalClose}
      className="fixed top-0 left-0 w-full h-screen flex justify-center items-center z-[500] bg-[#F8F9FA]/75"
    />
  );
};

const MODAL_COMPONENTS = {
  needLogin: NeedLoginModal,
  userUpdate: UserUpdateModal,
};

const ModalContainer = () => {
  const { type, props } = useContext(ModalStateContext);
  const { closeModal } = useModal();

  if (!type) {
    return null;
  }

  const Modal = MODAL_COMPONENTS[type];

  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onModalClose={closeModal} />,
        document.getElementById("overlays")
      )}
      {ReactDOM.createPortal(
        <Modal {...props} onModalClose={closeModal} />,
        document.getElementById("overlays")
      )}
    </>
  );
};

export default ModalContainer;
