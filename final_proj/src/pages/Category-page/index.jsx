import React, { useState, useRef } from "react";
import { InputWrapper, Wrapper } from "./index.style";
import { Btn } from "../../components/menu-buttons/index.style";
import { Titel } from "./index.style";
import { ItemInput } from "../../components/cost-form/index.style";
import { AllCategories } from "../../components/category-item";
import {addCategory,deleteCategory,editCategory} from "../../redux/costSlice";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/appSelectors";
import { Chartjs} from "../../components/graphic";
import { Chart } from "chart.js";

export const CategoryPage = (children, id) => {
  const dispatch = useDispatch();
  const categories = useSelector(getCategories);
  const [categorie, setCategorie] = useState("");
  const addCategorieRef = useRef(null);

  const onCategoryTextChange = (event) => {
    setCategorie(event.target.value);
  };

  const onAddCategorie = () => {
    dispatch(
      addCategory({
        id: Math.random(),
        categorie: categorie,
        isEdditing: false,
      })
    );

    setCategorie("");

    addCategorieRef.current?.focus();
  };
  const onDeleteClick = (id) => {
    dispatch(deleteCategory(id));
  };

  const onEditClick = (id, categorie) => {
    const action = editCategory({
      id,
      categorie: categorie,
    });
    dispatch(action);
  };

  return (
    <Wrapper>
      <InputWrapper>
      
        <ItemInput
          value={categorie}
          onChange={onCategoryTextChange}
          ref={addCategorieRef}
          placeholder="Add  new category"
        />
        <Btn onClick={onAddCategorie}>add</Btn>
      </InputWrapper>
      
      
      <Titel>Existing categories</Titel>

      {categories.map(({ categorie, id, isEdditing }) => (
        <AllCategories
          onDelete={() => onDeleteClick(id)}
          onEditClick={onEditClick}
          categorie={categorie}
          id={id}
          key={id}
          isEdditing={isEdditing}
          onClickEdit={onEditClick}
        >
          {categorie}
        </AllCategories>
      ))}
    </Wrapper>
  );
};
