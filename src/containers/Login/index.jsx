import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { toast } from "react-toastify"

import Logo  from "../../assets/logo-login.png"
import { Button } from "../../components/Button"
import api from "../../services/api.js";


import {  
  Container, LeftContainer, RightContainer, Title, Form, InputContainer, Link 
      } 
  from "./styles"

export function Login() {

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

    const res = await toast.promise(
      api.post("/sessions", {
      email: data.email,
      password: data.password,
      }), 
      {
        pending: 'Verificando seus dados...', 
        success: 'Login realizado com sucesso!', 
        error: 'Erro ao realizar o login, verifique seus dados e tente novamente.'
      }
    );
    console.log(res);
   
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
          <Link>
            <p>Não possui conta? 
              <a href=""> Clique aqui.</a>
            </p>
          </Link>
        </Form>
      </RightContainer>
    </Container>
  )
}