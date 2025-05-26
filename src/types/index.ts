export interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  budget: number;
  revenue: number;
  poster_path: string;
  vote_average: number;
  spoken_languages: Languages[];
  production_companies: Company[];
  production_countries: Countries[];
}

export interface MovieDetailData extends Movie {
  runtime: number;
  genres: Genre[];
  vote_count: number;
  status: string;
}

export interface MovieListResponse {
  page: number;
  total_pages: number;
  total_results: number;
  results: Movie[];
}

export interface Genre {
  id: number;
  name: string;
}

export interface Company {
  id: number;
  name: string;
  logo_path: string | null;
}

export interface Languages {
  iso_639_1: string;
  english_name: string;
}

export interface Countries {
  iso_3166_1: string;
  name: string;
}

export type CategoryType = "Top Rated" | "Popular" | "Trending";
