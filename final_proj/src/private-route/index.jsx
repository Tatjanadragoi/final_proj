import React from "react";
import { Navigate } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { getUser } from "../redux/authSelectors";

export const PrivateRoute = ({children}) => {
    const user = useSelector(getUser);
    return user ? children : <Navigate to="/"/>
}
