import { CostForm } from "../Cost-form";
import React from "react";


export const NewCost = (props) => {
    const saveCostDataHandler = (inputCostData) =>
    {
        const costData = {
            ...inputCostData,
            id: Math.random().toString()
        }
        props.onAddCost(costData);
    }


    return(
        <CostForm onSaveCostData={saveCostDataHandler}/>
    )
}