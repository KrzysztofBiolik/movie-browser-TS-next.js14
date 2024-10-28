import styled from "styled-components";

export const Wrapper = styled.ul`
    display:flex;
    flex-wrap:wrap;
    gap: 8px ;
    list-style: none;
    padding:0;
    margin-top:8px;

    @media(max-width: ${({theme}) => theme.breakpoints.mobileHorizontalMax}px) {
        margin-bottom: 0;
        gap:4px;
    }
`;

export const Item = styled.li`
    padding:8px 16px;
    font-size: 14px;
    background: ${({theme}) => theme.colors.mystic};
    border-radius: 5px;

    @media(max-width: ${({theme}) => theme.breakpoints.tabletVerticalMax}px) {
        padding: 4px 8px;
        font-size: 12px;
    }


`;