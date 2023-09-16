import React, { useState, useEffect } from 'react';
import { RightSide,  Wrapper, Menu,  LeftSide, CostAddWrapper, UserInputWrapper } from './index.style';
import { Btn } from '../../components/menu-buttons/index.style';
import { AppName } from '../../components/App-name';
import {CostItem } from '../../components/cost-item';
import {  ItemInput, PriceInput, CostListBtn } from '../../components/Cost-form/index.style';
import { Date, Price, Name  } from '../../components/cost-item/index.style';
import { getData } from '../../components/mocks';
import { Preloader } from '../../components/preloader';

import { CategorySelect } from '../../components/Category-list/index.style';



export const MainPage = () => {

    const [costs, setCosts]= useState([])
    const [costText, setCostText] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [price, setPrice] = useState('')
    const [date, setDate] = useState('')

    useEffect(() => {
        setIsLoading(true);
        getData().then((data)=> {
            setCosts(data);
        })
        .finally(() => {setIsLoading(false)})
  
    },[]);

console.log(costs)
    const onDatechange = (event) => {
        setDate(event.target.value)
     }

    const onCostTextChange = (event) => {
        setCostText(event.target.value)
   }
    const onPriceChange = (event) => {
        setPrice(event.target.value)
        
    }
    const onAddCost = () => {
        setCosts((prevCosts)=> {
            return [
                ...prevCosts, 
                {
                id: Math.random(),
                date: date,
                category: '',
                cost: costText,
                price: price
                }
            ]
        })

        setCostText('');
        setDate('');
        setPrice('')
    }
    const onDeleteClick = (id) => {
setCosts((prevCosts) =>   {
    return prevCosts.filter((costText) => {
        return costText.id !== id;
    })
});
    }

    const onEdit = (idToEdit, newCost, newPrice, newDate) => {
       const costToEdit = costs.find(({id}) => id === idToEdit)
       
       costToEdit.isEditing = !costToEdit.isEditing;
       costToEdit.cost = newCost;
       costToEdit.date = newDate;
       costToEdit.price = newPrice;
       setCosts([...costs])

}
  

return (

    <Wrapper>
    <RightSide>
            <AppName/>
             <UserInputWrapper>
                  <PriceInput value={date} onChange={onDatechange} type='Date'/>
                  <CategorySelect id='sdfds'></CategorySelect>
                  <ItemInput value={costText} onChange={onCostTextChange} placeholder='Add cost'/>
                  <PriceInput value={price} onChange={onPriceChange} placeholder='Price'/>
                  <CostListBtn onClick={onAddCost}>Add</CostListBtn>
             </UserInputWrapper>
             {isLoading && <Preloader/>}
             
                    {costs.map(({cost, price, date, id, isEditing})=>(
                <CostItem

                    id={id} 
                    isEditing={isEditing}
                    onDelete= {() => onDeleteClick(id)}
                    onEdit={onEdit}
                    cost={cost}
                    price={price}
                    
                 >
                    <Date>{date}</Date>
                    <Name>{cost}</Name>
                    <Price>{price}€</Price>
                </CostItem>
             ))}
             
            
    </RightSide>
 </Wrapper>
    
    
    )}





