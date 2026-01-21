import styled from "styled-components";
import { Link as ReactLink } from "react-router-dom";

import BgLogo from '../../assets/bg-logo.jpg';
import BgForm from '../../assets/bg-form.png';

// Container principal da página de Registro - flexível e responsivo
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.mainBlack};
  
  /* Em tablets, muda para layout vertical */
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    min-height: 100vh;
  }
`;

// Container esquerdo com logo/imagem
export const LeftContainer = styled.div`
  background: url('${BgLogo}');
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 50%;

  /* Ajusta para mobile */
  @media (max-width: 768px) {
    max-width: 100%;
    height: 250px;
    flex: none;
  }

  img {
    width: 65%;
    user-select: none;
    cursor: default;
    outline: none;
    caret-color: transparent;
    
    /* Ajusta tamanho em tablets */
    @media (max-width: 768px) {
      width: 50%;
      max-height: 150px;
    }
    
    /* Menor em dispositivos pequenos */
    @media (max-width: 480px) {
      width: 40%;
      max-height: 100px;
    }
  }
  
  img:focus {
    outline: none;
    caret-color: transparent;
  }
`;

// Container direito com formulário
export const RightContainer = styled.div`
  background: url('${BgForm}');
  background-size: contain;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 50%;
  padding: 20px;
  overflow-y: auto;
  
  /* Ajusta para mobile */
  @media (max-width: 768px) {
    max-width: 100%;
    height: auto;
    padding: 20px;
    min-height: auto;
  }
`;

// Título da página - responsivo
export const Title = styled.h2`
  font-family: "Road Rage", sans-serif;
  font-size: 40px;
  color: ${props => props.theme.purple};
  margin-bottom: 10px;

  /* Reduz tamanho em tablets */
  @media (max-width: 768px) {
    font-size: 32px;
  }
  
  /* Reduz mais em mobile */
  @media (max-width: 480px) {
    font-size: 26px;
  }
`;

// Formulário responsivo
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  padding: 20px;
  max-width: 400px;
  color: ${props => props.theme.white};
  
  /* Ajusta padding em tablets */
  @media (max-width: 768px) {
    padding: 15px;
    gap: 16px;
    max-width: 100%;
  }
  
  /* Ajusta em mobile */
  @media (max-width: 480px) {
    padding: 12px;
    gap: 14px;
  }
`;

// Container para inputs com label e erro
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  label {
    font-size: 16px;
    font-weight: 600;
    color: ${props => props.theme.white};
    margin-bottom: 8px;
    
    /* Reduz tamanho em mobile */
    @media (max-width: 480px) {
      font-size: 14px;
      margin-bottom: 6px;
    }
  }
  
  input {
    padding: 0px 16px;
    border: none;
    height: 52px;
    border-radius: 5px;
    background-color: ${props => props.theme.white};
    font-size: 16px;
    transition: all 0.3s;
    
    /* Reduz altura em mobile */
    @media (max-width: 480px) {
      height: 48px;
      padding: 0px 12px;
      font-size: 14px;
    }
    
    /* Efeito focus */
    &:focus {
      box-shadow: 0 0 5px rgba(155, 89, 182, 0.5);
    }
  }

  /* Mensagem de erro */
  p {
    font-size: 14px;
    line-height: 80%;
    color: ${props => props.theme.darkRed};
    height: 10px;
    font-weight: 600;
    margin-top: 4px;
    
    /* Reduz tamanho em mobile */
    @media (max-width: 480px) {
      font-size: 12px;
      height: 8px;
    }
  }
`;

// Container para link de login
export const CliqueAqui = styled.div`
  p {
    color: ${props => props.theme.white};
    margin-top: 16px;
    font-size: 14px;
    text-align: center;
    
    /* Reduz tamanho em mobile */
    @media (max-width: 480px) {
      font-size: 12px;
      margin-top: 12px;
    }
  }

  a {
    color: ${props => props.theme.white};
    text-decoration: underline;
    transition: color 0.3s;
  }
  
  a:hover {
    color: ${props => props.theme.purple};
  }
`;

// Link estilizado responsivo
export const Link = styled(ReactLink)`
  text-decoration: none;
  color: ${props => props.theme.white};
  transition: color 0.3s;

  &:hover {
    color: ${props => props.theme.purple};
  }
`;
