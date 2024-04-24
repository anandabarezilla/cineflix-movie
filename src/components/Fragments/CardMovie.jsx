import axios from "axios";
import { useEffect, useState } from "react";

const CardMovie = ({ children }) => {
  return (
    <>
      <div className="shadow-xl cursor-pointer w-40 md:w-72 xl:w-64">{children}</div>
    </>
  );
};

const Header = ({ image }) => {
  const imgurl = "https://image.tmdb.org/t/p/w500/";
  return (
    <img
      src={`${imgurl}${image}`}
      alt="movie-poster"
      className="w-40 sm:w-52 md:w-72 xl:w-64"
    />
  );
};

const Body = ({ title, genreId }) => {
  const [genres, setGenres] = useState([]);

  const fetchGenres = async () => {
    const res = await axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=be7a3fd75af32d24276ec0778cbcc636");
    const data = await res.data;

    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  // Menyaring genre yang sesuai dengan genreIds
  const matchingGenres = genres.filter((genre) => genreId.includes(genre.id));

  // Mengambil nama genre dari hasil penyaringan
  const genreNames = matchingGenres.map((genre) => genre.name);

  return (
    <div className="mt-2">
      <h2 className="text-md md:text-lg md:font-semibold">{title}</h2>
      <p className="text-xs md:text-base text-slate-400">{genreNames.join(", ")}</p>
    </div>
  );
};

CardMovie.Header = Header;
CardMovie.Body = Body;

export default CardMovie;
