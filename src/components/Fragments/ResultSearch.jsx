import { useEffect, useState } from "react";
import { fetchGenres } from "../../services/movies.service";
import { Link } from "react-router-dom";

const ResultSearch = ({ searchMovies, filteredResults, imgurl, mediaType, closeSearchResults, searchRef }) => {
  const [dataGenres, setDataGenres] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchGenres(mediaType);
        const dataGenre = data.genres.map((genre) => genre);
        setDataGenres(dataGenre);
      } catch (err) {
        console.log(err);
      }
    };
    if (mediaType) {
      fetchData();
    }
  }, [mediaType]);

  const getGenreNames = (genreIds) => {
    if (dataGenres.length > 0) {
      const genres = genreIds.map((id) => {
        const genre = dataGenres.find((item) => item.id === id);
        return genre ? genre.name : null;
      });
      return genres.filter((genre) => genre !== null).join(", ");
    }
    return "";
  };

  // penggunaan useRef (closeSearchResults)

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (searchMovies && filteredResults.length > 0) {
        if (searchRef.current && !searchRef.current.contains(e.target)) {
          closeSearchResults();
        }
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [searchMovies, filteredResults, closeSearchResults]);

  return (
    <>
      {filteredResults.length > 0 && (
        <div
          key={filteredResults}
          className="absolute border border-secondary shadow-md bg-white rounded-md w-full h-[25rem] mt-4 p-2 overflow-auto"
        >
          {filteredResults.map((data) => {
            return (
              <>
                <div
                  key={data.id}
                  className="text-slate-800 flex gap-2"
                >
                  <img
                    src={`${imgurl}${data.poster_path}`}
                    alt=""
                    className="w-11"
                  />
                  <div className="w-full text-sm md:text-md">
                    <Link to={`/${mediaType}/${data.id}`}>
                      <p className="text-slate-800 font-semibold line-clamp-1">{data.media_type === "tv" ? data.name : data.title}</p>
                    </Link>
                    <p className="text-slate-500 line-clamp-1">
                      Genre: <span className="text-slate-800 text-sm italic">{getGenreNames(data.genre_ids)}</span>
                    </p>
                    <p className="text-slate-500">
                      Media: <span className="text-slate-800 text-xs capitalize">{data.media_type}</span>
                    </p>
                  </div>
                </div>
                <hr className="my-2 w-[80%] mx-auto" />
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ResultSearch;
