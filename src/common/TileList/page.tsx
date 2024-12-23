import Link from "next/link";
import styled, { css } from "styled-components";

export const TileList = styled.div<{ lessitems?: boolean }, { showJob?: boolean }>`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(205px, 1fr));
    grid-gap: 16px;
    margin-top:0;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileVerticalMax}px) {
        grid-template-columns: repeat(2, 1fr);
        margin-top:12px;
    }

        ${({ lessitems }) => lessitems && css`
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

            @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
                grid-template-columns: repeat(2, 1fr);
            }

            @media(max-width: ${({ theme }) => theme.breakpoints.mobileVerticalMax}px) {
                grid-template-columns: 1fr;
            }
        `}
`;

export const TileListLink = styled(Link)`
    display: grid;
    text-decoration: none;
    align-items: stretch;
    transition: 0.3s;
    color: ${({ theme }) => theme.colors.woodsmoke};


&:hover{
    transform: scale(1.03);
}
`; 