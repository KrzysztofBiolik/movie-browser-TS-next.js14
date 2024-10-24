import { fetchFromAPI } from "@/api/fetchFromAPI";
import { useQuery } from "@tanstack/react-query";
import { Item, Wrapper } from "./styled";

interface GenresResultsProps {
    id?: number;
    name?: "string";
}
export interface GenresResponseProps {
    genres?: GenresResultsProps[];
}

export const Tags = ({ genreIds }: { genreIds?: number[] }) => {

    const { data } = useQuery({
        queryKey: ["movieGenres"],
        queryFn: () => fetchFromAPI<GenresResponseProps>({
            path: "genre/movie/list",
        }),
    });

    const genresArray = data?.genres;

    const filteredGenres = genreIds?.map(
        (genre) => genresArray?.filter(({ id }) => genre === id)
    );

    return (
        <Wrapper>
            {filteredGenres?.map(
                (genre) =>
                    genre?.map(({ name }) => (
                        <Item key={name}>
                            {name}
                        </Item>
                    ))
            )}
        </Wrapper>
    )
}