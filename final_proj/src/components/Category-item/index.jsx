import React, { useState } from "react";
import { AddedCategoriesWrapper, AddedCategories } from "./index.style";
import { Btn } from "../menu-buttons/index.style";
import { LeftSide } from "../../pages/main-page/index.style";
import { Wrapper } from "./index.style";
import { EditInput } from "./index.style";
import { Modal } from "../modal";
import { ModalButton } from "../cost-item/index.style";

export const AllCategories = ({
  children,
  onDelete,
  onEditClick,
  isEdditing,
  categorie,
  id,
}) => {
  const [costCategorie, setCostCategorie] = useState(categorie);
  const [showModal, setShowModal] = useState(false);

  const handleCategorieChange = (event) => {
    setCostCategorie(event.target.value);
  };

  const handleCloseModal = () => setShowModal(false);

  const handleOpenModal = () => setShowModal(true);

  console.log(costCategorie);

  return (
    <LeftSide>
      <Wrapper>
        <Modal isOpen={showModal} onClose={handleCloseModal}>
          Delete category?
          <ModalButton onClick={() => onDelete(id)}>Yes</ModalButton>
          <ModalButton onClick={handleCloseModal}>Cancel</ModalButton>
        </Modal>
        <AddedCategoriesWrapper>
          <AddedCategories>
            {isEdditing ? (
              <EditInput
                value={costCategorie}
                onChange={handleCategorieChange}
              />
            ) : (
              <p>{costCategorie}</p>
            )}
          </AddedCategories>
          <Btn onClick={() => onEditClick(id, categorie, isEdditing)}>
            {isEdditing ? "Ok" : "Edit"}
          </Btn>
          <Btn onClick={handleOpenModal}>Delete</Btn>
        </AddedCategoriesWrapper>
      </Wrapper>
    </LeftSide>
  );
};
