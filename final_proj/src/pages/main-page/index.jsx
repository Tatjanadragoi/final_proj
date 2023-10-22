
import React, { useState, useEffect } from "react";
import { RightSide, Wrapper, UserInputWrapper } from "./index.style";
import { CostItem } from "../../components/cost-item";
import {ItemInput,PriceInput,CostListBtn} from "../../components/cost-form/index.style";
import { Date, Price, Name } from "../../components/cost-item/index.style";
import { Titel } from "../../components/App-name/index.style";
import { ItemWrapper } from "../../components/cost-item/index.style";
import { CategorySelect } from "../../components/category-list/index.style";
import { StyledPreloader } from "../../components/preloader/index.style";

import { getCategories } from "../../redux/appSelectors";

import { addExpenses } from "../../redux/newCostSlice";
import { useDispatch} from "react-redux";
import { getExpenses } from "../../redux/appSelectors";
import { useSelector } from "react-redux";

export const MainPage = () => {

const dispatch = useDispatch();
const categories = useSelector(getCategories);




 

const newCosts = useSelector(getExpenses)

const [cost, setCost] = useState("");











// const newCosts = useSelector(getCosts);
  // const [costs, setCosts] = useState([]);
  const [costText, setCostText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  // useEffect(() => {
  //   setIsLoading(true);
  //   getData()
  //     .then((data) => {
  //       setCosts(data);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, []);

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

    dispatch(addExpenses({
      id: Math.random(),
      cost: costText,
      date: date,
      price: price,
     
      
      
    }));


    // setCosts((prevCosts) => {
    //   return [
    //     ...prevCosts,
    //     {
    //       id: Math.random(),
    //       date: date,
    //       category: "",
    //       cost: costText,
    //       price: price,
    //     },
    //   ];
    // });

    setCostText("");
    setDate("");
    setPrice("");
  };

  // const onDeleteClick = (id) => {
  //   setCosts((prevCosts) => {
  //     return prevCosts.filter((costText) => {
  //       return costText.id !== id;
  //     });
  //   });
  // };

  // const onEdit = (idToEdit, newCost, newPrice, newDate) => {
  //   const costToEdit = costs.find(({ id }) => id === idToEdit);

  //   costToEdit.isEditing = !costToEdit.isEditing;
  //   costToEdit.cost = newCost;
  //   costToEdit.date = newDate;
  //   costToEdit.price = newPrice;
  //   setCosts([...costs]);
  // };

  return (
    <Wrapper>
      <RightSide>
        <Titel>Budget planner</Titel>
        <UserInputWrapper>
          <CategorySelect>


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
        {isLoading && <StyledPreloader />}


        

        {newCosts.map(({ cost, price, date, id, isEditing }) => (
          <CostItem
            key={id}
            id={id}
            isEditing={isEditing}
            // onDelete={() => onDeleteClick(id)}
            // onEdit={onEdit}
            cost={newCosts}
            price={price}
          >
            
            <ItemWrapper>
              <Date>{date}</Date>
              <Name>{cost}</Name>
              <Price>{price}€</Price>
            </ItemWrapper>
          </CostItem>
        ))}
      </RightSide>
    </Wrapper>
  );
};





















































// import React, { useState, useEffect } from "react";
// import { RightSide, Wrapper, UserInputWrapper } from "./index.style";
// import { CostItem } from "../../components/cost-item";
// import {
//   ItemInput,
//   PriceInput,
//   CostListBtn,
// } from "../../components/cost-form/index.style";
// import { Date, Price, Name } from "../../components/cost-item/index.style";
// import { Titel } from "../../components/App-name/index.style";
// import { ItemWrapper } from "../../components/cost-item/index.style";
// import { StyledPreloader } from "../../components/preloader/index.style";
// import { CategorySelect } from "../../components/category-list/index.style";
// import { getCategories } from "../../redux/appSelectors";

// import { addCost } from "../../redux/costSlice";
// import { useDispatch} from "react-redux";
// import { getCosts } from "../../redux/appSelectors";
// import { useSelector } from "react-redux";




// export const MainPage = () => {
//   const dispatch = useDispatch();
//   const costs = useSelector(getCosts);


//   const categories = useSelector(getCategories);
  

//   const [cost, setCost] = useState([""]);
//   const [costText, setCostText] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [price, setPrice] = useState("");
//   const [date, setDate] = useState("");
  
  

//   // useEffect(() => {
//   //   setIsLoading(true);
//   //   getData()
//   //     .then((data) => {
//   //       setCosts(data);
//   //     })
//   //     .finally(() => {
//   //       setIsLoading(false);
//   //     });
//   // }, []);

//   const onDatechange = (event) => {
//     setDate(event.target.value);
//   };

//   const onCostTextChange = (event) => {
//     setCostText(event.target.value);
//   };
//   const onPriceChange = (event) => {
//     setPrice(event.target.value);
//   };

//   const onAddCost = () => {
//     dispatch(addCost({
//       id: Math.random(),
//       cost: cost,
//       isEditing: false,
      
//     }));

//     // const onAddCost = () => {
//     //   setCosts((prevCosts) => {
//     //     return [
//     //       ...prevCosts,
//     //       {
//     //         id: Math.random(),
//     //         date: date,
//     //         category: "",
//     //         cost: costText,
//     //         price: price,
//     //       },
//     //     ];
//     //   });

//     setCostText("");
//     setDate("");
//     setPrice("");
//   };

//   const onDeleteClick = (id) => {
//     // setCosts((prevCosts) => {
//     //   return prevCosts.filter((costText) => {
//     //     return costText.id !== id;
//     //   });
//     // });
//   };

//   const onEdit = (idToEdit, newCost, newPrice, newDate) => {
//     // const costToEdit = costs.find(({ id }) => id === idToEdit);
//     // costToEdit.isEditing = !costToEdit.isEditing;
//     // costToEdit.cost = newCost;
//     // costToEdit.date = newDate;
//     // costToEdit.price = newPrice;
//     // setCosts([...costs]);
//   };

//   return (
//     <Wrapper>
//       <RightSide>
//         <Titel>Budget planner</Titel>
//         <UserInputWrapper>
//           <CategorySelect>
//             {categories.map(({ categorie }) => (
//               <option key={categorie} value={categorie}>
//                 {categorie}
//               </option>
//             ))}
//           </CategorySelect>
//           <PriceInput value={date} onChange={onDatechange} type="Date" />
//           <ItemInput
//             value={costText}
//             onChange={onCostTextChange}
//             placeholder="Add cost"
//           />
//           <PriceInput
//             value={price}
//             onChange={onPriceChange}
//             placeholder="Price"
//           />
//           <CostListBtn onClick={onAddCost}>Add</CostListBtn>
//         </UserInputWrapper>
//         {isLoading && <StyledPreloader />}

//         {costs.map(({cost, id, isEditing}) => (
//           <CostItem 
//             key={id}
//             id={id}
//             isEditing={isEditing}
//             onDelete={() => onDeleteClick(id)}
//             onEdit={onEdit}
//             cost={cost}
//             price={price}
//           >
           
           
//             <ItemWrapper>
//               {/* <Date>{date}</Date> */}
//               <Name>{cost}</Name>
//               {/* <Price>{price}€</Price> */}
//             </ItemWrapper>
//           </CostItem>
//         ))}
//       </RightSide>
//     </Wrapper>
//   );
// };
