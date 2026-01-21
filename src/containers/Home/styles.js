import styled from "styled-components";
import BannerHome from '../../assets/banner-home.svg';
import BackgroundCarrossel from '../../assets/bg-form.png';

// Banner principal da página Home - responsivo com imagem de fundo
export const Banner = styled.div`
    background: url('${BannerHome}');
    background-size: cover;
    background-position: center;
    height: 480px;
    
    /* Reduz altura do banner em tablets */
    @media (max-width: 1024px) {
        height: 350px;
    }
    
    /* Reduz mais em mobile */
    @media (max-width: 768px) {
        height: 280px;
    }
    
    /* Dispositivos muito pequenos */
    @media (max-width: 480px) {
        height: 250px;
    }

    h1 {
        font-family: 'Road Rage', sans-serif;
        font-size: 80px;
        color: ${props => props.theme.darkWhite};
        position: absolute;
        right: 20%;
        top: 10%;
        
        /* Reduz tamanho em tablets */
        @media (max-width: 1024px) {
            font-size: 56px;
            right: 15%;
        }
        
        /* Tamanho reduzido para telas médias */
        @media (max-width: 768px) {
            font-size: 40px;
            right: 10%;
            top: 15%;
        }
        
        /* Dispositivos móveis - ajusta posição e tamanho */
        @media (max-width: 480px) {
            font-size: 28px;
            right: 5%;
            top: 20%;
            text-align: center;
        }
    }
`;

// Container de fundo com gradiente - ajustado para responsividade
export const Container = styled.section`
    background: linear-gradient(
        rgba(255, 255, 255, 0.6),
        rgba(255, 255, 255, 0.6)
    ), url('${BackgroundCarrossel}');
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    
    /* Ativa background-attachment local em dispositivos móveis para melhor performance */
    @media (max-width: 768px) {
        background-attachment: scroll;
    }
    
    /* Ajusta padding para diferentes tamanhos de tela */
    @media (max-width: 768px) {
        padding: 20px;
    }
    
    @media (max-width: 480px) {
        padding: 15px;
    }
`;

