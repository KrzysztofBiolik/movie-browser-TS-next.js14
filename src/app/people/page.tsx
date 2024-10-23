"use client"
import { fetchFromAPI } from "@/api/fetchFromAPI";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { PeopleResponse } from "@/common/types";
import { Pagination } from "@/common/Pagination/page";
import { Container } from "@/common/Container/page";
import { People } from "@/common/People/page";

export default function PeopleList() {

    const searchParams = useSearchParams();
    const router = useRouter();

    const page = searchParams?.get("page")?.toString() || "1";
    const query = searchParams?.get("query") || undefined;
    const path = query ? "search/person" : "person/popular";

    useEffect(() => {
        if (!searchParams.has("page")) {
            router.replace(`?page=1`)
        }
    }, [searchParams]);

    const { isPending, data: rawData } = useQuery({
        queryKey: ["peopleList", page, query],
        queryFn: () => fetchFromAPI<PeopleResponse>({
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
            <People people={rawData?.results} />
            <Pagination totalPages={rawData?.total_pages} />
        </Container>
    )
}