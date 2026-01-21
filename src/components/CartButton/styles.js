import styled from "styled-components";

// Botão do carrinho - responsivo
export const ContainerButton = styled.button`
    background: ${props => props.theme.purple};
    border: 0;
    width: 100%;
    height: 52px;
    border-radius: 5px;
    font-size: 30px;
    color: #fff;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s;

    /* Reduz tamanho em tablets */
    @media (max-width: 768px) {
        height: 48px;
        font-size: 24px;
    }

    /* Reduz mais em mobile */
    @media (max-width: 480px) {
        height: 44px;
        font-size: 20px;
    }

    /* Efeito ao passar o mouse */
    &:hover {
        background-color: ${props => props.theme.secondDarkPurple};
        transform: scale(1.02);
    }
    
    /* Desativa transform em mobile */
    @media (max-width: 480px) {
        &:hover {
            transform: none;
        }
    }

    /* Estado ativo/pressionado */
    &:active {
        transform: scale(0.98);
    }

    /* Melhor acessibilidade com focus */
    &:focus {
        outline: 2px solid #fff;
        outline-offset: 2px;
    }
`;