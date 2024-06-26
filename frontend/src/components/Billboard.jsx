import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { PlayButton } from "./PlayButton";
import { getRandomMovie } from "../state_manager/movies/movieSlice";
import { InfoModal } from "./InfoModal";

export default function Billboard() {
  const dispatch = useDispatch();
  const movie = useSelector((store) => store.movie.currentMovie);
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };
  useEffect(() => {
    dispatch(getRandomMovie());
  }, [dispatch]);

  if (!movie) {
    return null;
  }

  const { title, description, thumbnailUrl, videoUrl } = movie;

  return (
    <div className="relative h-[56.25vw]">
      <video
        className="w-full h-[56.25vw] object-cover brightness-[60%]"
        autoPlay
        muted
        loop
        poster={thumbnailUrl}
        src={videoUrl}
      ></video>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          {title}
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {description}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <PlayButton movie={movie} />
          <button
            onClick={handleOpenModal}
            className="bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition"
          >
            <AiOutlineInfoCircle className="w-4 md:w-7 mr-1" />
            More Info
            <InfoModal visible={modalVisible} onClose={handleCloseModal} data={movie}/>
          </button>
        </div>
      </div>
    </div>
  );
}
