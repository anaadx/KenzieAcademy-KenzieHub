import React from "react";
import { useNavigate } from "react-router-dom";
import * as Header from "../../../styles/header";

function HeaderDash() {
  const navegate = useNavigate();

  function backToLogin(event) {
    event.preventDefault();
    window.localStorage.removeItem("userToken")
    window.localStorage.removeItem("userId")
    window.localStorage.removeItem("userData")
    navegate("/login");
  }

  return (
    <Header.HeaderContainer>
      <Header.DivHeader>
        <Header.TitleMainHeader>KenzieHub</Header.TitleMainHeader>
        <Header.ButtonSecondary type="button" onClick={backToLogin}>
          Sair
        </Header.ButtonSecondary>
      </Header.DivHeader>
    </Header.HeaderContainer>
  );
}

export default HeaderDash;
