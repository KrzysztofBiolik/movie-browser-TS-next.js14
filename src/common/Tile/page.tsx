import { ReactNode } from "react";
import { ContentWrapper, Image, SubTitle, Title, Wrapper } from "./styled";
import { Tags } from "./Tags/page";

interface TileParametersProps {
    title?: string,
    image?: string | null,
    subtitle?: ReactNode,
    genreIds?: number[],
    small: boolean,
}

export const Tile = ({
    image,
    title,
    subtitle,
    genreIds,
    small,
    
}: TileParametersProps
) => (
    <Wrapper small={small}>
        <Image url={image} />
        <ContentWrapper>
            <Title small={small}>{title}</Title>
            {!!subtitle && (
                <SubTitle small={small}>{subtitle}</SubTitle>
            )}
            
            <Tags genreIds={genreIds} />
        </ContentWrapper>
    </Wrapper>
) 