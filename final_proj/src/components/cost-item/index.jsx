import React, { useState, memo } from "react";
import { StyledCostList,ModalButton, ItemWrapper } from "./index.style";
import { CostListBtn, EditInput } from "./index.style";
import { Modal } from "../modal";



export const CostItem = memo(
  ({
    children,
    id,
    onDelete,
    onEditCost,
    isEdditing,
    cost,
    date,
    price,
    categorie,
  }) => {
    const [costText, setCostText] = useState(cost);
    const [costDate, setCostDate] = useState(date);
    const [costPrice, setCostPrice] = useState(price);
    const [showModal, setShowModal] = useState(false);
    const [costCategorie, setCostCategorie] = useState(categorie);

    const handleDateChange = (event) => {
      setCostDate(event.target.value);
    };
    const handlePriceChange = (event) => {
      setCostPrice(event.target.value);
    };
    const handleCategorieChange = (event) => {
      setCostCategorie(event.target.value);
    };
    const handleCostChange = (event) => {
      setCostText(event.target.value);
    };

    const handleCloseModal = () => setShowModal(false);

    const handleOpenModal = () => setShowModal(true);

    return (
      <StyledCostList>
        <Modal isOpen={showModal} onClose={handleCloseModal}>
          {" "}
          Delete cost?
          <ModalButton onClick={() => onDelete(id)}>Yes</ModalButton>
          <ModalButton onClick={handleCloseModal}>Cancel</ModalButton>
        </Modal>

        <CostListBtn onClick={handleOpenModal}>Delete</CostListBtn>

        <CostListBtn
          onClick={() =>
            onEditCost(id, costText, costDate, costPrice, costCategorie)
          }
        >
          {isEdditing ? "Ok" : "Edit"}
        </CostListBtn>

        {isEdditing ? (
          <ItemWrapper>
            <EditInput value={categorie} onChange={handleCategorieChange} />
            <EditInput type="Date" value={date} onChange={handleDateChange} />
            <EditInput value={cost} onChange={handleCostChange} />
            <EditInput value={price} onChange={handlePriceChange} />
          </ItemWrapper>
        ) : (
          children
        )}
      </StyledCostList>
    );
  }
);
