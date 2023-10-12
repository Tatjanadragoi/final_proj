import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
`;

export const ModalContent = styled.div`
  position: absolute;
  left: 60%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #7cb7e7;
  box-shadow: 10px 10px 10px black;
  border-radius: 12px;
  padding: 50px;
  display: grid;
  grid-template-columns: repeat(3,1fr);
 
`;

export const ModalBackdrop = styled.div`
  background-color: #000000;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
`;
