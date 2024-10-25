import styled from "styled-components";

export const Background = styled.div`
    background: black;
    
`;

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1368px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 23px;
    margin: 0 auto;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) { 
        flex-direction: column;
        padding: 16px;
    }
`;

