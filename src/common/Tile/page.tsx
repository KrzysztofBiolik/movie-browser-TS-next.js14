import { ContentWrapper, Image, Title, Wrapper } from "./styled";

interface TileParametersProps {
    title?: string,
    image?: string | null,
    small?: boolean,
}

export const Tile = ({
    title,
    image,
    small
}: TileParametersProps
) => (
    <Wrapper small={small || undefined}>
        <Image url={image} />
        <ContentWrapper>
            <Title>{title}</Title>
        </ContentWrapper>
    </Wrapper>
) 