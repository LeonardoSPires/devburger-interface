import { yupResolver } from "@hookform/resolvers/yup";
import { set, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import Logo  from "../../assets/logo-login.png";
import { Button } from "../../components/Button";

import { api } from "../../services/api";


import {  
  Container, LeftContainer, RightContainer, Title, Form, InputContainer, CliqueAqui , Link
      } 
  from "./styles"

  import { toast } from "react-toastify"


export function Register() {
  const navigate = useNavigate();

  const schema = yup
  .object({
    name: yup
      .string()
      .required('Nome obrigatório'),
    email: yup
      .string()
      .email('Digite um email válido')
      .required('Email obrigatório'),
    password: yup
      .string()
      .min(6, 'A senha deve ter pelo menos 6 caracteres')
      .required('Senha obrigatória'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
      .required('Confirmação de senha obrigatória'),
      admin: yup
      .boolean()
      .default(false)
  })
  .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const { status } = await api.post(
      "/users", 
      {
      name: data.name,
      email: data.email,
      password: data.password,
      admin: false,
      }, 
      {
        validateStatus: () => true,
      },
    );

      if (status === 201 || status === 200) {
        setTimeout(() => {
          navigate("/login");
        }, 2000);
        toast.success("Usuário cadastrado com sucesso!");
      } else if (status === 409) {
        toast.error("Email já cadastrado!");
      } else {
        throw new Error(); 
      }
    } catch (error) {
      toast.error("Falha no sistema! Tente novamente.");
    }
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-deburger" />
      </LeftContainer>
      <RightContainer>
        <Title>
         Criar Conta.
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Email</label>
            <input type="email" {...register("email")} />
            <p>{errors.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Nome</label>
            <input type="text" {...register("name")} />
            <p>{errors.name?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type="password" {...register("password")} />
            <p>{errors.password?.message}</p>
          </InputContainer>
          <InputContainer>
            <label>Confirmar Senha</label>
            <input type="password" {...register("confirmPassword")} />
            <p>{errors.confirmPassword?.message}</p>
          </InputContainer>
          <Button type="submit">Criar Conta</Button>
          <CliqueAqui>
            <p>Já possui conta? 
              <Link to="/login"> Clique aqui.</Link>
            </p>
          </CliqueAqui>
        </Form>
      </RightContainer>
    </Container>
  )
}