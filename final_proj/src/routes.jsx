import React from "react"; 
import { MainPage } from "./pages/main-page";
import { LoginPage } from "./pages/login-page";
import { CreateAccount } from "./pages/create-account-page";
import { CategoryPage } from "./pages/category-page";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { LeftSide } from "./pages/main-page/index.style";
import { LeftMenu } from "./components/left-menu";
import { NotFoundPage } from "./pages/not-found-page";
import { PrivateRoute } from "./private-route";







export const Router = () => {


    return (
<BrowserRouter>
{/* <PrivateRoute></PrivateRoute> */}
    <LeftSide>
        
        <LeftMenu/>

    <Routes> 
        
        <Route path= "/" element = {<LoginPage/>}/>
        <Route path= "/categories" element = {<CategoryPage/>}/>
        <Route path= "/createAccount" element = {<CreateAccount/>}/>
        <Route path= "/main" element = { 
        
            <MainPage/>
         }/>
        <Route path= "*" element = {<NotFoundPage/>}/>
        
    </Routes>
    </LeftSide>

</BrowserRouter>

    )
}


{/* <Route path= "/" element = {<LoginPage/>}/>
        <Route path= "/categories" element = {<CategoryPage/>}/>
        <Route path= "/createAccount" element = {<CreateAccount/>}/>
        <Route path= "/main" element = { 
        <PrivateRoute>
            <MainPage/>
         </PrivateRoute>}/>
        <Route path= "*" element = {<NotFoundPage/>}/> */}