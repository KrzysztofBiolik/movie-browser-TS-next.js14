import styled from "styled-components";

export const Wrapper = styled.div`
    background: ${({ theme }) => theme.colors.black};
`;

export const Image = styled.div<{ url?: string | null }>`
    background-image: url(${({ url }) => url});
    height: 770px;
    background-size: cover;
    background-position: center;
    margin-bottom: 64px;

    @media(max-width: ${({ theme }) => theme.breakpoints.laptopMax}px) {
        height: 55vw;
        margin-bottom: 56px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileHorizontalMax}px) {
        margin-bottom: 8px;
    }
`;

export const Vignette = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;
    flex-wrap: wrap;
    background: 
    linear-gradient(0deg, ${({ theme }) => theme.colors.black}, transparent 20%, transparent 80%, ${({ theme }) => theme.colors.black}),
    linear-gradient(90deg, ${({ theme }) => theme.colors.black}, transparent 20%, transparent 80%, ${({ theme }) => theme.colors.black});
`;

export const Title = styled.div`
    font-size: 56px;
    color:${({ theme }) => theme.colors.white};
    font-weight:500;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
        font-size: 48px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileHorizontalMax}px) {
        font-size: 24px;
    }
`;