import React, { useContext } from 'react'
import * as C from "./styles";
import * as Form from "../../../styles/form";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { TechContext } from '../../../../context/TechContext';

function Modal({handleModal}) {

    const formSchema = yup.object().shape({
        title: yup.string().required("Nome obrigatório"),
        status: yup.string().required("Selecione um status"),
      });
    
      const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(formSchema)
       })

       const {onSubmitTechnology} = useContext(TechContext)
    
  return (
    <C.ContainerModal>
        <C.DivModal>
        <C.DivTitle>
            <C.Title className='title2'>Cadastrar Tecnologia</C.Title>
            <C.ButtonTitle onClick={() => {
            handleModal();
          }}>X</C.ButtonTitle>
        </C.DivTitle>
        <C.DivForm onSubmit={handleSubmit(onSubmitTechnology)}>
        <Form.Label htmlFor="title">Nome</Form.Label>
        <Form.Input id="title" placeholder="digite aqui o nome" {...register("title")}/>
        {errors.title ? (
          <Form.TextAlert>{errors.title.message}</Form.TextAlert>
        ) : (
          ""
        )}
        <Form.Label htmlFor="status">Selecionar Status</Form.Label>
        <Form.Select id="status" placeholder="digite aqui seu status" {...register("status")}>
            <option>Iniciante</option>
            <option>Intermediário</option>
            <option>Avançado</option>
        </Form.Select>
        {errors.status ? (
          <Form.TextAlert>{errors.status.message}</Form.TextAlert>
        ) : (
          ""
        )}
        <Form.MainButton mode="one">Cadastrar tecnologia</Form.MainButton>
        </C.DivForm>
        </C.DivModal>
    </C.ContainerModal>
  )
}

export default Modal