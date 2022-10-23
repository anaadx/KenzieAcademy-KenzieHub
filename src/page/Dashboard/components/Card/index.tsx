import * as C from "./styles";
import { BsTrash } from 'react-icons/bs';
import { useTechContext } from '../../../../context/TechContext';

interface ICardProps {
    title: string;
    status: string;
    id: string;
}

interface ITech {
  tech: ICardProps;
}

function Card({tech}: ITech) {

  const {onDeleteTechnology} = useTechContext()

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