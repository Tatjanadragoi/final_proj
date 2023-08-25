import React from "react";
import { StyledCostList } from "./index.style";
import { CostListBtn } from "./index.style";
import { CostDate } from "../CostDate.js";
import { Btn } from "../menu-buttons/index.style";
import { AddItemButton } from "../Add-item-button";








export const CostList = (props) => {

   

return (
    <div>
        
        <StyledCostList>

            <div>{props.date}</div>
            <h2>{props.description}</h2>
            <div>{props.amount}€</div>
            <div>{props.category}</div>
       
       </StyledCostList>
    </div>
    
)


}