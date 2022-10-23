import React from 'react'
import { IUserData } from '../../../../context/AuthContext';

import * as C from "./styles";

function Welcome() {
   
  let userDataBefore: any = localStorage.getItem("userData");
  let userData: IUserData = JSON.parse(userDataBefore)

  return (
    <C.Container>
    <C.Div>
        <C.Title>Olá, {userData.name}</C.Title>
        <C.Text className="headlineBold">{userData.course_module}</C.Text>
    </C.Div>
    </C.Container>
  )
}

export default Welcome