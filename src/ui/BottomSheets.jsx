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
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const ModalBody = styled.div`
  flex-grow: 1;
`;

const ModalContext = createContext();

function BottomSheets({ children }) {
  const [openName, setOpenName] = useState();

  const close = () => setOpenName('');
  const open = setOpenName;

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

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);

  if (name !== openName) return null;

  return createPortal(
    <Modal>
      <ModalWrapper>
        <ModalHeader>
          Title
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
