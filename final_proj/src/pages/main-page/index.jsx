import React, { useState } from 'react';
import { RightSide,  Wrapper, Menu,  LeftSide, CostAddWrapper, UserInputWrapper } from './index.style';
import { Btn } from '../../components/menu-buttons/index.style';
import { AppName } from '../../components/App-name';
import {CostItem } from '../../components/cost-item';
import { CategoryStyle, ItemInput, PriceInput, CostListBtn } from '../../components/Cost-form/index.style';
import { Date, Price, Name  } from '../../components/cost-item/index.style';


// const cost = 
//         {
//             date: '',
//             category: '',
//             cost: '',
//             price: ''


//         }

export const MainPage = () => {

    const [costs, setCosts]= useState([])

    const [costText, setCostText] = useState('')
    const [price, setPrice] = useState('')
    const [date, setDate] = useState('')


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

    
    

   
 return (

    <Wrapper>
    
     <RightSide>
     
             <AppName/>
             <UserInputWrapper>
                  <PriceInput value={date} onChange={onDatechange} type='Date'/>
                  <CategoryStyle/>
                  <ItemInput value={costText} onChange={onCostTextChange} placeholder='Add cost'/>
                  <PriceInput value={price} onChange={onPriceChange} placeholder='Price'/>
                  <CostListBtn onClick={onAddCost}>Add</CostListBtn>
             </UserInputWrapper>

             
             
            
            
               
           
             
             {costs.map(({cost, price, date})=>(
                <CostItem>
                    <Date>{date}</Date>
                    <Name>{cost}</Name>
                    <Price>{price}€</Price>
                </CostItem>
             ))}
             
             


             {/* {costs.map(({cost, price, date})=>(
                <CostItem>
                    <Name></Name>
                     {date}{cost}{price}</CostItem> */}
             
          
     </RightSide>
     
     
   
  </Wrapper>
    
    
    )}





