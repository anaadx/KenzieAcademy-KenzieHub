import React from "react"
import {Route, Routes} from "react-router-dom"
import Dash from "../page/Dashboard"
import Login from "../page/Login"
import Register from "../page/Register"
import ProtectedRoutes from "./ProtectedRoutes"


const RoutesMain = () => {
    return(
    <Routes>
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />
        <Route element={<ProtectedRoutes/>}> 
        <Route path="dashboard" element={<Dash/>} />
        </Route>
        <Route path="*" element={<Login/>} />
    </Routes>
    )
}

export default RoutesMain