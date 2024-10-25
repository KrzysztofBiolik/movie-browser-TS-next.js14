"use client"
import { IconContainer, LogoText, NavSection, StyledHeader, StyledLink, StyledNavLink, VideoIcon } from "./styled";

export function Navigation() {
    return (
        <StyledHeader>
            <StyledLink href="/">
                <IconContainer>
                    <VideoIcon />
                    <LogoText>Movies Browser</LogoText>
                </IconContainer>
            </StyledLink>
            <nav>
                <NavSection>
                    <li>
                        <StyledNavLink href="/movies"> Movies</StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink href="/people"> People</StyledNavLink>
                    </li>
                </NavSection>
            </nav>
        </StyledHeader>
    )
}