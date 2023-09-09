import React from "react";
import { StyledCostList } from "./index.style";
import { CostListBtn, Date, Price, Name } from "./index.style";
import { Btn } from "../menu-buttons/index.style";
import { AddItemButton } from "../Add-item-button";



export const CostItem = ({children, onDelete}) => {

   

return (
    
        
        <StyledCostList>
            <CostListBtn>Edit</CostListBtn>
            <CostListBtn onClick={onDelete}>Delete</CostListBtn>
        
            
            <div>{children}</div>

        </StyledCostList>
    
    
)


}