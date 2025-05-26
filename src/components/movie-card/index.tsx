import { memo, useCallback, useMemo, type FC } from "react";
import { Link } from "react-router-dom";
import {
  addFavorite,
  removeFavorite,
} from "../../redux/features/favoritesSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { baseImgUrl, defaultText } from "../../utils/constants";
import type { Movie } from "../../types";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorites);
  const isFavorite = useMemo(
    () => favorites.includes(movie.id),
    [favorites, movie.id]
  );

  const handleFavorite = useCallback(() => {
    if (isFavorite) {
      dispatch(removeFavorite(movie.id));
    } else {
      dispatch(addFavorite(movie.id));
    }
  }, [dispatch, isFavorite, movie.id]);

  return (
    <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
      {/* Card */}
      <div className="relative group w-full h-72 overflow-hidden">
        <Link to={`/movie/${movie.id}`}>
          <img
            src={baseImgUrl + movie.poster_path}
            alt={movie.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />

          <div className="absolute inset-0 bg-black/70 bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-lg font-semibold">
            More Details
          </div>
        </Link>

        {/* Favori Button */}
        <button
          onClick={handleFavorite}
          className="absolute top-2 right-2 z-10 p-2 bg-white/20 hover:bg-white/40 rounded-full transition-colors cursor-pointer"
        >
          {isFavorite ? (
            <span className="text-xl">💔</span>
          ) : (
            <span className="text-xl">❤️</span>
          )}
        </button>
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col gap-2 flex-grow">
        <h3 className="text-white font-semibold text-lg line-clamp-1">
          {movie.title}
        </h3>

        <div className="text-yellow-400 text-sm">
          ⭐ {movie.vote_average.toFixed(1)} / 10
        </div>

        <p className="text-sm text-gray-300 line-clamp-3">
          {movie.overview || defaultText}
        </p>
      </div>
    </div>
  );
};

export default memo(MovieCard);
