import { ContentWrapper, Image, SubTitle, Title, Wrapper } from "./styled";

interface TileParametersProps {
    title?: string,
    image?: string | null,
    subtitle?: string,
    small: boolean,
}

export const Tile = ({
    image,
    title,
    subtitle,
    small
}: TileParametersProps
) => (
    <Wrapper small={small}>
        <Image url={image} />
        <ContentWrapper>
            <Title>{title}</Title>
            {!!subtitle && (
                <SubTitle small={small}>{subtitle}</SubTitle>
            )}
        </ContentWrapper>
    </Wrapper>
) 