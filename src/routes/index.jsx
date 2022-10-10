import React from "react"
import {Route, Routes} from "react-router-dom"
import Dash from "../page/Dashboard"
import Login from "../page/Login"
import Register from "../page/Register"

const RoutesMain = () => {
    return(
    <Routes>
        <Route path="/" element={<Dash/>} />
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />
    </Routes>
    )
}

export default RoutesMain