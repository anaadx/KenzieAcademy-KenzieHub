import React from 'react'
import * as C from "./styles";
import * as Form from "../../../styles/form";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';


function Modal({handleModal}) {

    const formSchema = yup.object().shape({
        name: yup.string().required("Nome obrigatório"),
        status: yup.string().required("Selecione um status"),
      });
    
      const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(formSchema)
       })
        
      function onSubmitTechnology(data){
        console.log(data)
      }
    
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
        <Form.Label htmlFor="name">Nome</Form.Label>
        <Form.Input id="name" placeholder="digite aqui o nome" {...register("name")}/>
        {errors.name?.message }
        <Form.Label htmlFor="status">Selecionar Status</Form.Label>
        <Form.Select id="status" placeholder="digite aqui seu status" {...register("status")}>
            <option>Iniciante</option>
            <option>Intermediário</option>
            <option>Avançado</option>
        </Form.Select>
        {errors.select?.message }
        <Form.MainButton mode="one">Entrar</Form.MainButton>
        </C.DivForm>
        </C.DivModal>
    </C.ContainerModal>
  )
}

export default Modal