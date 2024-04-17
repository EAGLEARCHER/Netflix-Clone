import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Billboard from "../components/Billboard";
import { MovieList } from "../components/MovieList";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const isValidUser = localStorage.getItem("access_token");
  const categories = useSelector((store) => store.movie.categories);
  console.log(categories);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isValidUser) {
      navigate("/");
    }
  });
  return (
    <>
      <Navbar />
      <Billboard />
      {categories.map((category) => {
        return <MovieList title={category} />;
      })}
    </>
  );
}
