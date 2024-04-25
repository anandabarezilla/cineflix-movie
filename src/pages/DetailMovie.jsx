import { useParams } from "react-router-dom";
import DetailLayout from "../components/Layouts/DetailLayout";
import { useEffect, useState } from "react";
import { fetchDetailMovies } from "../services/movies.service";

const DetailMovie = () => {
  const [detailMovies, setDetailMovies] = useState({});
  console.log(detailMovies);
  const { movieId } = useParams();
  const imgurl = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDetailMovies(movieId);
        setDetailMovies(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <div className="bg-primary py-3 min-h-screen">
      <DetailLayout
        dataDetail={detailMovies}
        imgurl={imgurl}
      >
        <h1 className="text-center text-2xl lg:text-3xl font-semibold mb-2">
          {detailMovies.original_title} <span className="text-xl lg:text-2xl">({detailMovies.release_date?.slice(0, 4)})</span>
        </h1>
      </DetailLayout>
    </div>
  );
};

export default DetailMovie;
