"use client"
import { fetchFromAPI } from "@/api/fetchFromAPI";
import { getImageUrl } from "@/api/getImageURL";
import { Container } from "@/common/Container/page";
import { Movies } from "@/common/Movies/page";
import { People } from "@/common/People/page";
import { SectionTitle } from "@/common/Section/SectionTitle/page";
import { Tile } from "@/common/Tile/page";
import { PersonCast, PersonCreditsResponse, PersonCrew, PersonDetailsResponse } from "@/common/types";
import { useQueries } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function PeopleDetails() {

    const { peopleId } = useParams();


    const [movieDetails, movieCredits] = useQueries({
        queries: [
            {
                queryKey: ["peopleDetails", peopleId],
                queryFn: () => fetchFromAPI<PersonDetailsResponse>({
                    path: `person/${peopleId}`
                }),
            },
            {
                queryKey: ["peopleCredits", peopleId],
                queryFn: () => fetchFromAPI<PersonCreditsResponse>({
                    path: `person/${peopleId}/movie_credits`
                }),
            },
        ],
    });

    const { isLoading: detailsLoading, error: detailsError, data: personDetails } = movieDetails;
    const { isLoading: creditsLoading, error: creditsError, data: creditsData } = movieCredits;


    const cast: PersonCast[] | undefined = creditsData?.cast;
    const crew: PersonCrew[] | undefined = creditsData?.crew;


    return (
        <Container>
            <Tile
                image={getImageUrl({
                    path: personDetails?.profile_path,
                    size: "medium",
                })}
                title={`${personDetails?.name} (${personDetails?.known_for_department})`}
            />
            <SectionTitle>Movies - Cast ({cast?.length})</SectionTitle>
            <Movies movies={cast} />
            <SectionTitle>Movies - Crew ({crew?.length})</SectionTitle>
            <Movies movies={crew} />
        </Container>
    )
}