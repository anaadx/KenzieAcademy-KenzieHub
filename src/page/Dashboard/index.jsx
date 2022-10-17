import * as C from "./styles";
import HeaderDash from './components/Header';
import Welcome from './components/Welcome';
import List from './components/List';
import TechProvider from "../../context/TechContext";

function Dash() {
  
  return (
      <C.Container>
        <HeaderDash/>
        <Welcome/>
        <TechProvider>
        <List/>
        </TechProvider>
      </C.Container>
  )
}

export default Dash