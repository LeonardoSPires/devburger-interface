import styled from "styled-components";

export const ContainerButton = styled.button`
    background: ${props => props.theme.purple};
    border: 0;
    width: 100%;
    height: 52px;
    border-radius: 5px;
    font-size: 30px;
    color: #fff;

    &:hover {
        background-color: ${props => props.theme.secondDarkPurple};
    }
`;