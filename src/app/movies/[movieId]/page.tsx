"use client"
import { fetchFromAPI } from "@/api/fetchFromAPI";
import { getImageUrl } from "@/api/getImageURL";
import { Container } from "@/common/Container/page";
import { People } from "@/common/People/page";
import { SectionTitle } from "@/common/Section/SectionTitle/page";
import { getYearFromDate } from "@/common/Tile/getYearFromString";
import { Tile } from "@/common/Tile/page";
import { CastMember, CrewMember, MovieCreditsResponse, MovieDetailsResponse} from "@/common/types";
import { useQueries } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { Backdrop } from "./Backdrop/page";

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

    const { isLoading: detailsLoading, data: movieDetails } = moviesDetails;
    const { isLoading: creditsLoading, data: creditsData } = moviesCredits;


    const cast: CastMember[] | undefined = creditsData?.cast;
    const crew: CrewMember[] | undefined = creditsData?.crew;

    if (detailsLoading && creditsLoading) return <p>lalala</p>;
    return (
        <>
            <Backdrop backdrop={movieDetails} />
            <Container>
                <Tile
                    image={getImageUrl({
                        path: movieDetails?.poster_path,
                        size: "medium",
                    })}
                    title={movieDetails?.title}
                    subtitle={getYearFromDate(movieDetails?.release_date)}
                    genreDetails={movieDetails?.genres}
                    vote={{
                        average: movieDetails?.vote_average,
                        count: movieDetails?.vote_count,
                    }}
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
        </>
    )
}