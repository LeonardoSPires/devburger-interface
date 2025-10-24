import { yupResolver } from "@hookform/resolvers/yup"
import { set, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import * as yup from "yup"
import { toast } from "react-toastify"

import Logo  from "../../assets/logo-login.png"
import { Button } from "../../components/Button"
import { api }  from "../../services/api"


import {  
  Container, LeftContainer, RightContainer, Title, Form, InputContainer, CliqueAqui , Link
      } 
  from "./styles"

export function Login() {
  const navigate = useNavigate();

  const schema = yup
  .object({
    email: yup.string().email('Digite um email válido').required('Email obrigatório'),
    password: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('Senha obrigatória'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

  const onSubmit = async (data) => {

    const {
      data: { token },
    } = await toast.promise(
      api.post("/sessions", {
      email: data.email,
      password: data.password,
      }), 
      {
        pending: 'Verificando seus dados...', 
        success: {
          render() {
            setTimeout(() => {
              navigate("/");
            }, 2000);
            return 'Login realizado com sucesso!';
          },
        }, 
        error: 'Erro ao realizar o login, verifique seus dados e tente novamente.'
      }
    );

    localStorage.setItem("token", token);
    };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-deburger" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>Dev Burguer</span>!
          <br />
          Acesse com seu <span>Login e senha</span> .
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Email</label>
            <input type="email" {...register("email")} />
            <p>{errors.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type="password" {...register("password")} />
            <p>{errors.password?.message}</p>
          </InputContainer>
          <Button type="submit">Entrar</Button>
          <CliqueAqui>
            <p>Não possui conta? 
              <Link to="/cadastro"> Clique aqui.</Link>
            </p>
          </CliqueAqui>
        </Form>
      </RightContainer>
    </Container>
  )
}