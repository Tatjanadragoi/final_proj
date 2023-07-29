import React from 'react';
import { RightSide,  Wrapper, Menu,  LeftSide } from './index.style';
import { Btn } from '../../components/menu-buttons/index.style';
import { AppName } from '../../components/App-name';
import { AddItemButton } from '../../components/Add-item-button'; 
import { ChooseCategory } from '../../components/Category-list';
import { CostList } from '../../components/cost-list';
import { ItemInput } from '../../components/Item-input';
import { PriceInput } from '../../components/Price-input';











export const MainPage = () => {
    return (


<Wrapper>
    
    <LeftSide> 
         <Menu>
            <Btn>Create account</Btn>
            <Btn>Add category</Btn>
            <Btn>Statistic</Btn>
         </Menu>
        
    <RightSide>
    
             <AppName/>
             <ChooseCategory/>
             <ItemInput/>
             <PriceInput/>
             <AddItemButton/>
             <CostList/>

            
             
             
             
             
             
             
              
             
             
            
             
    </RightSide>
        
        
    </LeftSide>
   
    
   
</Wrapper>





    )
}