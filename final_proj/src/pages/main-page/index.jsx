import React from 'react';
import { RightSide } from './index.style';
import { LeftSide } from './index.style';
import { Wrapper } from './index.style';
import { Menu } from './index.style';
import { Btn } from '../../components/buttons/index.style';



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
             Your budget planner
        </RightSide>
        
       
    </LeftSide>
   
    
   
</Wrapper>





    )
}