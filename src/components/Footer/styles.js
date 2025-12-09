import styled from "styled-components";

export const Container = styled.div`
    height: 50px;
    width: 100vw;
    background-color: ${props => props.theme.darkPurple};
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        color: ${props => props.theme.white};
        font-size: 14px;
        font-weight: lighter;
    }
`;  