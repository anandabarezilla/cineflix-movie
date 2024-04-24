import { useEffect, useState } from "react";
import Banner from "../components/Fragments/Banner";
import CardMovie from "../components/Fragments/CardMovie";
import TitlePage from "../components/Fragments/TitlePage";
import fetchMovies from "../services/movies.service";
import { Link } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies((data) => {
      setMovies(data.results);
    });
  }, []);

  return (
    <>
      <div className="bg-primary flex flex-col min-h-screen justify-center items-center px-3 sm:p-0">
        <Banner movies={movies} />
      </div>
      <main className="bg-[#2E1212] py-10 px-2">
        <div className="mb-5">
          <TitlePage
            title="cineFLIX"
            subtitle="film yang sedang trending"
          />
        </div>
        <div className="flex flex-wrap gap-4 mt-20 md:ml-10 mx-auto">
          {movies.slice(0, 6).map((movie) => {
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
      </main>
    </>
  );
};

export default Home;
