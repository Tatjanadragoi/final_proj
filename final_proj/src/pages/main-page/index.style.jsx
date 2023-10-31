import styled from "styled-components";

export const LeftSide = styled.div`
  & {
    width: 100%;
    min-height: 100%;
    background-image: linear-gradient(144deg, #0e1fa3, #440c64 50%, #261583);
  }
`;

export const RightSide = styled.div`
  & {
    border-radius: 1%;
    margin-top: 20px;
    margin-left: 350px;
    width: 80%;
    min-height: 900px;
    height: auto;
    background-color: #f0f1ee;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
`;

export const Menu = styled.div`
  color: white;
  width: 10%;
  position: fixed;
  margin-top: 70px;
  left: 70px;
`;

export const CostAddWrapper = styled.div`
  height: 10%;
  align-items: center;
  width: 85%;
  padding: 15px;
  text-align: center;
`;

export const UserInputWrapper = styled.div`
  margin-top: 80px;
  width: 1080px;
  display: flex;
  gap: 25px;
  margin-left: 10%;
`;

export const LogedInUser = styled.div`
  margin-top: 40px;
  color: white;
  margin-left: 40px;
`;

export const DescriptionWrapper = styled.div`
  margin-top: 100px;
  margin-left: 10%;
  background-image: linear-gradient(144deg, #5362d4, #abbdd4 50%, #b2dce9);
  color: #31c44a;
  font-size: 14px;
  border-radius: 10px;
  width: 80%;
  display: flex;
  justify-content: end;
`;
