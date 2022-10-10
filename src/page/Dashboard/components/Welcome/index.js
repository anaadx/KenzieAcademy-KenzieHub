import React from 'react'

import * as C from "./styles";

function Welcome() {
   
  let userDataBefore = localStorage.getItem("userData");
  let userData = JSON.parse(userDataBefore);

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