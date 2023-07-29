import React from "react";
import { RightSide } from './index.style';
import { LeftSide } from './index.style';
import { Wrapper } from './index.style';
import { Menu } from './index.style';
import { Btn } from '../../components/buttons/index.style';
import { AppName } from '../../components/appName';
import { CategoryStyle } from '../../components/categoryList/index.style';

export const CreateAccountPage = () => {

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
             <CategoryStyle/>  
        </RightSide>
        
       
    </LeftSide>
   
    
   
</Wrapper>

)

}