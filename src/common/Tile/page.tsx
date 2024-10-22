import { ReactNode } from "react";
import { ContentWrapper, Image, SubTitle, Title, Wrapper } from "./styled";
import { Tags } from "./Tags/page";
import { Vote } from "../Vote/page";

interface TileParametersProps {
    title?: string,
    image?: string | null,
    subtitle?: ReactNode,
    genreIds?: number[],
    vote?: {
        average?: number,
        count?: number,
    }
    small: boolean,
}

export const Tile = ({
    image,
    title,
    subtitle,
    genreIds,
    small,
    vote,
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
            <Vote small={small} vote={vote} />
        </ContentWrapper>
    </Wrapper>
) 