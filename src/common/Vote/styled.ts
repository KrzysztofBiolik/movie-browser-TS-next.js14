import styled, { css } from "styled-components";
import StarSVG from "../../icons/star.svg"

export const Wrapper = styled.div<{ small?: boolean, backdrop?: boolean }>`
    margin: 24px 0 0 0;
    display: flex;
    flex-wrap: wrap;
    align-items: end;
    font-size: 14px;

    ${({ small }) => small && css`
        margin-top:auto;
    `}

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileHorizontalMax}px) {
        margin: 6px 0 0 0;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileVerticalMax}px) {
        margin: 16px 0 0 0;
    }

    ${({ backdrop }) => backdrop && css`
        color: ${({ theme }) => theme.colors.white};
        margin-bottom: 56px;

        @media(max-width: ${({ theme }) => theme.breakpoints.mobileHorizontalMax}px) {
            margin: 8px 0;
        }
    `}
`;

export const Star = styled(StarSVG)`
    height: 22px;
    width: auto;
    transform: translateY(-8%);
    
    ${({backdrop}) => backdrop && css`
    height: 35px;
    `}
    
`;

export const Average = styled.strong<{ small?: boolean, backdrop?: boolean }>`
    font-size: 22px;
    font-weight: 500;
    margin-left: 8px;

    ${({ small }) => small && css`
    font-size:16px;
    `}

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileVerticalMax}px) {
        font-size: 13px;
        font-weight:600;
    }

    ${({ backdrop }) => backdrop && css`
    font-size:30px;

        @media(max-width: ${({ theme }) => theme.breakpoints.mobileHorizontalMax}px) {
            margin-left: 4px;
            font-size:13px;
        }
    `}
`;

export const OutOf = styled.span<{ backdrop?: boolean }>`
  margin-left: 8px;

  ${({ backdrop }) => !backdrop && css`
        @media(max-width: ${({ theme }) => theme.breakpoints.mobileVerticalMax}px) {
            display:none;
        }
    `}

    ${({ backdrop }) => backdrop && css`
        @media(max-width: ${({ theme }) => theme.breakpoints.mobileHorizontalMax}px) {
            font-size: 10px;
            margin-left: 4px;
        }
    `}  
`;

export const Count = styled.span<{ noVotes?: boolean, small?: boolean, backdrop?: boolean }>`
    margin-left: 8px;

    ${({ noVotes }) => noVotes && css`
        margin-left:0;
    `}
        
     @media(max-width: ${({ theme }) => theme.breakpoints.mobileVerticalMax}px) {
        color: ${({ theme }) => theme.colors.waterloo};
        font-size: 13px;
    }

    ${({ small }) => small && css`
        color: ${({ theme }) => theme.colors.waterloo};
        font-size: 16px;
    `}

    ${({ backdrop }) => backdrop && css`
        width: 100%;
        margin-left:0;
        margin-top:16px;

        @media(max-width: ${({ theme }) => theme.breakpoints.mobileHorizontalMax}px) {
            width:unset;
            margin-top:unset;
            color:inherit;
            font-size: 10px;
            margin-left: 8px;
        }
    `}    
`;