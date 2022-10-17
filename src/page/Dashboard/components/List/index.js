import React, { useContext, useState } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import Card from "../Card";
import Modal from "../Modal";
import * as C from "./styles";

function List() {
  const [isModal, setIsModal] = useState(false);
  const { user } = useContext(AuthContext)

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
      {user.techs.map((tech) => {
            return (
              <Card  
                key={tech.title}
                tech={tech}
              />
            );
          })}
      </C.Container>
    </>
  );
}

export default List;
