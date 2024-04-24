import { AiOutlineStar, AiOutlineDislike, AiOutlineLike, AiOutlineInstagram, AiOutlineLink } from "react-icons/ai";
import { BiBookmark } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const DetailLayout = ({ dataDetail, imgurl, children }) => {
  if (!dataDetail || !dataDetail.id) {
    return <div className="bg-primary flex justify-center item-center min-h-screen text-3xl">Loading...</div>;
  }

  const casts = dataDetail.credits.cast;
  const dataGenres = dataDetail.genres.map((genre) => genre.name);
  return (
    <div>
      {/* background */}
      <div
        className="mt-[4.5rem] w-full h-[13rem] md:h-[16rem] lg:h-[22rem] xl:h-[27rem] bg-no-repeat bg-cover opacity-50 shadow-lg lg:bg-fixed"
        style={{ backgroundImage: `url(${imgurl}${dataDetail?.backdrop_path})` }}
      ></div>
      {/* {title} */}
      <div className="mt-6">
        {children}
        <p className="text-center text-slate-300 tracking-tight mx-2 md:mx-auto text-sm md:text-lg italic">{dataDetail?.tagline}</p>

        {/* icon */}
        <div className="flex justify-center px-4 mt-3">
          <span className="cursor-pointer flex flex-col items-center py-1 px-3 text-sm text-slate-400 rounded-xl hover:bg-secondary duration-150 lg:font-semibold">
            <AiOutlineStar size={25} />
            {parseFloat((dataDetail.vote_average + 0.1).toFixed(1))}%
          </span>
          <span className="cursor-pointer flex flex-col items-center py-1 px-3 text-sm text-slate-400 rounded-xl hover:bg-secondary duration-150 lg:font-semibold">
            <BiBookmark size={25} />
            Watchlist
          </span>
          <span className="cursor-pointer flex flex-col items-center py-1 px-3 text-sm text-slate-400 rounded-xl hover:bg-secondary duration-150 lg:font-semibold">
            <AiOutlineLike size={25} />
            Like
          </span>
          <span className="cursor-pointer flex flex-col items-center py-1 px-3 text-sm text-slate-400 rounded-xl hover:bg-secondary duration-150 lg:font-semibold">
            <AiOutlineDislike size={25} />
            Dislike
          </span>
        </div>
        {/* end icon */}
        <hr className="w-[80%] md:w-[60%] lg:w-[50%] border-slate-400 mx-auto my-3" />
      </div>
      {/* description detail movie */}
      <div className="px-4 mt-4 md:flex gap-4">
        <div className="hidden md:block my-5">
          <img
            src={`${imgurl}${dataDetail?.poster_path}`}
            alt={dataDetail.title}
            className="w-full rounded-md"
          />
        </div>
        <div className="my-5">
          {/* ulasan */}
          <h2 className="text-xl lg:text-2xl text-slate-400 font-semibold uppercase mb-2">ulasan singkat</h2>
          <p className="text-base tracking-wide mb-3">{dataDetail.overview}</p>
          {/* cast */}
          <h2 className="text-xl lg:text-2xl text-slate-400 font-semibold uppercase mb-3 mt-6">Pemeran {dataDetail.title}</h2>

          <div className="flex flex-wrap gap-2">
            {casts.slice(0, 6).map((cast) => {
              return (
                <div
                  className="w-24 shadow-lg tracking-tight cursor-pointer"
                  key={cast.id}
                >
                  <img
                    src={`${imgurl}${cast.profile_path}`}
                    alt={cast.name}
                    className="h-24 mb-2"
                  />
                  <p className="font-semibold">{cast.name}</p>
                  <span className="text-md text-slate-400">{cast.character}</span>
                </div>
              );
            })}
          </div>

          {/* genre */}
          <h2 className="text-xl lg:text-2xl  text-slate-400 font-semibold uppercase mb-3 mt-6">Genre</h2>
          <p className="text-base tracking-wide ">{dataGenres?.join(", ")}</p>
          {/* link socmed */}
          <h2 className="text-xl lg:text-2xl  text-slate-400 font-semibold uppercase mb-3 mt-6">More Info</h2>
          <div className="flex mt-3">
            <span className="cursor-pointer flex flex-col items-center py-2 px-3 text-sm text-slate-400 rounded-xl hover:bg-secondary duration-150">
              <Link
                to={`https://www.facebook.com/${dataDetail.external_ids?.facebook_id}`}
                target="_blank"
              >
                <FaFacebook size={25} />
              </Link>
            </span>
            <span className="cursor-pointer flex flex-col items-center py-2 px-3 text-sm text-slate-400 rounded-xl hover:bg-secondary duration-150">
              <Link
                to={`https://www.twitter.com/${dataDetail.external_ids?.twitter_id}`}
                target="_blank"
              >
                <FaXTwitter size={25} />
              </Link>
            </span>
            <span className="cursor-pointer flex flex-col items-center py-2 px-3 text-sm text-slate-400 rounded-xl hover:bg-secondary duration-150">
              <Link
                to={`https://www.instagram.com/${dataDetail.external_ids?.instagram_id}`}
                target="_blank"
              >
                <AiOutlineInstagram size={25} />
              </Link>
            </span>
            <span className="cursor-pointer flex flex-col items-center py-2 px-3 text-sm text-slate-400 rounded-xl hover:bg-secondary duration-150">
              <Link
                to={dataDetail.homepage}
                target="_blank"
              >
                <AiOutlineLink size={25} />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailLayout;
