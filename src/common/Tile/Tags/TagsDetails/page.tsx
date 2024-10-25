import { GenresResultsProps } from "../page";
import { Item, Wrapper } from "../styled";

export const TagsDetails = ({ genreDetails }: { genreDetails?: GenresResultsProps[] }) => {
    return (
        !!genreDetails?.length  && (
            <Wrapper>
                {genreDetails?.map(tag => (
                    <Item key={tag.id}>
                        {tag.name}
                    </Item>
                ))}
            </Wrapper>
        )
    )
};


