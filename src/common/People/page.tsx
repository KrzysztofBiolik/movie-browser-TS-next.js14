import { getImageUrl } from "@/api/getImageURL"
import { Tile } from "../Tile/page"
import { TileList, TileListLink } from "../TileList/page"
import { CastMember, CrewMember, PeopleListResult } from "../types"

export const People = ({ people }: { people: PeopleListResult[] | CastMember[] | CrewMember[] | undefined }) => {

    return (
        <TileList >
            {people?.map(person => (
                <TileListLink
                    key={person.id}
                    href={`/people/${person.id}`}
                >
                    <Tile
                        small
                        center
                        image={getImageUrl({
                            path: person.profile_path,
                            size: "medium",
                        })}
                        title={person.name}
                        subtitle={person.job ? person.job : person.character ? person.character : undefined} 
                    />
                </TileListLink>
            ))}
        </TileList>
    )
}