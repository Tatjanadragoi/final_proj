import React, { useState } from "react";
import {RightSide, Wrapper,UserInputWrapper,LogedInUser,DescriptionWrapper} from "./index.style";
import { CostItem } from "../../components/cost-item";
import {ItemInput,PriceInput,CostListBtn} from "../../components/cost-form/index.style";
import { Date,Price,Name,Categorie, ItemWrapper} from "../../components/cost-item/index.style";
import { Titel } from "../../components/App-name/index.style";
import { CategorySelect } from "../../components/category-list/index.style";
import { getCategories} from "../../redux/appSelectors";
import {addExpenses,deleteExpenses,editExpenses} from "../../redux/newCostSlice";
import { useDispatch, useSelector } from "react-redux";
import { getExpenses} from "../../redux/appSelectors";
import { loginWithGoogle } from "../../redux/authSlice";
import { getUser } from "../../redux/authSelectors";




export const MainPage = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getCategories);
  const newCosts = useSelector(getExpenses);
  const [costText, setCostText] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [categorie, setCategorie] = useState("");
  const userData = useSelector(getUser);

  const onCategorieChange = (event) => {
    setCategorie(event.target.value);
  };

  const onDatechange = (event) => {
    setDate(event.target.value);
  };

  const onCostTextChange = (event) => {
    setCostText(event.target.value);
  };
  const onPriceChange = (event) => {
    setPrice(event.target.value);
  };

  const onAddCost = () => {
    dispatch(
      addExpenses({
        id: Math.random(),
        cost: costText,
        date: date,
        price: price,
        categorie: categorie,
        isEdditing: false,
      })
    );
    setCostText("");
    setDate("");
    setPrice("");
  };

  const onDeleteClick = (id) => {
    dispatch(deleteExpenses(id));
  };

  const onEditCost = (id, costText) => {
    const action = editExpenses({ id, costText, date, price, categorie });
    dispatch(action);
  };

  return (
    <Wrapper>
      <LogedInUser>{userData?.email}</LogedInUser>
      <RightSide>
       <Titel>Your cost list</Titel>
       
        <UserInputWrapper>
          <CategorySelect onChange={onCategorieChange}>
            {categories.map(({ categorie }) => (
              <option key={categorie} value={categorie}>
                {categorie}
              </option>
            ))}
          </CategorySelect>
          <PriceInput value={date} onChange={onDatechange} type="Date" />
          <ItemInput
            value={costText}
            onChange={onCostTextChange}
            placeholder="Add cost"
          />

          <PriceInput
            value={price}
            onChange={onPriceChange}
            placeholder="Price"
          />
          <CostListBtn onClick={onAddCost}>Add</CostListBtn>
        </UserInputWrapper>

        {newCosts.map(
          ({
            
            cost,
            price,
            date,
            id,
            isEdditing,
            categorie,
            
          }) => (
            <CostItem
              key={id}
              id={id}
              isEdditing={isEdditing}
              onDelete={() => onDeleteClick(id)}
              onEditCost={onEditCost}
              cost={cost}
              price={price}
              date={date}
              categorie={categorie}
            >
              <ItemWrapper>
                <Categorie>{categorie}</Categorie>
                <Date>{date}</Date>
                <Name>{cost}</Name>
                <Price>{price}€</Price>
              </ItemWrapper>
            </CostItem>
            
          )
        )}
      </RightSide>
    </Wrapper>
  );
};
