import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #3533a0;
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  width: 25%;
  border-radius: 15px;
  box-shadow: 5px, 5px, 5px rgba (0, 0, 0, 0.5);
  padding: 15px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const InputButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  align-items: center;
  margin-top: 10%;
`;

export const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  padding: 5px;
`;
