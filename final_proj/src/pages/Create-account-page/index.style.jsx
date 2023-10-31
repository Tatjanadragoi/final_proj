import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #241b72;
  display: grid;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding: 5px;
  align-items: center;
  margin-top: 50px;
`;
export const RegisteredMembrer = styled.p`
  color: #8aa4d4;
  margin-top: 25px;
`;

export const LoginHereButton = styled.button`
  color: #d0ff00;
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;

  &:active {
    color: #9fa6e7;
  }
`;
