import React, { useState, useEffect, useCallback } from "react";
import { IoMdClose } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import searchMovies from "../utils/search";
import { useSelector } from "react-redux";
import { InfoModal } from "./InfoModal";

const SearchBar = ({ changeBar }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const allMovies = useSelector((store) => store.movie.allMovies);
  const [modalVisible, setModalVisible] = useState(false);
  const handleBar = useCallback(() => {
    setIsExpanded(false);
    changeBar(false);
  }, [changeBar]);

  const handleChange = useCallback(
    (event) => {
      const { value } = event.target;
      setSearchTerm(value);
      setFilteredMovies(searchMovies(value, allMovies));
    },
    [allMovies]
  );

  useEffect(() => {
    setIsExpanded(true);
  }, []);
  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };
  const handleMovieClick = () => {
    handleOpenModal();
  };
  const baseClass = "relative transition-all ease-in-out duration-500";
  const expanded = "w-80";
  const collapsed = "w-20";
  const containerClass = `${baseClass} ${isExpanded ? expanded : collapsed}`;

  return (
    <div className={containerClass}>
      <BsSearch className="absolute fa fa-search text-gray-400 top-5 left-4" />
      <input
        type="text"
        className="bg-zinc-800 text-white h-14 w-full px-12 rounded-lg focus:outline-none text-gray-800"
        name="searchbar"
        value={searchTerm}
        onChange={handleChange}
      />
      <span className="absolute top-4 right-5 border-l pl-4">
        <IoMdClose
          className="fa fa-microphone text-gray-500 hover:text-green-500 hover:cursor-pointer"
          onClick={handleBar}
        />
      </span>

      {/* Display filteredMovies results */}
      {filteredMovies.length > 0 && (
        <div className="bg-zinc-900 text-white mt-2 p-2 rounded-lg shadow-lg absolute top-14 left-0 w-full z-10 w-100 h-80 overflow-y-scroll hide-scroll-bar">
          {filteredMovies.map((movie, index) => (
            <div
              className="py-2 px-4 hover:bg-zinc-700 cursor-pointer rounded-lg"
              onClick={() => handleMovieClick(movie)}
            >
              <div key={movie.movieId}>{movie.title}</div>
              <div key={movie.movieId}>{movie.description}</div>
              <hr className="pt-1" />
              <InfoModal
                visible={modalVisible}
                onClose={handleCloseModal}
                data={movie}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
