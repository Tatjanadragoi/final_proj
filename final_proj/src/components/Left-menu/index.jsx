import React from "react";
import { Btn, LogOutBtn } from "../menu-buttons/index.style";
import { Menu } from "../../pages/main-page/index.style";
import { useNavigate } from "react-router-dom";
import { logoutFromApp } from "../../redux/authSlice";
import { useDispatch } from "react-redux";

export const LeftMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onMainClick = () => {
    navigate("/main");
  };
  const onLoginClick = () => {
    navigate("/");
  };
  const onCreateAccountClick = () => {
    navigate("/createAccount");
  };
  const onAddNewCategoriesClick = () => {
    navigate("/categories");
  };

  const logoutHandler = () => {
    dispatch(logoutFromApp());
  };
  return (
    <Menu>
      <Btn onClick={onMainClick}>Main</Btn>
      <Btn onClick={onLoginClick}>Login</Btn>
      <Btn onClick={onCreateAccountClick}>Create account</Btn>
      <Btn onClick={onAddNewCategoriesClick}>Add new category</Btn>
      <LogOutBtn onClick={logoutHandler}>LogOut</LogOutBtn>
    </Menu>
  );
};
