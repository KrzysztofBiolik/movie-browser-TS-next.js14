import { ReactNode } from "react";
import { ContentWrapper, Image, SubTitle, Title, Wrapper } from "./styled";
import { GenresResponseProps, GenresResultsProps, Tags } from "./Tags/page";
import { Vote } from "../Vote/page";
import { TagsDetails } from "./Tags/TagsDetails/page";

interface TileParametersProps {
    title?: string,
    image?: string | null,
    subtitle?: ReactNode,
    genreIds?: number[],
    genreDetails?: GenresResultsProps[],
    vote?: {
        average?: number,
        count?: number,
    }
    small?: boolean,
    center?: boolean,
    stretchVertically?: boolean,
    twoColumnsMobile?: boolean;
}

export const Tile = ({
    image,
    title,
    subtitle,
    genreIds,
    genreDetails,
    vote,
    small,
    center,
    stretchVertically,
    twoColumnsMobile
}: TileParametersProps
) => (
    <Wrapper small={small} center={center} columsOnMobile={twoColumnsMobile}>
        <Image url={image} noImage={!image} />
        <ContentWrapper stretchVertically={stretchVertically}>
            <Title small={small}>{title}</Title>
            {!!subtitle && (
                <SubTitle small={small}>{subtitle}</SubTitle>
            )}
            {genreIds && (
                <Tags genreIds={genreIds} />
            )}
            <TagsDetails genreDetails={genreDetails} />

            <Vote small={small} vote={vote} />
        </ContentWrapper>
    </Wrapper>
) 