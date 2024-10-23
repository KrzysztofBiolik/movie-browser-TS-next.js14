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
    small?: boolean,
    center?: boolean,
}

export const Tile = ({
    image,
    title,
    subtitle,
    genreIds,
    vote,
    small,
    center
}: TileParametersProps
) => (
    <Wrapper small={small} center={center}>
        <Image url={image} />
        <ContentWrapper>
            <Title small={small}>{title}</Title>
            {!!subtitle && (
                <SubTitle small={small}>{subtitle}</SubTitle>
            )}
            {!!genreIds && (
                <Tags genreIds={genreIds} />
            )}
            <Vote small={small} vote={vote} />
        </ContentWrapper>
    </Wrapper>
) 