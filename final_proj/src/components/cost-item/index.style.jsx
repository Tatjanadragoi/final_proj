import styled from "styled-components";

export const StyledCostList = styled.div`
  margin-top: 100px;
  margin-left: 10%;
  background-image: linear-gradient(144deg, #5362d4, #abbdd4 50%, #b2dce9);
  color: #fff;
  font-size: 14px;
  border-radius: 10px;
  width: 80%;
  box-shadow: 
  2px 2px 0px #162ada, 
  4px 4px 0px #7669eb, 
  6px 6px 0px #4d4be9,
  10px 10px 0px #a08bda
  
`;

export const CostListBtn = styled.button`
  background-image: linear-gradient(144deg, #8a85a3, #a195eb 50%, #345ce2);
   height: 25px;
  border-radius: 8px;
  box-shadow: rgba(176, 133, 224, 0.2) 0 15px 30px -5px;
  color: #ffffff;
  font-family: Phantomsans, sans-serif;
  font-size: 12px;
   width: 85px;
  cursor: pointer;
  margin-left: 92%;
  border-radius: 4px;
  border: 2px solid transparent;
  margin-top: 20px;
  

  &:active {
    box-shadow: inset 2px 2px 10px white;
  }
`;

export const Price = styled.div`
  color: #1e11cf;
  background-color: #f0e7e7;
  min-width: 150px;
  margin-bottom: 60px;
  text-align: center;
  font-family: fantasy;
  border-radius: 10px;
  height: 30px;
`;

export const Name = styled.div`
  color: #1e11cf;
  background-color: #f0e7e7;
  min-width: 150px;
  margin-bottom: 60px;
  text-align: center;
  font-family: fantasy;
  border-radius: 10px;
  height: 30px;
`;

export const Categorie = styled.div`
  color: #1e11cf;
  background-color: #e7e7f0;
  min-width: 150px;
  margin-bottom: 60px;
  text-align: center;
  font-family: fantasy;
  border-radius: 10px;
  height: 30px;
`;

export const Date = styled.div`
  color: #1e11cf;
  background-color: #f0e7e7;
  min-width: 150px;
  margin-bottom: 60px;
  text-align: center;
  font-family: fantasy;
  border-radius: 10px;
  height: 30px;
`;

export const ModalButton = styled.button`
  background-image: linear-gradient(144deg, #8a85a3, #4c37d3 50%, #3112e6);
  height: 20px;
  border-radius: 8px;
  box-shadow: rgba(176, 133, 224, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #ffffff;
  font-family: Phantomsans, sans-serif;
  font-size: 13px;
  width: 60px;
  cursor: pointer;
  margin-left: 60%;
  border-radius: 4px;
  border: 2px solid transparent;
  justify-content: space-between;
`;
export const ItemWrapper = styled.div`
  display: flex;
  gap: 130px;
  margin-left: 30px;
  
  
`;

export const EditInput = styled.input`
  width: 140px;
  text-align: center;
  margin-bottom: 50px;
  border-radius: 5px;
  border: 4px solid seashell;
`;
