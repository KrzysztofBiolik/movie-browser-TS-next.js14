"use client"
import Link from "next/link";
import { NavSection, StyledNavLink } from "./styled";

export function Navigation() {
    return (
        <NavSection>
            <li>
                <StyledNavLink href="/movies"> Movies</StyledNavLink>
            </li>
            <li>
                <StyledNavLink href="/people"> People</StyledNavLink>
            </li>
        </NavSection>
    )
}