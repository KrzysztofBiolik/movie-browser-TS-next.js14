import Link from "next/link";
import styled from "styled-components";

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