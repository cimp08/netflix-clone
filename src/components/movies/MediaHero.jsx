import axios from "axios";
import React, { useEffect, useState } from "react";
import { toMonthName, truncateString } from "../../constants/functions";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import requests from "../../Requests";

const MediaHero = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    axios.get(requests.requestMovieDetail(movieId)).then((response) => {
      setMovie(response.data);
    });
  }, [movieId]);

  return (
    <div
      className="bg-cover min-h-[60vh] animate__animated animate__fadeIn"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
      }}
    >
      <div className="container mx-auto pt-[80px] pb-5 px-[20px] md:px-0">
        <div className="flex flex-col md:flex-row justify-center gap-10">
          <div className="">
            <img
              className="w-[300px] sm:w-[350px] rounded mt-10"
              src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
              alt={movie?.title}
            />
          </div>
          <div className="md:w-[60%] flex flex-col text-white justify-center">
            <h2 className="font-bold text-2xl md:text-4xl mb-1">
              {movie?.title}{" "}
            </h2>
            <p className="text-gray-300 text-lg md:text-2xl mb-3">
              {movie?.release_date?.substring(0, 4)}{" "}
              {toMonthName(parseInt(movie?.release_date?.substring(5, 7)))}
            </p>
            <ul className="text-gray-300 text-lg mb-3 inline-flex">
              {movie?.genres?.map((genre, index) => (
                <li
                  key={index}
                  className="not-first:border-l not-first:border-white not-first:pl-3 not-last:pr-3"
                >
                  {genre.name}
                </li>
              ))}
            </ul>
            <h3 className="flex gap-1 items-center text-white text-lg mb-5">
              {movie?.vote_average === 0 ? (
                <p className="text-gray-300">No Rating</p>
              ) : (
                <p className="flex gap-1 items-center">
                  {movie?.vote_average}{" "}
                  <AiFillStar className="text-[#ffeb15] pb-[1px]" />
                </p>
              )}
            </h3>
            <h3 className="text-lg md:text-xl mb-3">Overview</h3>
            <p className="text-lg md:text-xl leading-relaxed">
              {truncateString(movie?.overview, 500)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaHero;
