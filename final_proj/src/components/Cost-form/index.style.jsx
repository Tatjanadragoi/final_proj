import styled from 'styled-components'


export const Wrapper = styled.div`
  margin-top: 50px;
   display: flex;
   justify-content: space-evenly;
   width: 80%;
   margin-left: 15%;

`

export const ItemInput = styled.input`
        
        
        
            min-width: 30%;
            max-width: 30%;
            color: rgb(56, 19, 219);
            font-size: 16px;
            min-height: 29px;
            border-radius: 7px;
            border: 2px solid transparent;
            box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 24%) 0px 1px 2px;
            background: rgb(251, 251, 251);
            text-align: center;
           
            
            
           
            
  `


export const CategoryStyle = styled.select`
    
            
            width: 15%;
            color: rgb(76, 219, 19);
            font-size: 16px;
            min-height: 32px;
            border-radius: 4px;
            border: 2px solid transparent;
            box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 24%) 0px 1px 2px;
            background: rgb(251, 251, 251);
            
            
            
`
export const PriceInput = styled.input`
        
        
    /* margin-top: 70px; */
    width: 12%;
    font-size: 16px;
    color: #131111;
    min-height: 28px;
    border-radius: 4px;
    border: 2px solid transparent;
    box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 24%) 0px 1px 2px;
    background: rgb(251, 251, 251);
    text-align: center;
    
        

    `

    
export const CostListBtn = styled.button`
    
background-color: white;
width: 90px;
height: 33px;
color: black;

cursor: pointer;

border-radius: 4px;
/* border: 2px solid transparent;  */
text-align: center;







&:active {
  box-shadow: inset 2px 2px 10px black;
}

  
`