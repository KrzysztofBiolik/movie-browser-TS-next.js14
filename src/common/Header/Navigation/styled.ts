import Link from "next/link";
import styled from "styled-components";
import VideoIconSVG from "../../../icons/Video.svg"

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
	gap: 80px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletLarge}px) {
        width: 100%;
	    gap: 15px;
    };
`;

export const NavSection = styled.ul`
    display: flex;
    gap: 16px;
    justify-content: center;
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
`;

export const StyledNavLink = styled(Link)`
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    text-decoration: none;
    padding: 13px 24px;
    border-radius: 30px;
    border: 1px solid white;
    color: white;
    background: black;
    transition: background-color 0.5s, color 0.5s;
    `;

export const StyledLink = styled(Link)`
    cursor: pointer;
    text-decoration: none;
    color: inherit;
`;

export const VideoIcon = styled(VideoIconSVG)`
    width: 40px;
    height: 40px;
`;

export const LogoText = styled.p`
    font-weight: 500;
    font-size: 24px;
    margin: 0;
    color: ${({ theme }) => theme.colors.white};

@media(max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) { 
    font-size: 18px;
}

@media(max-width: ${({ theme }) => theme.breakpoints.mobileHorizontalMax}px) { 
    font-size: 13px;
}
`;

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    gap:12px;
`;
