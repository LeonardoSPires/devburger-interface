import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 220px 1fr;

    main {
        display: flex;
        flex-direction: column;
        flex: 1;
        width: 100%;
        height: 100vh;
        background-color: ${props => props.theme.secondWhite};
        overflow-y: auto;
    }

    section {
        margin: 0 auto;
        padding: 40px 20px;
        width: 100%;
        max-width: 1200px;
    }

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
        
        main {
            height: auto;
            min-height: 100vh;
            padding-left: 60px;
        }

        section {
            padding: 20px 15px;
            width: auto;
        }
    }
`