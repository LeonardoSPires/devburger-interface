import styled from "styled-components";
import { Link as ReactLink } from "react-router-dom";

import BgLogo from '../../assets/bg-logo.jpg';
import BgForm from '../../assets/bg-form.png';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #1E1E1E;
`;

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

  height: 100%;
  width: 100%;
  max-width: 50%;

  img {
    width: 65%;
    user-select: none;
    cursor: default;
    outline: none;           // remove contorno de foco
    caret-color: transparent; // esconde o cursor de texto
  }
  img:focus {
    outline: none;
    caret-color: transparent;
  }
`;
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
`;

export const Title = styled.h2`
  font-family: "Road Rage", sans-serif;
  font-size: 40px;
  color: #9758a6;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  padding: 20px;
  max-width: 400px;
  color: #fff;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
    label {
      font-size: 16px;
      font-weight: 600;
      color: #fff;
    }
    input {
      padding: 0px 16px;
      border: none;
      height: 52px;
      border-radius: 5px;
      background-color: #fff;
    }

    p {
      font-size: 14px;
      line-height: 80%;
      color: #ff4d4d;
      height: 10px;
      font-weight: 600;
      margin-top: 4px;
    }
`;

export const CliqueAqui = styled.div`
  p{
    color: #fff;
    margin-top: 16px;
  }

  a {
    color: #fff;
    text-decoration: underline;
  }
  a:hover {
    color: #9758a6;
  }
`;  

export const Link = styled(ReactLink)`
  text-decoration: none;
  color: #fff;
  `;
