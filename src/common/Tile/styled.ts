import styled, { css } from "styled-components";

export const Wrapper = styled.article<{ small?: boolean, center?: boolean, columsOnMobile?: boolean }>`
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

    ${({ small }) => !small && css`
    align-items: start;
    margin-top: 56px;

        @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
        grid-template-columns: 260px 1fr;
        grid-template-areas: 
        "picture meta"
        "description description";
        grid-gap: 0 24px;
        padding: 24px;
        }

        @media(max-width: ${({ theme }) => theme.breakpoints.mobileHorizontalMax}px) {
        grid-template-columns: 114px 1fr;
        grid-gap: 8px 16px;
        padding: 16px;
        }
    `}

    ${({ small }) => small && css`
    grid-template-areas:
    "picture"
    "meta";
    grid-template-columns: 1fr;
    padding: 16px;
    grid-gap: 16px;

        @media(max-width: ${({ theme }) => theme.breakpoints.mobileVerticalMax}px) {
        padding: 8px;
        }
    `}

    ${({columsOnMobile}) => columsOnMobile && css`
        @media(max-width: ${({theme}) => theme.breakpoints.mobileHorizontalMax}px) {
            grid-template-columns: 114px 1fr;
            grid-template-areas: "picture meta";
            grid-template-rows: auto;
            padding: 16px;
        }
    
    `}

    ${({ center }) => center && css`
        text-align: center;
    `}
`;

export const ContentWrapper = styled.div<{ stretchVertically?: boolean }>`
    display:grid;
    grid-template-columns: 1fr;
    align-content:start;

    ${({stretchVertically}) => stretchVertically && css`
    align-content: stretch;

        @media(max-width: ${({theme}) => theme.breakpoints.mobileHorizontalMax}px) {
            align-content: start;
        }
    `}
`;

export const Image = styled.div<{ url?: string | null, noImage?: boolean }>`
    padding-top: calc(100% * 632 / 421);
    background: url(${({ url }) => url});
    background-size: cover;
    background-position: center;
    border-radius: 5px;

    ${({noImage}) => noImage && css`
        background-color: ${({theme}) => theme.colors.silver};
        background-repeat: no-repeat;
    `}
`;

export const Title = styled.header<{ small?: boolean }>`
    font-weight: 600;
    font-size: 36px;
    margin-top: 6px;

    ${({ small }) => small && css`
        font-weight: 500;
        font-size:22px;
        margin-top:unset;
    `}
`;

export const SubTitle = styled.p<{ small?: boolean }>`
    margin-top: 10px;
    margin-bottom:0;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.waterloo};
`;