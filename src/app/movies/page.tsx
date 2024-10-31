"use client"

import {fetchFromAPI} from "@/api/fetchFromAPI";
import {useQuery} from "@tanstack/react-query";
import {Header} from "./styled";
import {useEffect} from "react";
import {useSearchParams} from "next/navigation";
import {useRouter} from "next/navigation";
import {MoviesResponse} from "@/common/types";
import {Pagination} from "@/common/Pagination/page";
import {Container} from "@/common/Container/page";
import {Movies} from "@/common/Movies/page";
import {Loading} from "@/common/Loading/page";
import {Error} from "@/common/Error/page";
import {SearchResults} from "@/common/SearchResults/page";

export default function MovieList() {

    const searchParams = useSearchParams();
    const router = useRouter();

    const page = searchParams?.get("page")?.toString() || "1";
    const query = searchParams?.get("query") || undefined;
    const path = query ? "search/movie" : "movie/popular";

    useEffect(() => {
        if (!searchParams.has("page")) {
            router.replace(`?page=1`)
        }
    }, [searchParams]);

    const {isPending, isError, data: rawData} = useQuery({
        queryKey: ["movieList", page, query],
        queryFn: () => fetchFromAPI<MoviesResponse>({
            path,
            parameters: {
                page,
                query,
            }
        }),
    });

    if (isPending) {
        return <Loading
            searchQuery={query}/>
    }
    if (isError) {
        return <Error/>
    }

    return (

        <Container>
            <Header>Movies Page</Header>
            {!!query && (
                <SearchResults
                    searchQuery={query}
                    searchTotalResults={rawData?.total_results}
                />
            )}
            <Movies movies={rawData?.results}/>
            <Pagination totalPages={rawData?.total_pages}/>
        </Container>
    )
}