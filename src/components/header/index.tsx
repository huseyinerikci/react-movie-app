import { type FC } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

const Header: FC = () => {
  const favorite = useAppSelector((state) => state.favorites);

  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50 mb-5">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide hover:text-blue-400 transition-colors"
        >
          🎬 MovieApp
        </Link>

        {/* Favorite List */}
        <nav className="flex items-center gap-6">
          <Link
            to="/favorites"
            className="relative flex items-center gap-2 hover:text-red-400 transition-colors"
          >
            <span className="text-lg">📋</span>
            <span>Favorite List</span>
            {favorite.length > 0 && (
              <span className="absolute -top-3 right-21 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {favorite.length}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
