import styled from 'styled-components'

export const LeftSide = styled.div `

& {
    
    width: 100%;
    min-height: 100%;
    background-image: linear-gradient(144deg,#0e1fa3, #440c64 50%,#261583);
}

`;

export const RightSide = styled.div `

& {
    
    
    border-radius: 1%;
    margin-top: 20px;
    margin-left: 350px;
    width:80%;
    min-height: 900px;
    height: auto;
    background-color: #f0f1ee;
   
   

}

`;



export const Wrapper = styled.div `
    
    display: grid; 
    height: 100%;
    width: 100%; 
   



`;

 export const Menu = styled.div `
    color: white;
    width: 10%;
    position: fixed;
    margin-top: 70px;
    left: 70px


  
 `;

 export const CostAddWrapper = styled.div`
    height: 10%;
    align-items: center;
    width:85%;
    padding:15px;
    text-align:center;`
   
    
    
  
    
 export const UserInputWrapper = styled.div`
    margin-top: 70px;
   display: flex;
   justify-content: center;
   width: 70%;
   margin-left: 15%;
   gap: 15px;
   



  
 `;