import type { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetMovieDetailQuery } from "../../redux/services/movieApi";
import Loader from "../../components/loader";
import Error from "../../components/error";
import { baseImgUrl } from "../../utils/constants";
import millify from "millify";

const MovieDetail: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useGetMovieDetailQuery(Number(id));

  if (isLoading) return <Loader />;
  if (error)
    return <Error message="An error occurred while fetching movie details." />;
  if (!data) return <Error message="No movie details found." />;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 text-white">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-zinc-500 py-2  px-4 rounded text-gray-300 hover:text-white hover:bg-zinc-600 mb-6 transition cursor-pointer"
      >
        Back to Home
      </Link>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Image */}
        <div className="w-full md:w-1/3 rounded overflow-hidden shadow-lg">
          <img
            src={baseImgUrl + data.poster_path}
            alt={data.title}
            className="w-full h-[70vh] object-cover rounded-xl shadow-xl"
          />
        </div>

        {/* Info */}
        <div className="w-full md:w-2/3 flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-white">{data.title}</h1>

          <div className="flex items-center gap-4 text-sm text-gray-300">
            <span className="bg-yellow-600 text-black px-2 py-1 rounded font-semibold">
              ⭐ {data.vote_average.toFixed(1)} / 10
            </span>
            <span>🗳️ {data.vote_count.toLocaleString()} votes</span>
            <span>📅 {data.release_date}</span>
          </div>

          <div className="text-sm text-gray-400">
            <strong>Genres:</strong>{" "}
            {data.genres.map((genre) => genre.name).join(", ")}
          </div>

          <p className="text-gray-300 text-base leading-relaxed">
            {data.overview}
          </p>

          {/* Other Details */}
          <div className="bg-zinc-800 p-4 rounded-xl mt-4">
            <h2 className="text-xl font-semibold mb-3 text-white">
              Movie Info
            </h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <strong>Status:</strong> {data.status}
              </li>
              <li>
                <strong>Runtime:</strong> {data.runtime} minutes
              </li>
              <li>
                <strong>Budget:</strong>{" "}
                {data.budget === 0 ? "Unknown" : `$${millify(data.budget)}`}
              </li>
              <li>
                <strong>Revenue:</strong>{" "}
                {data.revenue === 0 ? "Unknown" : `$${millify(data.revenue)}`}
              </li>
              <li>
                <strong>Languages: </strong>
                {data.spoken_languages
                  .map((language) => language.english_name)
                  .join(", ") || "No Language"}
              </li>
              <li>
                <strong>Production Countries: </strong>
                {data.production_countries
                  .map((country) => country.name)
                  .join(", ") || "No Countries"}
              </li>
              <li>
                <strong>Production: </strong>
                {data.production_companies
                  .map((company) => company.name)
                  .join(", ") || "No Company"}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
