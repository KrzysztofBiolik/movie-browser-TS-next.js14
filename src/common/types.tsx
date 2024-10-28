import { GenresResultsProps } from "./Tile/Tags/page";

// MovieList
export interface MoviesListResult {
    id: number;
    title: string;
    poster_path?: string | null;
    release_date?: string;
    backdrop_path?: string | null;
    genre_ids?: number[];
    vote_count?: number;
    vote_average?: number;
    job?: string | null,
    character?: string | null,
}

export interface MoviesResponse {
    page?: number;
    results?: MoviesListResult[];
    total_results?: number;
    total_pages?: number;
}

//PeopleList
export interface PeopleListResult {
    id: number;
    name?: string;
    profile_path?: string | null;
    job?: string | null,
    character?: string | null,
}

export interface PeopleResponse {
    page?: number;
    results?: PeopleListResult[];
    total_results?: number;
    total_pages?: number;
}

//PersonDetails
export interface PersonDetailsResponse {
    birthday?: string | null;
    id?: number;
    name?: string;
    biography?: string;
    place_of_birth?: string | null;
    profile_path?: string | null;
    known_for_department?: string;
}

export interface PersonCast {
    character?: string;
    credit_id?: string;
    release_date?: string;
    vote_count?: number;
    vote_average?: number;
    title?: string;
    genre_ids?: number[];
    id: number;
    job: string | null;
    poster_path?: string | null;
}

export interface PersonCrew {
    id: number;
    job?: string;
    vote_count?: number;
    poster_path?: string | null;
    title?: string;
    genre_ids?: number[];
    vote_average?: number;
    release_date?: string;
    credit_id?: string;
    character?: string;
}

export interface PersonCreditsResponse {
    cast?: PersonCast[];
    crew?: PersonCrew[];
}


//MovieDetails

export interface ProductionCountry {
    iso_3166_1?: string;
    name?: string;
  }
  
  export interface MovieDetailsResponse {
    backdrop_path?: string | null;
    genres?: GenresResultsProps[];
    id?: number;
    original_title?: string;
    overview?: string | null;
    poster_path?: string | null;
    production_countries?: ProductionCountry[];
    release_date?: string;
    title?: string;
    vote_average?: number;
    vote_count?: number;
  }

  export interface CastMember {
    id?: number;
    name?: string;
    profile_path?: string | null;
    cast_id?: number;
    character?: string;
    job?: string;
  }
  
  export interface CrewMember {
    id?: number;
    name?: string;
    profile_path?: string | null;
    credit_id?: number;
    job?: string;
    character?: string;
  }
  
  export interface MovieCreditsResponse {
    cast?: CastMember[];
    crew?: CrewMember[];
  }



