import React from 'react'
import * as C from "./styles";
import HeaderDash from './components/Header';
import Welcome from './components/Welcome';
import List from './components/List';

function Dash() {
  return (
    <C.Container>
      <HeaderDash/>
      <Welcome/>
      <List/>
    </C.Container>
  )
}

export default Dash