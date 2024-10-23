import styled, { css } from "styled-components";
import Arrow from "../../icons/icon-vector.svg";

export const Wrapper = styled.div`
	margin-top: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 12px;
	font-size: 14px;

	@media(max-width: ${({ theme }) => theme.breakpoints.mobileHorizontalMax}px) {
		margin-top: 32px;
		gap: 8px;
	}

`;

export const StyledButton = styled.button`
	display: flex;
	gap: 8px;
	align-items: center;
	padding: 8px 16px;
	border: none;
	font-size: 14px;;
	border-radius: 5px;
	background: ${({ theme }) => theme.colors.lightBlue};
	cursor: pointer;
	transition: filter 0.3s;

	&:hover {
		filter: brightness(90%);
	}

	&:disabled {
		cursor: not-allowed;
		filter:unset;
		background:  ${({ theme }) => theme.colors.mystic};
	}

	@media(max-width: ${({ theme }) => theme.breakpoints.mobileHorizontalMax}px) {
		padding: 6px 4px;
		gap: 0;
		
	}	
`;

export const ButtonText = styled.span`
	color: ${({ theme }) => theme.colors.woodsmoke};

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileHorizontalMax}px) {
		display: none;
	}
`;

export const Text = styled.span`
	color: ${({ theme }) => theme.colors.waterloo};
	font-size: 16px;
	font-weight: 400;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileHorizontalMax}px) {
		gap: 2px;
		font-size: 10px;
	}
`;

export const Strong = styled(Text)`
	color: ${({ theme }) => theme.colors.woodsmoke};
	font-weight: 600;
`;

export const TextContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	margin: 0 12px;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileHorizontalMax}px) {
		gap: 2px;
		margin: 0;
	}
`;

export const StyledArrow = styled(Arrow)`
	color: ${({ theme }) => theme.colors.blue};
	

	${({ left }) => left && css`
		transform: rotate(180deg);
	`}

	${({ mobile }) => mobile && css`
		@media(min-width: ${({ theme }) => theme.breakpoints.mobileHorizontalMax}px) {
			display: none;
		}	
	`}

	*:disabled & {
		color: ${({ theme }) => theme.colors.waterloo};
	}

	@media(max-width: ${({ theme }) => theme.breakpoints.mobileHorizontalMax}px) {
		height: 10px;
	}	
`;


