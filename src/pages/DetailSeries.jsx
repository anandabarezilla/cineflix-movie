import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDetailSeries } from "../services/movies.service";
import DetailLayout from "../components/Layouts/DetailLayout";

const DetailSeries = () => {
  const [detailSeries, setDetailSeries] = useState({});
  const { serieId } = useParams();
  const imgurl = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDetailSeries(serieId);
        setDetailSeries(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-primary py-3 min-h-screen">
      <DetailLayout
        dataDetail={detailSeries}
        imgurl={imgurl}
      >
        <h1 className="text-center text-2xl lg:text-3xl font-semibold mb-2">
          {detailSeries.original_name} <span className="text-xl lg:text-2xl">({detailSeries.first_air_date?.slice(0, 4)})</span>
        </h1>
      </DetailLayout>
    </div>
  );
};

export default DetailSeries;
