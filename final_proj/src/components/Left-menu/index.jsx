import React from "react";
import { Btn } from "../menu-buttons/index.style";
import { Menu } from "../../pages/main-page/index.style";
import { useNavigate } from "react-router-dom";

export const LeftMenu = () => {

const navigate = useNavigate();

const OnMainClick = () => {
    navigate('/main')
}
const OnLoginClick = () => {
    navigate('/')
}
const OnCreateAccountClick = () => {
    navigate('/createAccount')
}
const OnAddNewCategoriesClick = () => {
    navigate('/categories')
}
    return (

<Menu>
            <Btn onClick={OnMainClick}>Main</Btn>
            <Btn onClick={OnLoginClick}>Login</Btn>
            <Btn onClick={OnCreateAccountClick}>Create account</Btn>
            <Btn onClick={OnAddNewCategoriesClick}>Add new category</Btn>
            <Btn>Settings</Btn>
</Menu>

    )
}