const { StatusCodes } = require("http-status-codes");
const User = require("../models/user_model");
const addFavMovie = async (req, res) => {
  const userId = req.body.userId;
  const movieId = req.body.movieId;
  if (!userId || !movieId) {
    return res.status(400).json({ msg: "Invalid input data" });
  }

  const user = await User.findById(userId);

  if (!user) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ msg: "User not found" });
  }

  if (user.favoriteIds.includes(movieId)) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Movie is already in favorites" });
  }

  user.favoriteIds.push(movieId);
  await user.save();

  return res.status(StatusCodes.OK).json(user);
};

module.exports = { addFavMovie };
