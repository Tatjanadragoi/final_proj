import styled from 'styled-components'

export const LeftSide = styled.div `

& {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #241b72;
}

`;

export const RightSide = styled.div `

& {
    
    
    border-radius: 1%;
    margin-top: 20px;
    margin-left: 350px;
    width:80%;
    height: 95%;
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
    width: 7%;
    height: 50%;
    background-color: #241b72;
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