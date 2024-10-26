import { getImageUrl } from "@/api/getImageURL"
import { Tile } from "../Tile/page"
import { TileList, TileListLink } from "../TileList/page"
import { MoviesListResult, PersonCast, PersonCrew } from "../types"
import { getYearFromDate } from "../Tile/getYearFromString"

export const Movies = ({ movies }: { movies: MoviesListResult[] | PersonCast[] | PersonCrew[] | undefined }) => {

    return (
        <TileList lessitems>
            {movies?.map(movie => (
                <TileListLink
                    key={movie.id}
                    href={`/movies/${movie.id}`}
                >
                    <Tile
                        small
                        stretchVertically
                        twoColumnsMobile
                        image={getImageUrl({
                            path: movie.poster_path,
                            size: "medium",
                        })}
                        title={movie.title}
                        genreIds={movie?.genre_ids || undefined}
                        vote={{
                            average: movie.vote_average,
                            count: movie.vote_count,
                        }}
                        subtitle={(
                            movie.job || movie.character
                                ? (
                                    <>
                                        {movie.job ? movie.job : movie.character}{movie.release_date && `(${getYearFromDate(movie.release_date)})`}
                                    </>
                                )
                                : getYearFromDate(movie.release_date)
                        )}

                    />
                </TileListLink>
            ))}
        </TileList>
    )
}