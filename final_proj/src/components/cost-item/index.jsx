import React, {useState} from "react";
import { StyledCostList } from "./index.style";
import { CostListBtn, Date, Price, Name } from "./index.style";
import { ItemInput } from "../Cost-form/index.style";



export const CostItem = ({children, id, onDelete, onEdit, isEditing, cost, date, price}) => {

    const [costText, setCostText] = useState(cost)
    const [costDate, setCostDate] = useState(date)
    const [costPrice, setCostPrice] = useState(price)

    const handleCostChange=(event)=> {
        setCostText(event.target.value)
    };
    const handleDateChange=(event)=> {
        setCostDate(event.target.value)
    }
    const handlePriceChange=(event)=> {
        setCostPrice(event.target.value)
    }
   

return (
    
        
        <StyledCostList>
            <CostListBtn onClick={() => onEdit(id, costText, costDate, costPrice)}>{isEditing? 'Ok' : 'Edit'}</CostListBtn>
            <CostListBtn onClick={() => onDelete (id)}>Delete</CostListBtn>
        
            
            <div>
                {isEditing ?  <div>
                <ItemInput value={costText} onChange={handleCostChange}/>
                <ItemInput type="Date" value={costDate} onChange={handleDateChange}/>
                <ItemInput value={costPrice} on onChange={handlePriceChange}/>
            </div>  : children }
                
            </div>

        </StyledCostList>
    
    
)


}