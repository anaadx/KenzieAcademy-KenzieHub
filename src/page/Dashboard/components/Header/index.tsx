import React from "react";
import * as Header from "../../../styles/header";

function HeaderDash() {

  function backToLogin(): void {
    window.localStorage.removeItem("userToken")
    window.localStorage.removeItem("userId")
    window.localStorage.removeItem("userData")
  }

  return (
    <Header.HeaderContainer>
      <Header.DivHeader>
        <Header.TitleMainHeader>KenzieHub</Header.TitleMainHeader>
        <Header.ButtonSecondaryLink to={"/login"} onClick={() => {backToLogin()}}>
          Sair
        </Header.ButtonSecondaryLink>
      </Header.DivHeader>
    </Header.HeaderContainer>
  );
}

export default HeaderDash;
