import React from "react"
import { AddedCategoriesWrapper, AddedCategories } from "./index.style"
import { Btn } from "../menu-buttons/index.style"
import { LeftSide } from "../../pages/main-page/index.style"
import { Wrapper } from "./index.style"





export const AllCategories = ({children, onDelete}) => {
    return (
        <LeftSide>
    <Wrapper>
            <AddedCategoriesWrapper>
                {/* <div>{children}</div> */}
                <AddedCategories>{children}</AddedCategories>
                <Btn onClick={onDelete}>Delete</Btn>
</AddedCategoriesWrapper>

        </Wrapper>


        </LeftSide>
    







    )
}

