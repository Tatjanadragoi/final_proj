import React from "react";


export const CostDate = (props) => {
    const month = props.date.toLocaleString("en-EN", {month: "long"});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString("en-EN", {day: "2-digit"});

    return (
        <div>
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
        </div>
    );


}

    




































