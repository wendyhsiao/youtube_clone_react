import styled from 'styled-components';
import CloseIcon from '../assets/icons/close.svg?react';
import { cloneElement, createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';

const Modal = styled.div`
  position: fixed;
  top: calc(56.25vw + 48px);
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  background-color: black;
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: white;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
`;

const ModalHeader = styled.div`
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.125rem;
  line-height: 1.625rem;
  font-weight: 700;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const ModalBody = styled.div`
  flex-grow: 1;
  padding: 12px;
  overflow-y: scroll;
  overscroll-behavior: auto contain;
`;

const ModalContext = createContext();

function BottomSheets({ children }) {
  const [openName, setOpenName] = useState();

  const close = () => {
    setOpenName('');
    document.body.classList.remove('fixed');
  };

  const open = (opensWindowName) => {
    setOpenName(opensWindowName);
    document.body.classList.add('fixed');
  };

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name, title }) {
  const { openName, close } = useContext(ModalContext);

  if (name !== openName) return null;

  return createPortal(
    <Modal>
      <ModalWrapper>
        <ModalHeader>
          {title}
          <CloseIcon onClick={close} />
        </ModalHeader>

        <ModalBody>{children}</ModalBody>
      </ModalWrapper>
    </Modal>,
    document.body
  );
}

BottomSheets.Open = Open;
BottomSheets.Window = Window;

export default BottomSheets;
