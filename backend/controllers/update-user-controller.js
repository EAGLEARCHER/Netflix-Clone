const { StatusCodes } = require("http-status-codes");
const User = require("../models/user_model");
const { BadRequestError, UnauthenticatedError } = require("../errors/");
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
const removeFavMovie = async (req, res) => {
  try {
    const { userId, movieId } = req.body;

    if (!userId || !movieId) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "Invalid input data" });
    }

    const user = await User.findByIdAndUpdate(
      userId,
      {
        $pull: { favoriteIds: movieId },
      },
      {
        new: true,
        select: "favoriteIds",
      }
    );

    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).json({ msg: "User not found" });
    }

    return res.status(StatusCodes.OK).json(user.favoriteIds);
  } catch (error) {
    console.error(error);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Server error" });
  }
};

module.exports = { addFavMovie, removeFavMovie };
