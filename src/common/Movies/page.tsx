import { Tile } from "../Tile/page"
import { TileList, TileListLink } from "../TileList/page"
import { MoviesListResult } from "../types"

export const Movies = ({ movies }: { movies: MoviesListResult[] | undefined }) => {

    return (
        <TileList>
            {movies?.map(movie => (
                <TileListLink
                    key={movie.id}
                    href="movie"
                >
                    <Tile
                    title={movie.title}
                    />
                </TileListLink>
            ))}
        </TileList>
    )
}