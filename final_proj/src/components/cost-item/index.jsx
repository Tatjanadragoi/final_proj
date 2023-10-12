import React, { useState, memo } from "react";
import { StyledCostList } from "./index.style";
import { CostListBtn } from "./index.style";
import { ItemInput } from "../cost-form/index.style";
import { Modal } from "../modal";
import { ModalButton } from "./index.style";
import { ItemWrapper } from "./index.style";

export const CostItem = memo(
  ({ children, id, onDelete, onEdit, isEditing, cost, date, price }) => {
    const [costText, setCostText] = useState(cost);
    const [costDate, setCostDate] = useState(date);
    const [costPrice, setCostPrice] = useState(price);
    const [showModal, setShowModal] = useState(false);

    const handleCostChange = (event) => {
      setCostText(event.target.value);
    };
    const handleDateChange = (event) => {
      setCostDate(event.target.value);
    };
    const handlePriceChange = (event) => {
      setCostPrice(event.target.value);
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

        <CostListBtn onClick={() => onEdit(id, costText, costDate, costPrice)}>
          {isEditing ? "Ok" : "Edit"}
        </CostListBtn>

        
          {isEditing ? (
            <ItemWrapper>
              <ItemInput value={costText} onChange={handleCostChange} />
              <ItemInput
                type="Date"
                value={costDate}
                onChange={handleDateChange}
              />
              <ItemInput value={costPrice} onChange={handlePriceChange} />
            </ItemWrapper>
          ) : (
            children
          )}
        
      </StyledCostList>
    );
  }
);
