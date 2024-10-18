import { usePathname, useSearchParams } from "next/navigation";
import { Wrapper, SearchInput } from "./styled";
import {
    useReplaceQueryParameter,
} from "./useRaplaceQueryParameters";

export const SearchBar = () => {
    const pathname = usePathname();
    const replaceQueryParameter = useReplaceQueryParameter();
    const searchParams = useSearchParams();

    const isMovies = pathname.startsWith("/movies");

    const query = searchParams?.get("query");

    const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        replaceQueryParameter({
            key: "query",
            value: target.value.trim() !== "" ? target.value : undefined,
        });
    };

    return (
        <Wrapper>
            <SearchInput
                value={query || ""}
                onChange={onInputChange}
                placeholder={isMovies ? "Search for movies..." : "Search for people..."}
            />
        </Wrapper>
    );
};