import type { FC } from "react";
import MovieCard from "../../components/movie-card";
import { useGetMovieDetailQuery } from "../../redux/services/movieApi";

interface Props {
  id: number;
}
const FavoriteMovie: FC<Props> = ({ id }) => {
  const { data } = useGetMovieDetailQuery(id);

  if (!data) return null;

  return <MovieCard movie={data} />;
};

export default FavoriteMovie;
