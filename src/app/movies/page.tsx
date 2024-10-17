"use client"

import { fetchFromAPI } from "@/api/fetchFromAPI";
import { useQuery } from "@tanstack/react-query";
import { Header } from "./styled";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { MoviesResponse } from "@/common/Header/types";

export default function MovieList() {

    const searchParams = useSearchParams();
    const router = useRouter();

    const page = searchParams?.get("page")?.toString() || "1";
    const query = searchParams?.get("query") || undefined;
    const path = query ? "search/movie" : "movie/popular";

    useEffect(() => {
        if (!searchParams.has("page")) {

            router.replace(`?page=5`)
        }
    }, [searchParams]);

    const { isPending, isError, data: rawData } = useQuery({
        queryKey: ["movieList"],
        queryFn: () => fetchFromAPI<MoviesResponse>({
            path,
            parameters: {
                page,
                query,
            }
        }),
    });

    console.log(rawData?.results);

    return (
        <div>
            <Header>Movies Page</Header>
            <ul>
                {rawData?.results?.map((movie) => (
                    <li>
                        {movie.title}
                    </li>
                )) }
            </ul>
        </div>

    )
}