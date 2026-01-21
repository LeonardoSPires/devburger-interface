import styled from "styled-components";

import Texture from "../../assets/texture.svg";
import Background from "../../assets/bg-form.png";

// Container principal da página do carrinho - responsivo
export const Container = styled.div`
    width: 100%;
    background: linear-gradient(
         rgba(255, 255, 255, 0.8), 
         rgba(255, 255, 255, 0.8)
         ), 
    url('${Background}');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    min-height: 100vh;
    
    /* Ativa scroll do background em mobile para melhor performance */
    @media (max-width: 768px) {
        background-attachment: scroll;
        background-size: cover;
    }
`;

// Banner superior da página do carrinho
export const Banner = styled.div`
    background: url('${Texture}');
    background-color: ${props => props.theme.mainBlack};
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding-top: 70px;
    height: 230px;
    
    /* Reduz padding e altura em tablets */
    @media (max-width: 768px) {
        padding-top: 60px;
        height: 180px;
    }
    
    /* Reduz ainda mais em mobile */
    @media (max-width: 480px) {
        padding-top: 50px;
        height: 150px;
    }

    img {
        height: 130px;
        
        /* Reduz tamanho em tablets */
        @media (max-width: 768px) {
            height: 100px;
        }
        
        /* Reduz mais em mobile */
        @media (max-width: 480px) {
            height: 80px;
        }
    }
`;

// Título principal da página
export const Title = styled.h1`
  font-size: 32px;
  font-weight: 800;
  padding-bottom: 12px;
  color: ${props => props.theme.green};
  text-align: center;
  position: relative;
  
  /* Reduz tamanho em tablets */
  @media (max-width: 768px) {
      font-size: 26px;
      padding-bottom: 10px;
  }
  
  /* Reduz mais em mobile */
  @media (max-width: 480px) {
      font-size: 22px;
      padding-bottom: 8px;
  }

  /* Linha decorativa sob o título */
  &::after {
    content: '';
    position: absolute;
    left: calc(50% - 28px);
    bottom: 0;
    width: 56px;
    height: 4px;
    background: ${props => props.theme.green};
    
    /* Ajusta largura em tablets */
    @media (max-width: 768px) {
        left: calc(50% - 22px);
        width: 44px;
        height: 3px;
    }
    
    /* Ajusta em mobile */
    @media (max-width: 480px) {
        left: calc(50% - 18px);
        width: 36px;
        height: 2px;
    }
  }
`;

// Content - layout grid responsivo para carrinho e resumo
export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 30%;
  gap: 40px;
  width: 100%;
  max-width: 1280px;
  padding: 40px;
  margin: 0 auto;
  
  /* Layout em coluna única em tablets */
  @media (max-width: 1024px) {
      grid-template-columns: 1fr 35%;
      gap: 30px;
      padding: 30px;
  }
  
  /* Layout em coluna única em mobile */
  @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 24px;
      padding: 20px;
  }
  
  /* Reduz padding em dispositivos pequenos */
  @media (max-width: 480px) {
      gap: 16px;
      padding: 15px;
  }
`;
