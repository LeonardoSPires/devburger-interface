import styled from 'styled-components';

// Botão padrão responsivo
export const ContainerButton = styled.button`
    width: 100%;
    height: 52px;
    border: 0;
    border-radius: 5px;
    background-color: ${props => props.theme.purple};
    font-family: "Road Rage", sans-serif;
    font-size: 30px;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s;
    font-weight: bold;

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

    /* Efeito ao hover - anima o botão */
    &:hover {
        background-color: ${props => props.theme.secondDarkPurple};
        transform: scale(1.02);
        background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='6' ry='6' stroke='white' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    }

    /* Desativa transform em mobile para melhor performance */
    @media (max-width: 480px) {
        &:hover {
            transform: none;
        }
    }

    /* Estado ativo/pressionado */
    &:active {
        transform: scale(0.98);
    }
`;
