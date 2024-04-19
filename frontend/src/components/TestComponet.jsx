import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const TestComponent = () => {
  const [searchQuery, setSearchQuery] = useState(""); // Local state for search query
  const [filterMovie, setFilterMovie] = useState([]);
  // Access the list of movies from Redux store
  const movies = useSelector((store) => store.movie.allMovies);

  // Filter the list of movies based on the search query
  const filteredMovies = () => {
    movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };
  useEffect(() => {
    console.log("asdad");
    filteredMovies();
    console.log(filteredMovies());
  }, [searchQuery]);
  return (
    <div>
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="p-2 pb-0 border rounded-md w-full mb-4"
      />

      {/* Displaying the Search Results */}
      <div className="w-100 max-h-max bg-gray-300">
        {filterMovie?.map((movie) => {
          <div>{movie}</div>;
        })}
      </div>
    </div>
  );
};

export default TestComponent;
