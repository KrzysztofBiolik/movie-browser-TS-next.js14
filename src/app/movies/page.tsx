"use client"

import { fetchFromAPI } from "@/api/fetchFromAPI";
import { useQuery } from "@tanstack/react-query";
import { Header } from "./styled";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { MoviesResponse } from "@/common/types";
import { Pagination } from "@/common/Pagination/page";
import { TileList } from "@/common/TileList/page";
import { Container } from "@/common/Container/page";
import { Movies } from "@/common/Movies/page";

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

    const { isPending, isError, data: rawData } = useQuery({
        queryKey: ["movieList", page, query],
        queryFn: () => fetchFromAPI<MoviesResponse>({
            path,
            parameters: {
                page,
                query,
            }
        }),
    });

    if (isPending) { return <p>Ładowanie</p> }

    return (

        <Container>
            <Header>Movies Page</Header>
           <Movies movies={rawData?.results}/>
            <Pagination totalPages={rawData?.total_pages} />
        </Container>
    )
}