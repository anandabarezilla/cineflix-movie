import { HiMenuAlt4 } from "react-icons/hi";
import { BsBookmarkPlus } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import SearchInput from "../Fragments/SearchInput";
import { Link, NavLink } from "react-router-dom";
import { NavbarToggle } from "../../context/NavbarToggle";
import { useContext, useEffect, useRef, useState } from "react";
import ResultSearch from "../Fragments/ResultSearch";
import { fetchSearch } from "../../services/movies.service";
import { useDebounce } from "use-debounce";

const Navbar = () => {
  const navbarMenu = ["beranda", "populer", "series", "negara"];

  const { isNavbarToggle, setIsNavbarToggle } = useContext(NavbarToggle);

  const handleToggle = () => {
    setIsNavbarToggle(!isNavbarToggle);
  };

  // pencarian
  const [searchMovies, setSearchMovies] = useState("");

  const [debouncedSearch] = useDebounce(searchMovies, 1000);

  const [filteredResults, setFilteredResults] = useState([]);

  const imgurl = "https://image.tmdb.org/t/p/w500/";

  const [mediaType, setMediaType] = useState("");

  // agar resultSearch tertutup ketika mengklik di luar area pencarian (searchInput): gunakan useRef

  const searchRef = useRef();

  const closeSearchResults = () => {
    setFilteredResults([]);
    setSearchMovies("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleCange = (e) => {
    setSearchMovies(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchSearch(searchMovies);
        if (data && data.results) {
          const filteredResults = data.results.filter((movie) => {
            return movie.media_type === "movie" || movie.media_type === "tv";
          });

          // Set mediaType berdasarkan data yang ada di filteredResults
          if (filteredResults.length > 0) {
            const firstResultMediaType = filteredResults[0].media_type;
            setMediaType(firstResultMediaType);
          }

          setFilteredResults(filteredResults);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [debouncedSearch]);

  return (
    <nav className="bg-primary w-full z-20 fixed py-6 lg:py-0 shadow-lg">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-5 px-4 ">
          <Link to="/">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              cine<span className="italic text-secondary">FLIX</span>
            </h1>
          </Link>
        </div>
        <div className="lg:flex hidden w-full justify-center text-xl">
          {navbarMenu.map((navbar, i) => {
            return (
              <>
                <NavLink
                  key={i}
                  to={navbar === "beranda" ? "/" : `/${navbar}`}
                  className={({ isActive, isPending }) => `hover:text-secondary hover:duration-150 capitalize py-6 px-4 ${isActive ? "border-b-2 border-secondary" : isPending ? "bg-slate-800" : ""}`}
                >
                  {navbar}
                </NavLink>
              </>
            );
          })}
        </div>
        <div className="flex  items-center gap-3 justify-end lg:justify-evenly w-full pr-6">
          <div
            className="sm:w-[70%] md:full relative"
            ref={searchRef}
          >
            <SearchInput
              onSubmit={handleSubmit}
              onChange={handleCange}
              value={searchMovies}
            />

            <ResultSearch
              searchMovies={searchMovies}
              filteredResults={filteredResults}
              imgurl={imgurl}
              mediaType={mediaType}
              closeSearchResults={closeSearchResults}
              searchRef={searchRef}
            />
          </div>
          <div
            className="lg:hidden cursor-pointer"
            onClick={handleToggle}
          >
            {!isNavbarToggle ? <HiMenuAlt4 size={25} /> : <AiOutlineClose size={25} />}
          </div>
          <div className="hidden lg:flex items-center gap-3">
            <BsBookmarkPlus size={25} />
            <div className="w-10 h-10 border border-secondary bg-[#2E1D20] rounded-full"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
