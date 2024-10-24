"use client"
import { fetchFromAPI } from "@/api/fetchFromAPI";
import { getImageUrl } from "@/api/getImageURL";
import { Container } from "@/common/Container/page";
import { People } from "@/common/People/page";
import { SectionTitle } from "@/common/Section/SectionTitle/page";
import { getYearFromDate } from "@/common/Tile/getYearFromString";
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
            <Tile
                image={getImageUrl({
                    path: movieDetails?.poster_path,
                    size:"medium",
                })}
                title={movieDetails?.title}
                subtitle={getYearFromDate(movieDetails?.release_date)}
                genreDetails={movieDetails?.genres}
            />
            {!!cast?.length && (
                <>
                    <SectionTitle> Cast ({cast?.length})</SectionTitle>
                    <People people={cast} />
                </>
            )}
            {!!crew?.length && (
                <>
                    <SectionTitle> Crew ({crew?.length})</SectionTitle>
                    <People people={crew} />
                </>
            )}
        </Container>
    )
}