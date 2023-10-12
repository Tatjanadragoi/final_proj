import React, { useState, useRef } from "react";
import { InputWrapper, Wrapper } from "./index.style";
import { Btn } from "../../components/menu-buttons/index.style";
import { Titel } from "./index.style";
import { ItemInput } from "../../components/cost-form/index.style";
import { AllCategories } from "../../components/category-item";

export const CategoryPage = (children, id) => {
  const [categories, setCategories] = useState([]);
  const [categorie, setCategorie] = useState("");
  const addCategorieRef = useRef(null);

  const onCategoryTextChange = (event) => {
    setCategorie(event.target.value);
  };

  const onAddCategorie = () => {
    setCategories((prevCategories) => {
      return [
        ...prevCategories,
        {
          id: Math.random(),
          categorie: categorie,
        },
      ];
    });
    setCategorie("");

    addCategorieRef.current?.focus();
  };
  const onDeleteClick = (id) => {
    setCategories((prevCategories) => {
      return prevCategories.filter((categorie) => {
        return categorie.id !== id;
      });
    });
  };

  const onEditClick = (idToEdit, newCategorie) => {
    const categorieToEdit = categories.find(({ id }) => id === idToEdit);

    categorieToEdit.isEditing = !categorieToEdit.isEditing;
    categorieToEdit.categorie = newCategorie;
    setCategories([...categories]);
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

      {categories.map(({ categorie, id, isEditing }) => (
        <AllCategories
          onDelete={() => onDeleteClick(id)}
          onEditClick={onEditClick}
          categorie={categorie}
          id={id}
          key={id}
          isEditing={isEditing}
          onClickEdit={onEditClick}
        >
          {categorie}
        </AllCategories>
      ))}
    </Wrapper>
  );
};
