import { createGlobalStyle } from "styled-components";
import 'react-toastify/dist/ReactToastify.css';

const globalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
  }

  button, a {
    cursor: pointer;
  }
`;

export default globalStyle;
