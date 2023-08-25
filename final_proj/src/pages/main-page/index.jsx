import React, { useState } from 'react';
import { RightSide,  Wrapper, Menu,  LeftSide } from './index.style';
import { Btn } from '../../components/menu-buttons/index.style';
import { AppName } from '../../components/App-name';
import { AddItemButton } from '../../components/Add-item-button'; 
import { ChooseCategory } from '../../components/Category-list';
import { CostList } from '../../components/cost-list';
import { ItemInput } from '../../components/Item-input';
import { PriceInput } from '../../components/Price-input';
import { LeftMenu } from '../../components/Left-menu';
// import { CostDate } from '../../components/CostDate.js';







// 



export const MainPage = () => {

   
  const costs = [
    {
        date: "Juny",
        description: "Smart TV",
        amount: 499,
        category: "Home",
        
    },
    {
        date: "august",
        description: "Shopping",
        amount: 600,
        category: "Food",
    },
    {
        date: "may",
        description: "Thailand",
        amount: 2160,
        category: "Travel",
    },
  ]
    


return (



    <Wrapper>
    
     
     <RightSide>
             <AppName/>
             <ChooseCategory/>
             <ItemInput/>
             <PriceInput/>
             <Btn/>
  


           <CostList date = {costs[0].date} description = {costs[0].description} amount = {costs[0].amount} category = {costs[0].category}></CostList>
           <CostList date = {costs[1].date} description = {costs[1].description} amount = {costs[1].amount} category = {costs[1].category}></CostList>
           <CostList date = {costs[2].date} description = {costs[2].description} amount = {costs[2].amount} category = {costs[2].category}></CostList> 
          
     </RightSide>
     
   
  </Wrapper>
    
    
    )}






















// export const MainPage = () => {

    // const [expenses, setExpenses] = useState([]); 
    // const [expenseText, setExpenseText] = useState('');

    // const onExpenseTextChange = (event) => {
    //     setExpenseText (event.target.value);
    // }

    // const onAddExpense = (event) => {
    //     setExpenses((prevExpenses) => {
    //         return [
    //             ...prevExpenses, {
    //                 price: false,
    //                 text: expenseText
    //             }
    //         ]})


    //         setExpenseText('596')
    // }
  
    


// return (




/* <Wrapper>
    
    <LeftSide> 
         <Menu>
            <Btn>Create account</Btn>
            <Btn>Add category</Btn>
            <Btn>Statistic</Btn>
         </Menu>
        
    <RightSide>
            <AppName/>
            <ChooseCategory/>
            <ItemInput  value={expenseText} onChange={onExpenseTextChange}/>
            <PriceInput/>
            <Btn onClick={onAddExpense}/>

            {expenses.map(({text}) => (
                <CostList
                    text = {text}
                    price = {5}
                />
                ))}   


          <CostList expenseText></CostList>  
    </RightSide>
    </LeftSide>
   
    </Wrapper> */