import React, { useState } from "react";
import Card from "../Card";
import Modal from "../Modal";
import * as C from "./styles";

function List() {
  const [isModal, setIsModal] = useState(false);

  function handleModal() {
    setIsModal(!isModal);
  }

  return isModal ? (
    <>
      <Modal handleModal={handleModal} />
    </>
  ) : (
    <>
      <C.ContainerText>
        <C.Title>Tecnologias</C.Title>
        <C.Button
          onClick={() => {
            handleModal();
          }}
        >
          +
        </C.Button>
      </C.ContainerText>
      <C.Container>
        <Card />
        <Card />
        <Card />
        <Card />
      </C.Container>
    </>
  );
}

export default List;
