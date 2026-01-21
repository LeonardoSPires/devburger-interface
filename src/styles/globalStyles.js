import { createGlobalStyle } from "styled-components";
import 'react-toastify/dist/ReactToastify.css';

// Estilos globais com suporte responsivo
// Estes estilos são aplicados a todo o aplicativo
const globalStyle = createGlobalStyle`
  /* Reset e configuração base para todos os elementos */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
  }

  /* Estilos do body - ajustados para responsividade */
  body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
    overflow-y: scroll;
    
    /* Define tamanho de fonte base para escalabilidade */
    font-size: 16px;
    
    /* Para tablets e dispositivos menores */
    @media (max-width: 768px) {
      font-size: 14px;
    }
    
    /* Para dispositivos móveis pequenos */
    @media (max-width: 480px) {
      font-size: 13px;
    }
  }

  /* Elementos interativos - botões e links */
  button, a {
    cursor: pointer;
    
    /* Melhora a acessibilidade em dispositivos touch */
    @media (max-width: 768px) {
      min-height: 44px;
    }
    @media (max-width: 480px) {
      min-height: 0;
    }
  }

  /* Ajustes para melhorar layout em telas pequenas */
  @media (max-width: 768px) {
    html, body {
      width: 100%;
      overflow-x: hidden;
    }
  }
`;

export default globalStyle;
