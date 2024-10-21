import { getImageUrl } from "@/api/getImageURL"
import { Tile } from "../Tile/page"
import { TileList, TileListLink } from "../TileList/page"
import { MoviesListResult } from "../types"

export const Movies = ({ movies }: { movies: MoviesListResult[] | undefined }) => {

    return (
        <TileList lessitems>
            {movies?.map(movie => (
                <TileListLink
                    key={movie.id}
                    href="movie"
                >
                    <Tile
                        small
                        image={getImageUrl({
                            path: movie.poster_path,
                            size: "medium",
                        })}
                        title={movie.title}
                        genreIds={movie?.genre_ids || undefined}

                    />
                </TileListLink>
            ))}
        </TileList>
    )
}