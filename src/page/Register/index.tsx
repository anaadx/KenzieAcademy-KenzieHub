import * as Form from "../styles/form";
import * as Header from "../styles/header";
import * as C from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IRegisterData , useAuthContext } from "../../context/AuthContext";

function Register() {

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
      .matches(/[^\w]/, "Deve conter ao menos um caractere especial"),
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
  } = useForm<IRegisterData>({
    resolver: yupResolver(formSchema),
  });

  const {onSubmitRegister} = useAuthContext()

  return (
    <C.Container>
      <Header.Div>
        <Header.TitleMain>Kenzie Hub</Header.TitleMain>
        <Header.ButtonSecondaryLink to={"./login"}>
          Sair
        </Header.ButtonSecondaryLink>
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
