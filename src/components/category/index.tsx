import { useEffect, useState, type FC } from "react";
import Loader from "../loader";
import MovieCard from "../movie-card";
import {
  useGetPopularQuery,
  useGetTopRatedQuery,
  useGetTrendingQuery,
} from "../../redux/services/movieApi";
import Error from "../error";
import type { CategoryType, Movie } from "../../types";

type Props = {
  selectedCategory: CategoryType;
};

const Category: FC<Props> = ({ selectedCategory }) => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<Movie[]>([]);

  const topRated = useGetTopRatedQuery(page, {
    skip: selectedCategory !== "Top Rated",
  });
  const popular = useGetPopularQuery(page, {
    skip: selectedCategory !== "Popular",
  });
  const trending = useGetTrendingQuery(page, {
    skip: selectedCategory !== "Trending",
  });

  const queries = {
    "Top Rated": topRated,
    Popular: popular,
    Trending: trending,
  };

  const { data, isLoading, error } = queries[selectedCategory];

  useEffect(() => {
    setPage(1);
    setMovies([]);
  }, [selectedCategory]);

  useEffect(() => {
    if (!data?.results) return;

    setMovies((prev) => {
      const newMovies = data.results.filter(
        (movie) => !prev.some((m) => m.id === movie.id)
      );
      return page === 1 ? newMovies : [...prev, ...newMovies];
    });
  }, [data?.results, page, selectedCategory]);

  if (error) return <Error message="An error occurred" />;

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <MovieCard key={`${selectedCategory}-${movie.id}`} movie={movie} />
        ))}
      </div>
      <div className="flex justify-center my-10">
        {!isLoading ? (
          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="bg-secondary py-2 px-5 rounded-md bg-zinc-800 transition hover:bg-zinc-600 cursor-pointer"
          >
            More Movies
          </button>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Category;
