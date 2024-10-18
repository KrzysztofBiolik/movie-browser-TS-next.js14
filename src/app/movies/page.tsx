"use client"

import { fetchFromAPI } from "@/api/fetchFromAPI";
import { useQuery } from "@tanstack/react-query";
import { Header } from "./styled";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { MoviesResponse } from "@/common/types";
import { Pagination } from "@/common/Pagination/page";

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

    if (isPending) {
        return <p>Ładowanie</p>
    }

    console.log(typeof(rawData?.total_pages));

    return (
        <div>
            <Header>Movies Page</Header>
            <ul>
                {rawData?.results?.map((movie) => (
                    <li>
                        {movie.title}
                    </li>
                ))}
            </ul>
            <Pagination totalPages={rawData?.total_pages} />
        </div>
    )
}