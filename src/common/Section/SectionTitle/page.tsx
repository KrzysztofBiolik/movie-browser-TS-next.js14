import styled from "styled-components";

export const SectionTitle = styled.h2`
	margin-bottom: 6px;
	font-size: 36px;
	font-weight: 500;

	@media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
		font-size: 28px;
	}
	
	@media (max-width: ${({ theme }) => theme.breakpoints.mobileVerticalMax}px) {
		font-size: 18px;
	}
`;