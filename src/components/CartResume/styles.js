import styled from "styled-components";

// Container principal do resumo do carrinho - responsivo
export const Container = styled.div`
    background-color: ${props => props.theme.white};
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
    * {
        color: ${props => props.theme.secondBlack};
    }

    /* Seção superior com informações */
    .container-top {
        display: grid;
        grid-gap: 10px 30%;
        grid-template-areas: 
        'title title'
        'items items-price'
        'delivery-tax delivey-tax-price';
        
        /* Ajusta layout em tablets */
        @media (max-width: 768px) {
            grid-gap: 8px 20%;
            padding: 0;
        }
        
        /* Ajusta layout em mobile */
        @media (max-width: 480px) {
            grid-gap: 8px 15%;
            grid-template-areas: 
            'title title'
            'items items-price'
            'delivery-tax delivey-tax-price';
        }

        /* Título do resumo */
        .title {
            grid-area: title;
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 20px;
            background-color: ${props => props.theme.secondBlack};
            color: ${props => props.theme.white};
            width: 100%;
            padding: 15px;
            text-align: center;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            
            /* Reduz tamanho em tablets */
            @media (max-width: 768px) {
                font-size: 18px;
                padding: 12px;
                margin-bottom: 15px;
                border-radius: 16px;
            }
            
            /* Reduz mais em mobile */
            @media (max-width: 480px) {
                font-size: 16px;
                padding: 10px;
                margin-bottom: 10px;
                border-radius: 12px;
            }
        }

        /* Label de itens */
        .items {
            grid-area: items;
            padding-left: 20px;
            font-size: 16px;
            
            /* Ajusta em tablets */
            @media (max-width: 768px) {
                padding-left: 15px;
                font-size: 14px;
            }
            
            /* Ajusta em mobile */
            @media (max-width: 480px) {
                padding-left: 12px;
                font-size: 13px;
            }
        }

        /* Preço dos itens */
        .items-price {
            grid-area: items-price;
            padding-right: 20px;
            font-size: 16px;
            text-align: right;
            
            /* Ajusta em tablets */
            @media (max-width: 768px) {
                padding-right: 15px;
                font-size: 14px;
            }
            
            /* Ajusta em mobile */
            @media (max-width: 480px) {
                padding-right: 12px;
                font-size: 13px;
            }
        }

        /* Label de taxa de entrega */
        .delivery-tax {
            grid-area: delivery-tax;
            padding-left: 20px;
            font-size: 16px;
            padding-bottom: 20px;
            
            /* Ajusta em tablets */
            @media (max-width: 768px) {
                padding-left: 15px;
                font-size: 14px;
                padding-bottom: 15px;
            }
            
            /* Ajusta em mobile */
            @media (max-width: 480px) {
                padding-left: 12px;
                font-size: 13px;
                padding-bottom: 12px;
            }
        }

        /* Preço da taxa de entrega */
        .delivery-tax-price {
            grid-area: delivery-tax-price;
            padding-right: 20px;
            font-size: 16px;
            text-align: right;
            padding-bottom: 20px;
            
            /* Ajusta em tablets */
            @media (max-width: 768px) {
                padding-right: 15px;
                font-size: 14px;
                padding-bottom: 15px;
            }
            
            /* Ajusta em mobile */
            @media (max-width: 480px) {
                padding-right: 12px;
                font-size: 13px;
                padding-bottom: 12px;
            }
        }
    }

    /* Seção inferior com total */
    .container-bottom {
        display: flex;
        justify-content: space-between;
        font-size: 20px;
        font-weight: bold;
        margin-top: 24px;
        padding: 20px;
        border-top: 2px solid #e0e0e0;
        background-color: #f9f9f9;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;

        /* Reduz tamanho em tablets */
        @media (max-width: 768px) {
            font-size: 18px;
            margin-top: 16px;
            padding: 15px;
        }

        /* Reduz mais em mobile */
        @media (max-width: 480px) {
            font-size: 16px;
            margin-top: 12px;
            padding: 12px;
            border-radius: 12px;
        }

        * {
            font-weight: 700;
        }
    }
`;





