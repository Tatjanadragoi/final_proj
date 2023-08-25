import React from "react"; 
import { MainPage } from "./pages/main-page";
import { LoginPage } from "./pages/Login-page";
import { CreateAccount } from "./pages/Create-account-page";
import { CategoryPage } from "./pages/Category-page";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { LeftSide } from "./pages/main-page/index.style";
import { LeftMenu } from "./components/Left-menu";
import { NotFoundPage } from "./pages/not-found-page";






export const Router = () => {


    return (
<BrowserRouter>
    <LeftSide>
        <LeftMenu/>

    <Routes> 
        
        <Route path= "/" element = {<LoginPage/>}/>
        <Route path= "/categories" element = {<CategoryPage/>}/>
        <Route path= "/createAccount" element = {<CreateAccount/>}/>
        <Route path= "/main" element = {<MainPage/>}/>
        <Route path= "*" element = {<NotFoundPage/>}/>
        
    </Routes>
    </LeftSide>

</BrowserRouter>

    )
}