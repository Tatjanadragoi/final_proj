import React from "react";
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({children}) => {
    return Math.random () > 0.5 ? children : <Navigate to = '/'/>

}