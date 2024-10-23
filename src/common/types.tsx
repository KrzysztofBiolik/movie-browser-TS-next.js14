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