import type { FC } from "react";
import FavoriteMovie from "./FavoriteMovie";
import { useAppSelector } from "../../redux/hooks";
import { Link } from "react-router-dom";

const FavoritesPage: FC = () => {
  const favoriteMovieIds = useAppSelector((state) => state.favorites);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Your Favorites</h2>

      {favoriteMovieIds.length === 0 ? (
        <div className="text-gray-400 flex justify-center flex-col items-center mt-28 ">
          <p className="w-fit text-lg mb-10 bg-red-200 p-4 rounded">
            No movies have been added to your list yet
          </p>
          <Link
            to="/"
            className="w-fit bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Explore Movies
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {favoriteMovieIds.map((id) => (
            <FavoriteMovie key={id} id={id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
