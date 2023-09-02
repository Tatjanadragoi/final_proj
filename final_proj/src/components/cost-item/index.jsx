import React from "react";
import { StyledCostList } from "./index.style";
import { CostListBtn, Date, Price, Name } from "./index.style";
import { Btn } from "../menu-buttons/index.style";
import { AddItemButton } from "../Add-item-button";



export const CostItem = ({children}) => {

   

return (
    
        
        <StyledCostList>
            
            <div>{children}</div>

        </StyledCostList>
    
    
)


}