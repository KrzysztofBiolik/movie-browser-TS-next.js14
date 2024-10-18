import Link from "next/link";
import styled from "styled-components";

export const TileList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(205px, 1fr));
    grid-gap: 16px;
    margin-top:32px;


    @media(max-width: ${({ theme }) => theme.breakpoints.mobileVerticalMax}px) {
        grid-template-columns: repeat(2, 1fr);
        margin-top:12px;
    }
`;



export const TileListLink = styled(Link)`
    display:grid;
    align-items: stretch;
    transition: 0.3s;


&:hover{
    transform: scale(1.03);
}
`; 