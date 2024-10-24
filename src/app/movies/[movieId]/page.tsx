"use client"
import { fetchFromAPI } from "@/api/fetchFromAPI";
import { getImageUrl } from "@/api/getImageURL";
import { Container } from "@/common/Container/page";
import { Movies } from "@/common/Movies/page";
import { People } from "@/common/People/page";
import { SectionTitle } from "@/common/Section/SectionTitle/page";
import { Tile } from "@/common/Tile/page";
import { CastMember, CrewMember, MovieCreditsResponse, MovieDetailsResponse, PersonCast, PersonCreditsResponse, PersonCrew, PersonDetailsResponse } from "@/common/types";
import { useQueries } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function MovieDetails() {

    const { movieId } = useParams();

    const [moviesDetails, moviesCredits] = useQueries({
        queries: [
            {
                queryKey: ["movieDetails", movieId],
                queryFn: () => fetchFromAPI<MovieDetailsResponse>({
                    path: `movie/${movieId}`
                }),
            },
            {
                queryKey: ["movieCredits", movieId],
                queryFn: () => fetchFromAPI<MovieCreditsResponse>({
                    path: `movie/${movieId}/credits`
                }),
            },
        ],
    });

    const { isLoading: detailsLoading, error: detailsError, data: movieDetails } = moviesDetails;
    const { isLoading: creditsLoading, error: creditsError, data: creditsData } = moviesCredits;


    const cast: CastMember[] | undefined = creditsData?.cast;
    const crew: CrewMember[] | undefined = creditsData?.crew;

    if (detailsLoading && creditsLoading) return <p>lalala</p>;
    return (
        <Container>
            <SectionTitle> Cast ({cast?.length})</SectionTitle>
            <People people={cast} />
            <SectionTitle> Crew ({crew?.length})</SectionTitle>
            <People people={crew} />
        </Container>
    )
}