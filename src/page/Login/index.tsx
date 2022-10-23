import * as Form from "../styles/form";
import * as Header from "../styles/header";
import * as C from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILoginData, useAuthContext } from "../../context/AuthContext";

function Login() {

  const formSchema = yup.object().shape({
    email: yup.string().required("Nome obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginData>({
    resolver: yupResolver(formSchema),
  });

  const {onSubmitLogin} = useAuthContext()

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
         {errors.email ? (
          <Form.TextAlert>{errors.email.message}</Form.TextAlert>
        ) : (
          ""
        )}
        <Form.Label htmlFor="password">Senha</Form.Label>
        <Form.Input 
          type="password"
          id="password"
          placeholder="digite aqui sua senha"
          {...register("password")}
        />
         {errors.password ? (
          <Form.TextAlert>{errors.password.message}</Form.TextAlert>
        ) : (
          ""
        )}
        <Form.MainButton mode="one">Entrar</Form.MainButton>
        <Form.Text1Form className="headlineBold">
          Ainda não possui uma conta?
        </Form.Text1Form>
        <Form.MainButtonLink to={"/register"} mode="one">
          Cadastre-se
        </Form.MainButtonLink>
      </Form.Container>
    </C.Container>
  );
}

export default Login;
