import styled from "styled-components";
import DangerIconSVG from "../../icons/Danger.svg";
import Link from "next/link";

export const StyledError = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
`;
export const StyledDanger = styled(DangerIconSVG)`
    width: 120px;
    height: 120px;
    margin-top: 180px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
        width: 80px;
        height: 80px;
    }
`;

export const Warning = styled.p`
    text-align: center;
    margin: auto;
    font-weight: 600;
    font-size: 36px;
    line-height: 43.2px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileHorizontalMax}px) {
        font-size: 26px;
    }
`;
export const Info = styled.p`
    text-align: center;
    margin: auto;
    font-weight: 500;
    font-size: 22px;
    line-height: 28.6px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileHorizontalMax}px) {
        font-size: 16px;
    }
`;
export const Button = styled(Link)`
    padding: 16px 24px 16px 24px;
    gap: 24px;
    text-decoration: none;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    font-size: 14px;
    font-weight: 700;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileHorizontalMax}px) {
        font-size: 12px;
    }
`;