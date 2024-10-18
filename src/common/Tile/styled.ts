import styled from "styled-components";

export const Wrapper = styled.article`
    margin-top: 56px;
    padding: 40px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    background: ${({ theme }) => theme.colors.white};
    display: grid;
    grid-template-columns: 312px 1fr;
    grid-template-areas:
    "picture meta"
    "picture description";
    grid-template-rows: auto 1fr;
    align-content: start;
    align-items: start;
    grid-gap: 0 40px;
    border-radius: 5px;
`;

export const Title = styled.header`
    font-weight: 600;
    font-size: 36px;
    margin-top: 6px;
`;