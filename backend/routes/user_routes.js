const express = require("express");
const router = express.Router();
const {
  register,
  getAllUsers,
  getUser,
  deleteOneUser,
  deleteAllUsers,
  login,
  githubAccessToken,
  addFavMovie,
  removeFavMovie
} = require("../controllers");

// Route to register/login a user
router.get("/getaccesstoken", githubAccessToken);
router.post("/auth/register", register);
router.post("/auth/login", login);

// Routes for user operations
router.patch("/addfav", addFavMovie);
router.delete("/removefav", removeFavMovie);
router.get("/", getAllUsers);
router.delete("/", deleteAllUsers);
router.get("/:id", getUser);
router.delete("/:id", deleteOneUser);

module.exports = router;
