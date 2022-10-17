import React, { useContext } from 'react'
import * as C from "./styles";
import { BsTrash } from 'react-icons/bs';
import { TechContext } from '../../../../context/TechContext';

function Card({tech}) {

  const {onDeleteTechnology} = useContext(TechContext)

  return (
    <C.Li>
    <C.TituloCard>{tech.title}</C.TituloCard>
    <C.DivLevel>
        <C.Text>{tech.status}</C.Text>
        <BsTrash className='lixeira' onClick={() => {
          onDeleteTechnology(tech.id)}}/>
    </C.DivLevel>
    </C.Li>
  )
}

export default Card