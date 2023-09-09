import React, {useState} from "react";
import { InputWrapper,  Wrapper} from "./index.style";
import { Btn } from "../../components/menu-buttons/index.style";
import { Titel } from "./index.style";
import { ItemInput } from "../../components/Cost-form/index.style";
import { AllCategories} from "../../components/Category-item";
import { AddedCategories } from "../../components/Category-item/index.style";





export const CategoryPage = () => {
    const [categories, setCategories] = useState([])
    const [categorie, setCategorie] = useState('')
    

    const onCategoryTextChange = (event) => {
        setCategorie(event.target.value) 
        
    }

    const onAddCategorie = () => {
        setCategories((prevCategories) => {
            return [
                ...prevCategories, 
                {
                    id: Math.random(),
                    categorie: categorie
                }
            ]
            
        })
        setCategorie('')
            

    }
    const onDeleteClick = (id) => {
        setCategories((prevCategories) =>   {
            return prevCategories.filter((categorie) => {
                return categorie.id !== id;
            })
        });
            }
      

return (

    <Wrapper>
        
       

        <InputWrapper>
            <ItemInput value={categorie} onChange={onCategoryTextChange}  placeholder="Add  new category" />
            <Btn onClick={onAddCategorie}>add</Btn>
        </InputWrapper>
        <Titel>Existing categories</Titel>
        {categories.map(({categorie, id})=>(
            <AllCategories onDelete= {() => onDeleteClick(id)}>
                {categorie}
            </AllCategories>


             ))}
            
        
     </Wrapper>
    
    
    
    



)


}