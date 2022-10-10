import React from "react";
import { useNavigate } from "react-router-dom";
import * as Form from "../styles/form";
import * as Header from "../styles/header";
import * as C from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import toast from "react-hot-toast";

function Login() {
  const navegate = useNavigate();

  function goRegister(event) {
    event.preventDefault();
    navegate("/register");
  }

  const formSchema = yup.object().shape({
    email: yup.string().required("Nome obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function onSubmitLogin(data) {
    console.log(data)
        api.post(`/sessions`, data)
        .then((response) => {
          console.log(response)
          toast.success("Login realizado com sucesso")
          window.localStorage.setItem("userData", JSON.stringify(response.data.user));
          window.localStorage.setItem("userId", JSON.stringify(response.data.user.id));
          window.localStorage.setItem("userToken", JSON.stringify(response.data.token));
          navegate("/");
        })
        .catch((error) =>{
          console.log((error))
          toast.error("Você nao pode realizar o login");
        })
  }

  return (
    <C.Container>
      <Header.TitleMain>Kenzie Hub</Header.TitleMain>
      <Form.Container onSubmit={handleSubmit(onSubmitLogin)}>
        <Form.Title1Form className="title1">Login</Form.Title1Form>
        <Form.Label htmlFor="email">Email</Form.Label>
        <Form.Input
          id="email"
          placeholder="digite aqui seu email"
          {...register("email")}
        />
        {errors.email?.message}
        <Form.Label htmlFor="password">Senha</Form.Label>
        <Form.Input
          id="password"
          placeholder="digite aqui sua senha"
          {...register("password")}
        />
        {errors.password?.message}
        <Form.MainButton mode="one">Entrar</Form.MainButton>
        <Form.Text1Form className="headlineBold">
          Ainda não possui uma conta?
        </Form.Text1Form>
        <Form.MainButton onClick={goRegister} mode="one">
          Cadastre-se
        </Form.MainButton>
      </Form.Container>
    </C.Container>
  );
}

export default Login;
