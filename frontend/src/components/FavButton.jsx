import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";
import { addFav } from "../state_manager/user/userSlice";

const FavoriteButton = ({ movieId }) => {
  const favorites = useSelector((state) => state.user.favorites);
  const [isFavorite, setIsFavorite] = useState(favorites.includes(movieId));
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.userId);

  const handleToggleFavorites = () => {
    dispatch(addFav({ userId, movieId }));
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    setIsFavorite(favorites.includes(movieId));
  }, [favorites, movieId]);

  const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus;

  return (
    <div
      onClick={handleToggleFavorites}
      className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"
    >
      <Icon className="text-white transition delay-500" size={25} />
    </div>
  );
};

export default FavoriteButton;
