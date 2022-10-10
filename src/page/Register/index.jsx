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

function Register() {
  const navegate = useNavigate();

  function backToLogin(event) {
    event.preventDefault();
    navegate("/login");
  }

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "Deve contar no mínimo 8 caracteres")
      .matches(/[0-9]/, "Deve conter ao menos um número")
      .matches(/[a-z]/, "Deve conter ao menos uma letra minúscula")
      .matches(/[A-Z]/, "Deve conter ao menos uma letra maiúscula")
      .matches(/[^\w]/, "Deve conter ao meno sum caractere especial"),
    confirmPassword: yup
      .string()
      .required("Confirme sua senha")
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
    contact: yup.string().required("Contato obrigatório"),
    bio: yup.string().required("Digite sua biografia"),
    course_module: yup.string().required("Selecione o seu módulo"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function onSubmitRegister(data) {
    console.log(data);
    api
      .post(`/users`, data)
      .then((response) => {
        console.log(response);
        toast.success("Registrado com sucesso!");
        navegate("/login");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Requisição negada");
      });
  }

  return (
    <C.Container>
      <Header.Div>
        <Header.TitleMain>Kenzie Hub</Header.TitleMain>
        <Header.ButtonSecondary type="button" onClick={backToLogin}>
          Sair
        </Header.ButtonSecondary>
      </Header.Div>
      <Form.Container onSubmit={handleSubmit(onSubmitRegister)}>
        <Form.Title1Form className="title1">Crie sua conta</Form.Title1Form>
        <Form.Text1Form className="headlineBold">
          Rápido e grátis. Vamos nessa!
        </Form.Text1Form>
        <Form.Label htmlFor="name">Nome</Form.Label>
        <Form.Input
          id="name"
          placeholder="digite aqui seu nome"
          {...register("name")}
        />
        {errors.name ? (
          <Form.TextAlert>{errors.name.message}</Form.TextAlert>
        ) : (
          ""
        )}
        <Form.Label htmlFor="email">Email</Form.Label>
        <Form.Input
          id="email"
          placeholder="digite aqui seu email"
          {...register("email")}
        />
        {errors.email ? (
          <Form.TextAlert>{errors.email.message}</Form.TextAlert>
        ) : (
          ""
        )}
        <Form.Label htmlFor="password">Senha</Form.Label>
        <Form.Input
          id="password"
          placeholder="digite aqui sua senha"
          {...register("password")}
        />
        {errors.password ? (
          <Form.TextAlert>{errors.password.message}</Form.TextAlert>
        ) : (
          ""
        )}
        <Form.Label htmlFor="confirmPassword">Confirmar senha</Form.Label>
        <Form.Input
          id="confirmPassword"
          placeholder="confirmar a senha"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword ? (
          <Form.TextAlert>{errors.confirmPassword.message}</Form.TextAlert>
        ) : (
          ""
        )}
        <Form.Label htmlFor="bio">Bio</Form.Label>
        <Form.Input
          id="bio"
          placeholder="digite aqui sua bio"
          {...register("bio")}
        />
        {errors.bio ? (
          <Form.TextAlert>{errors.bio.message}</Form.TextAlert>
        ) : (
          ""
        )}
        <Form.Label htmlFor="contact">Contato</Form.Label>
        <Form.Input
          id="contact"
          placeholder="digite aqui seu contato"
          {...register("contact")}
        />
        {errors.contact ? (
          <Form.TextAlert>{errors.contact.message}</Form.TextAlert>
        ) : (
          ""
        )}
        <Form.Label htmlFor="course_module">Selecionar o módulo</Form.Label>
        <Form.Select id="course_module" {...register("course_module")}>
          <option>Primeiro módulo (Introdução ao Frontend)</option>
          <option>Segundo módulo (Frontend Avançado)</option>
          <option>Terceiro módulo (Introdução ao Backend)</option>
          <option>Quarto módulo (Backend Avançado)</option>
        </Form.Select>
        {errors.course_module ? (
          <Form.TextAlert>{errors.course_module.message}</Form.TextAlert>
        ) : (
          ""
        )}
        <Form.MainButton mode="one">Cadastrar</Form.MainButton>
      </Form.Container>
    </C.Container>
  );
}

export default Register;
