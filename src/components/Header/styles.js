import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Container principal do Header - fixado no topo da página
export const Container = styled.div`
    background-color: ${props => props.theme.mainBlack};
    position: fixed;
    width: 100%;
    height: 72px;
    padding: 0 20px;
    z-index: 999;
    
    /* Ajusta padding para telas menores */
    @media (max-width: 768px) {
        height: 60px;
        padding: 0 15px;
    }
    
    /* Reduz ainda mais em dispositivos móveis */
    @media (max-width: 480px) {
        height: 56px;
        padding: 0 10px;
    }
`;

// Content - centraliza o conteúdo do header com espaçamento responsivo
export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    
    /* Em tablets, reduz max-width para melhor aproveitamento */
    @media (max-width: 1024px) {
        max-width: 100%;
    }
`;

// Navegação - menu horizontal responsivo
export const Navigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 72px;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        
        /* Reduz gap em telas menores */
        @media (max-width: 768px) {
            gap: 12px;
        }
        
        /* Em mobile, oculta o menu (pode ser substituído por menu hambúrguer) */
        @media (max-width: 480px) {
            gap: 8px;
        }
    }

    hr {
        height: 24px;
        border: 1px solid ${props => props.theme.darkGray};
        
        /* Oculta separador em telas pequenas */
        @media (max-width: 480px) {
            display: none;
        }
    }
    
    @media (max-width: 768px) {
        height: 60px;
    }
    
    @media (max-width: 480px) {
        height: 56px;
    }
`;

// Links do header - estilo responsivo com transições
export const HeaderLink = styled(Link)`
    color: ${ props => props.$isActive 
        ? props.theme.purple 
        : props.theme.white};
    border-bottom: ${ props => 
        props.$isActive ? `1px solid ${props.theme.purple}` : 'none'};
    font-size: 14px;
    transition: color 200ms;

    &:hover {
        color: ${(props) => props.theme.purple};
    }
    
    /* Reduz tamanho em tablets */
    @media (max-width: 768px) {
        font-size: 12px;
    }
    
    /* Oculta links em mobile (implementar menu hambúrguer) */
    @media (max-width: 480px) {
        font-size: 11px;
    }
`;

// Opções do header - alinha ícones e botões
export const Options = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 48px;
    
    /* Reduz espaçamento em tablets */
    @media (max-width: 1024px) {
        gap: 32px;
    }
    
    @media (max-width: 768px) {
        gap: 16px;
    }
    
    /* Minimiza gap em mobile */
    @media (max-width: 480px) {
        gap: 12px;
    }
`;

// Perfil - informações do usuário
export const Profile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    font-size: 14px;

    p {
        color: #fff;
        line-height: 90%;
        font-weight: 300;

        span {
            font-weight: 700;
            color: #9758a6;
        }
    }
    
    /* Oculta texto do perfil em tablets e mobile */
    @media (max-width: 768px) {
        gap: 8px;
        
        p {
            font-size: 12px;
        }
    }
    
    /* Esconde o perfil completamente em mobile pequeno */
    @media (max-width: 480px) {
        flex-direction: column;
        font-size: 12px;
        gap: 0;
        
        p {
            display: none;
        }
    }
`;

// Container para links com ícones
export const LinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
    
    /* Reduz gap em telas pequenas */
    @media (max-width: 480px) {
        gap: 0;
        min-height: 0;
    }
`;

// Botão de logout
export const Logout = styled.button`
    color: #ff3205;
    font-weight: 700;
    background-color: transparent;
    border: none;
    transition: opacity 200ms;
    
    /* Melhora hover em dispositivos */
    &:hover {
        opacity: 0.8;
    }
    
    /* Reduz tamanho em mobile */
    @media (max-width: 480px) {
        font-size: 12px;
    }
`;

// Badge/Contador no ícone do carrinho
export const CartBadge = styled.span`
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: ${props => props.theme.red};
    color: ${props => props.theme.white};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: bold;
    border: 2px solid ${props => props.theme.mainBlack};
    animation: slideIn 0.3s ease-in-out;

    @keyframes slideIn {
        from {
            transform: scale(0);
        }
        to {
            transform: scale(1);
        }
    }

    /* Responsivo */
    @media (max-width: 768px) {
        width: 18px;
        height: 18px;
        font-size: 10px;
        top: -6px;
        right: -6px;
    }

    @media (max-width: 480px) {
        width: 16px;
        height: 16px;
        font-size: 9px;
        top: -5px;
        right: -5px;
    }
`;
