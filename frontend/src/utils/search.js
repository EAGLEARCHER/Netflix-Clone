/**
 * Function to search for movies and return titles that match a search query.
 * @param {string} query - The search query.
 * @param {Array} movies - The array of movie objects.
 * @returns {Array} - An array of movie titles that match the search query.
 */
export default function searchMovies(query, movies) {
  const regex = new RegExp(query, "i");
  const matchingMovies = movies.filter(
    (movie) =>
      regex.test(movie.title) ||
      regex.test(movie.description) ||
      regex.test(movie.genre)
  );

  return matchingMovies;
}
