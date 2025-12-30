import styled from "styled-components";

export const Container = styled.div`
`;
export const ProductImage = styled.img`
    height: 80px;
    padding: 12px;
    border-radius: 16px;
`;
export const EditButton = styled.button`
    background-color: ${(props) => props.theme.darkWhite};  
    border: 0;
    height: 32px;
    width: 32px;
    border-radius: 8px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        height: 18px;
        width: 18px;
    }

    &:hover {
        background-color: ${(props) => props.theme.purple};

        svg {
            color: ${(props) => props.theme.white};
        }  
    }
    cursor: pointer;
`;
