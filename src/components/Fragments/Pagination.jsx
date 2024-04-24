import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({ movieOnPage, pages, selectPageHandler, prevHandle, nextHandle }) => {
  return (
    <div className="my-5">
      <div className="flex justify-center items-center gap-3">
        <span
          className={`cursor-pointer border hover:bg-secondary ${pages > 1 ? "visible" : "invisible"}`}
          onClick={prevHandle}
        >
          <IoIosArrowBack size={24} />
        </span>
        {[...Array(movieOnPage.length / 4)].map((_, i) => (
          <span
            key={i}
            className={`cursor-pointer border px-4 hover:bg-secondary ${pages === i + 1 && "bg-secondary/70"}`}
            onClick={() => selectPageHandler(i + 1)}
          >
            {i + 1}
          </span>
        ))}

        <span
          className={`cursor-pointer border hover:bg-secondary ${pages < movieOnPage.length / 4 ? "visible" : "invisible"}`}
          onClick={nextHandle}
        >
          <IoIosArrowForward size={24} />
        </span>
      </div>
    </div>
  );
};

export default Pagination;
