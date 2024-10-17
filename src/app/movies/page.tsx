"use client"

import { fetchFromAPI } from "@/api/fetchFromAPI";
import { useQuery } from "@tanstack/react-query";
import { Header } from "./styled";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";


export default function MovieList() {

    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        if (!searchParams.has("page")) {

            router.replace(`?page=5`)
        }

    }, [searchParams]);



    const { isPending, isError, data: rawData } = useQuery({
        queryKey: ["movieList"],
        queryFn: () => fetchFromAPI({
            path: "movie/popular",
            parameters: {
                page: "1",
            }
        }),
    });

    return (
        <div>
            <Header>Movies Page</Header>
          
        </div>

    )
}