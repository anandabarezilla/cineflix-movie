import { useEffect, useState } from "react";
import CardMovie from "../components/Fragments/CardMovie";
import TitlePage from "../components/Fragments/TitlePage";
import { fetchPopularSeries } from "../services/movies.service";
import Pagination from "../components/Fragments/Pagination";
import { Link } from "react-router-dom";

const Series = () => {
  const imageUrl = "https://www.movieposters.com/cdn/shop/products/wolfofwallstreet_480x.progressive.jpg?v=1620229322";

  const [tvSeries, setTvSeries] = useState([]);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    fetchPopularSeries((data) => {
      setTvSeries(data.results);
    });
  }, []);

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
          title="TV Series"
          subtitle="Lorem dolor ipsum subagyo diningrat ngatikejuh."
        />
      </div>
      <div className="flex flex-wrap justify-center gap-3 p-2 mt-5">
        {tvSeries.slice(pages * 4 - 4, pages * 4).map((serie) => {
          return (
            <Link
              key={serie.id}
              to={`/tv/${serie.id}`}
            >
              <CardMovie key={serie.id}>
                <CardMovie.Header image={serie.poster_path} />
                <CardMovie.Body
                  title={serie.name}
                  genreId={serie.genre_ids}
                />
              </CardMovie>
            </Link>
          );
        })}
      </div>
      {/* pagination */}
      <Pagination
        movieOnPage={tvSeries}
        pages={pages}
        selectPageHandler={selectPageHandler}
        prevHandle={prevHandle}
        nextHandle={nextHandle}
      />
    </div>
  );
};

export default Series;
