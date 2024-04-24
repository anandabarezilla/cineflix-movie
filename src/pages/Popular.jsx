import { useEffect, useState } from "react";
import CardMovie from "../components/Fragments/CardMovie";
import TitlePage from "../components/Fragments/TitlePage";
import { fetchPopularMovies } from "../services/movies.service";

import Pagination from "../components/Fragments/Pagination";
import { Link } from "react-router-dom";

const Popular = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    fetchPopularMovies((data) => {
      setPopularMovies(data.results);
    });
  }, [popularMovies]);

  const selectPageHandler = (selectedPage) => {
    selectedPage && setPages(selectedPage);
  };

  const prevHandle = () => {
    selectPageHandler(pages - 1);
  };
  const nextHandle = () => {
    selectPageHandler(pages + 1);
  };

  return (
    <div className="bg-primary py-3 min-h-screen">
      <div className="mt-32 p-2">
        <TitlePage
          title="Film Terpopuler"
          subtitle="Film terpopuler berdasarkan rating yang bersumber dari OmdbApi.com."
        />
      </div>
      <div className="flex flex-wrap justify-center gap-3 p-2 mt-5">
        {popularMovies.slice(pages * 4 - 4, pages * 4).map((movie) => {
          return (
            <Link
              key={movie.id}
              to={`/movie/${movie.id}`}
            >
              <CardMovie
                key={movie.id}
                id={movie.id}
              >
                <CardMovie.Header image={movie.poster_path} />
                <CardMovie.Body
                  title={movie.title}
                  date={movie.release_date}
                  genreId={movie.genre_ids}
                />
              </CardMovie>
            </Link>
          );
        })}
      </div>
      {/* pagination */}
      <Pagination
        movieOnPage={popularMovies}
        pages={pages}
        selectPageHandler={selectPageHandler}
        prevHandle={prevHandle}
        nextHandle={nextHandle}
      />
    </div>
  );
};

export default Popular;
