import styled from "styled-components";
import { Link } from "react-router-dom";

// Navegação lateral do admin - Responsiva em diferentes tamanhos de tela
export const Container = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: ${(props) => props.theme.black};
    position: relative;
    transition: width 0.3s ease-in-out;
    overflow: hidden;

    img {
        width: 60%;
        margin: 40px 0;
        transition: all 0.3s ease-in-out;
    }

    /* Tablets e abaixo */
    @media (max-width: 768px) {
        img {
            width: 50%;
            margin: 30px 0;
        }
    }

    /* Mobile pequeno - Menu colapsável tipo cortina */
    @media (max-width: 640px) {
        position: fixed;
        left: 0;
        top: 0;
        width: ${(props) => props.$isExpanded ? '200px' : '50px'};
        z-index: 1000;
        
        img {
            width: ${(props) => props.$isExpanded ? '60%' : '40px'};
            margin: ${(props) => props.$isExpanded ? '20px 0' : '10px 0'};
            opacity: ${(props) => props.$isExpanded ? '1' : '0.8'};
        }
    }
`;

export const ToggleButton = styled.button`
    display: none;
    background: ${(props) => props.theme.purple};
    border: none;
    color: ${(props) => props.theme.white};
    padding: 8px;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 20px;
    transition: all 0.3s ease-in-out;
    position: relative;
    z-index: 10;

    &:hover {
        opacity: 0.8;
        transform: scale(1.05);
    }

    /* Mobile pequeno */
    @media (max-width: 640px) {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 6px;
        
        svg {
            font-size: ${(props) => props.$isExpanded ? '20px' : '16px'};
        }
    }
`;

export const NavLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 20px;
    text-decoration: none;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.$isActive ? props.theme.purple : 'transparent'};
    transition: all 0.3s ease-in-out;
    font-size: 16px;
    min-height: 44px;
    
    &:hover {
        background-color: ${(props) => props.theme.purple};
    }

    /* Tablets */
    @media (max-width: 768px) {
        padding: 10px 16px;
        gap: 10px;
        font-size: 14px;
    }

    /* Mobile pequeno - Modo cortina */
    @media (max-width: 640px) {
        padding: ${(props) => props.$isExpanded ? '12px 16px' : '10px 0'};
        gap: ${(props) => props.$isExpanded ? '10px' : '0'};
        font-size: ${(props) => props.$isExpanded ? '13px' : '12px'};
        justify-content: ${(props) => props.$isExpanded ? 'flex-start' : 'center'};

        svg {
            font-size: ${(props) => props.$isExpanded ? '20px' : '22px'};
            min-width: ${(props) => props.$isExpanded ? '20px' : '22px'};
        }

        span {
            display: ${(props) => props.$isExpanded ? 'inline' : 'none'};
            white-space: nowrap;
            opacity: ${(props) => props.$isExpanded ? '1' : '0'};
        }
    }
`;

export const Footer = styled.footer`
    width: 100%;
    margin-top: auto;

    /* Mobile pequeno */
    @media (max-width: 640px) {
        margin-bottom: 10px;
    }
`;  