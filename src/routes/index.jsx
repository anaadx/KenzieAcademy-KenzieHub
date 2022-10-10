import React from "react"
import {Route, Routes} from "react-router-dom"
import Dash from "../page/Dashboard"
import Login from "../page/Login"
import Register from "../page/Register"

const RoutesMain = () => {
    return(
    <Routes>
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />
        <Route path="dashboard" element={<Dash/>} />
        <Route path="*" element={<Login/>} />
    </Routes>
    )
}

export default RoutesMain