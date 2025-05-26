import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { MovieDetailData, MovieListResponse } from "../../types";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_API_KEY;

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getTopRated: builder.query<MovieListResponse, number>({
      query: (page) => `/movie/top_rated?api_key=${API_KEY}&page=${page}`,
    }),
    getPopular: builder.query<MovieListResponse, number>({
      query: (page) => `/movie/popular?api_key=${API_KEY}&page=${page}`,
    }),
    getTrending: builder.query<MovieListResponse, number>({
      query: (page) => `/trending/movie/day?api_key=${API_KEY}&page=${page}`,
    }),
    getMovieDetail: builder.query<MovieDetailData, number>({
      query: (id) => `/movie/${id}?api_key=${API_KEY}`,
    }),
  }),
});

export const {
  useGetTopRatedQuery,
  useGetPopularQuery,
  useGetTrendingQuery,
  useGetMovieDetailQuery,
} = movieApi;
