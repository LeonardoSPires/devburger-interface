import styled from "styled-components";

// Tabela base - responsiva e com scroll horizontal em dispositivos pequenos
export const Root = styled.table`
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
    border-radius: 20px;
    overflow: hidden;
    
    /* Em mobile, a tabela fica dentro de um container com scroll */
    @media (max-width: 768px) {
        font-size: 14px;
        border-radius: 12px;
    }
    
    @media (max-width: 480px) {
        font-size: 12px;
        border-radius: 8px;
    }
`;

// Header da tabela
export const Header = styled.thead`
    /* Header fixo em telas grandes */
    @media (max-width: 768px) {
        /* Reduz tamanho do header em tablets */
    }
`;

// Linhas da tabela
export const Tr = styled.tr`
    transition: background-color 0.2s;
    
    /* Efeito hover mais suave em mobile */
    @media (max-width: 480px) {
        &:hover {
            background-color: #f9f9f9;
        }
    }
`;

// Headers das colunas
export const Th = styled.th`
    padding: 16px;
    text-align: left;
    background-color: #484848;
    color: #fff;
    border-bottom: 1px solid #cdcdcd;
    font-weight: 600;
    white-space: nowrap;
    
    /* Reduz padding em tablets */
    @media (max-width: 768px) {
        padding: 12px;
        font-size: 13px;
    }
    
    /* Reduz ainda mais em mobile */
    @media (max-width: 480px) {
        padding: 10px 8px;
        font-size: 11px;
    }
    
    /* Cantos arredondados no header */
    &:first-child {
        border-top-left-radius: 20px;
        padding-left: 20px;
    }
    &:last-child {
        border-top-right-radius: 20px;
        padding-right: 20px;
    }
    
    /* Ajusta cantos em telas menores */
    @media (max-width: 768px) {
        &:first-child {
            border-top-left-radius: 12px;
            padding-left: 12px;
        }
        &:last-child {
            border-top-right-radius: 12px;
            padding-right: 12px;
        }
    }
`;

// Células de dados
export const Td = styled.td`
    padding: 16px;
    color: #484848;
    font-weight: 500;
    line-height: 115%;
    border-bottom: 1px solid #e0e0e0;
    
    /* Reduz padding em tablets */
    @media (max-width: 768px) {
        padding: 12px;
        font-size: 13px;
    }
    
    /* Reduz ainda mais em mobile */
    @media (max-width: 480px) {
        padding: 10px 8px;
        font-size: 12px;
        word-break: break-word;
    }
`;

// Body da tabela
export const Body = styled.tbody`
    /* Garante que os dados sejam visíveis em todas as telas */
    tr:last-child td {
        border-bottom: none;
    }
    
    /* Preserva alinhamento em mobile */
    @media (max-width: 480px) {
        tr:last-child {
            td {
                border-bottom: none;
            }
        }
    }
`;