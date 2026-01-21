import styled from "styled-components";

// Container do Footer - ajustado para responsividade
export const Container = styled.div`
    height: 50px;
    width: 100vw;
    background-color: ${props => props.theme.darkPurple};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: auto;
    
    /* Ajusta altura em tablets */
    @media (max-width: 768px) {
        height: 45px;
    }
    
    /* Ajusta altura em mobile */
    @media (max-width: 480px) {
        height: 40px;
        padding: 10px 0;
    }

    /* Parágrafo com texto do footer */
    p {
        color: ${props => props.theme.white};
        font-size: 14px;
        font-weight: lighter;
        line-height: 1.4;
        text-align: center;
        padding: 0 10px;
        
        /* Reduz tamanho em tablets */
        @media (max-width: 768px) {
            font-size: 12px;
        }
        
        /* Reduz mais em mobile */
        @media (max-width: 480px) {
            font-size: 11px;
            padding: 0 8px;
        }
    }
`;  