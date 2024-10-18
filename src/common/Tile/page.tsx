import { Title, Wrapper } from "./styled";

export const Tile = ({
    title
}: { title: string | undefined }) => (
    <Wrapper>
        <Title>{title}</Title>
    </Wrapper>
) 