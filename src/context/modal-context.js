import React, { useState } from "react";

export const ModalStateContext = React.createContext();

export const ModalSetterContext = React.createContext();

const ModalProvider = (props) => {
  const [state, setState] = useState({
    type: null,
    props: null,
  });

  return (
    <ModalSetterContext.Provider value={setState}>
      <ModalStateContext.Provider value={state}>
        {props.children}
      </ModalStateContext.Provider>
    </ModalSetterContext.Provider>
  );
};

export default ModalProvider;
