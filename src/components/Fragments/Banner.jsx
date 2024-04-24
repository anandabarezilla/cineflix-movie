import { useEffect, useState } from "react";
import Button from "../Elements/Button";
import { LuArrowRight, LuArrowLeft } from "react-icons/lu";

const Banner = ({ movies }) => {
  const dataMovie = movies.slice(0, 5).map((movie) => {
    return movie;
  });

  const imgurl = "https://image.tmdb.org/t/p/w500/";

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? dataMovie.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === dataMovie.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // useeffect untuk slide

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <>
      {dataMovie.length > 0 && (
        <div
          className="border border-secondary rounded-lg w-full max-w-[1400px] h-[30rem] sm:h-[26rem] md:h-[30rem] xl:h-[90vh] relative my-32 before:absolute before:h-full before:w-full before:bg-gradient-to-t before:from-slate-900 overflow-hidden cursor-pointer bg-no-repeat bg-cover duration-500 "
          style={{ backgroundImage: `url(${imgurl}${dataMovie[currentIndex].poster_path})`, backgroundPositionY: "20%", backgroundPositionX: "50%" }}
        >
          <div className="absolute bottom-0 flex flex-col sm:flex-row gap-5 sm:gap-0 w-full justify-between items-center px-2 sm:px-6 py-3 sm:py-4">
            <Button>Watch</Button>
            <div className="flex gap-3 mt-5">
              <h1 className="text-3xl font-semibold text-center mx-auto">{dataMovie[currentIndex].title}</h1>
            </div>
          </div>
          <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 rounded-full p-2 bg-black/20 cursor-pointer hover:bg-secondary duration-150">
            <LuArrowLeft
              size={30}
              onClick={prevSlide}
            />
          </div>
          <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 rounded-full p-2 bg-black/20  cursor-pointer hover:bg-secondary duration-150">
            <LuArrowRight
              size={30}
              onClick={nextSlide}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
