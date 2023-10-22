import React from "react";
import { Btn } from "../menu-buttons/index.style";
import { Menu } from "../../pages/main-page/index.style";
import { useNavigate } from "react-router-dom";

export const LeftMenu = () => {

const navigate = useNavigate();

const onMainClick = () => {
    navigate('/main')
}
const onLoginClick = () => {
    navigate('/')
}
const onCreateAccountClick = () => {
    navigate('/createAccount')
}
const onAddNewCategoriesClick = () => {
    navigate('/categories')
}
    return (

<Menu>
            <Btn onClick={onMainClick}>Main</Btn>
            <Btn onClick={onLoginClick}>Login</Btn>
            <Btn onClick={onCreateAccountClick}>Create account</Btn>
            <Btn onClick={onAddNewCategoriesClick}>Add new category</Btn>
            <Btn>Statistic</Btn>
</Menu>

    )
}