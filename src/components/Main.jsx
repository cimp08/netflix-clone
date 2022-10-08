import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import requests from "../Requests";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

const Main = () => {
  const [shows, setShows] = useState([]);

  // Get a show random from shows
  const show = shows[Math.floor(Math.random() * shows.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setShows(response.data.results);
    });
  }, []);

  console.log(show);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="h-[100vh]">
      <FaRegArrowAltCircleDown className="absolute bottom-10 right-20 text-[#ffeb15] text-4xl animate__animated animate__bounceInRight cursor-pointer" />

      <div
        className="flex flex-col justify-center items-center h-full w-full bg-no-repeat bg-cover bg-top text-white"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(2,0,36,1) 10%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,0.577468487394958) 100%), url(https://image.tmdb.org/t/p/original${show?.backdrop_path})`,
        }}
      >
        <div className="container">
          <div className="flex flex-wrap gap-10 justify-center w-full">
            <div>
              <img
                className="rounded w-[200px] md:w-[220px] lg:w-[380px] "
                src={`https://image.tmdb.org/t/p/w500${show?.poster_path}`}
                alt={show?.title}
              />
            </div>
            <div className="flex flex-col justify-center max-w-[500px]">
              <h1 className="font-bold text-xl md:text-4xl">
                {show?.title}
                <span className="text-gray-300 text-base md:text-2xl">
                  {" "}
                  ({show?.release_date.substring(0, 4)})
                </span>
              </h1>
              <p className="text-gray-300 text-sm mt-4">
                {show?.genre_ids.map((item, index) => {
                  switch (item) {
                    case 28:
                      return (
                        <span
                          key={index}
                          className="not-first:border-l not-first:border-white not-first:pl-3 not-last:pr-3"
                        >
                          Action
                        </span>
                      );
                    case 12:
                      return (
                        <span
                          key={index}
                          className="not-first:border-l not-first:border-white not-first:pl-3 not-last:pr-3"
                        >
                          Adventure
                        </span>
                      );
                    case 16:
                      return (
                        <span
                          key={index}
                          className="not-first:border-l not-first:border-white not-first:pl-3 not-last:pr-3"
                        >
                          Animation
                        </span>
                      );
                    case 35:
                      return (
                        <span
                          key={index}
                          className="not-first:border-l not-first:border-white not-first:pl-3 not-last:pr-3"
                        >
                          Comedy
                        </span>
                      );
                    case 80:
                      return (
                        <span
                          key={index}
                          className="not-first:border-l not-first:border-white not-first:pl-3 not-last:pr-3"
                        >
                          Crime
                        </span>
                      );
                    case 99:
                      return (
                        <span
                          key={index}
                          className="not-first:border-l not-first:border-white not-first:pl-3 not-last:pr-3"
                        >
                          Documentary
                        </span>
                      );
                    case 18:
                      return (
                        <span
                          key={index}
                          className="not-first:border-l not-first:border-white not-first:pl-3 not-last:pr-3"
                        >
                          Drama
                        </span>
                      );
                    case 10751:
                      return (
                        <span
                          key={index}
                          className="not-first:border-l not-first:border-white not-first:pl-3 not-last:pr-3"
                        >
                          Family
                        </span>
                      );
                    case 14:
                      return (
                        <span
                          key={index}
                          className="not-first:border-l not-first:border-white not-first:pl-3 not-last:pr-3"
                        >
                          Fantasy
                        </span>
                      );
                    case 36:
                      return (
                        <span
                          key={index}
                          className="not-first:border-l not-first:border-white not-first:pl-3 not-last:pr-3"
                        >
                          History
                        </span>
                      );
                    case 27:
                      return (
                        <span
                          key={index}
                          className="not-first:border-l not-first:border-white not-first:pl-3 not-last:pr-3"
                        >
                          Horror
                        </span>
                      );
                    case 10402:
                      return (
                        <span
                          key={index}
                          className="not-first:border-l not-first:border-white not-first:pl-3 not-last:pr-3"
                        >
                          Music
                        </span>
                      );
                    case 9648:
                      return (
                        <span
                          key={index}
                          className="not-first:border-l not-first:border-white not-first:pl-3 not-last:pr-3"
                        >
                          Mystery
                        </span>
                      );
                    case 10749:
                      return (
                        <span
                          key={index}
                          className="not-first:border-l not-first:border-white not-first:pl-3 not-last:pr-3"
                        >
                          Romance
                        </span>
                      );
                    case 878:
                      return (
                        <span
                          key={index}
                          className="not-first:border-l not-first:border-white not-first:pl-3 not-last:pr-3"
                        >
                          Science Fiction
                        </span>
                      );
                    case 10770:
                      return (
                        <span
                          key={index}
                          className="not-first:border-l not-first:border-white not-first:pl-3 not-last:pr-3"
                        >
                          Tv Movie
                        </span>
                      );
                    case 53:
                      return (
                        <span
                          key={index}
                          className="not-first:border-l not-first:border-white not-first:pl-3 not-last:pr-3"
                        >
                          Thriller
                        </span>
                      );
                    case 10752:
                      return (
                        <span
                          key={index}
                          className="not-first:border-l not-first:border-white not-first:pl-3 not-last:pr-3"
                        >
                          War
                        </span>
                      );
                    case 37:
                      return (
                        <span
                          key={index}
                          className="not-first:border-l not-first:border-white not-first:pl-3 not-last:pr-3"
                        >
                          Western
                        </span>
                      );
                    default:
                      return "No genre";
                  }
                })}
              </p>
              <p className="mt-2 text-gray-300 text-md">
                Rating:{" "}
                <span className="text-[#ffeb15] text-bold">
                  {show?.vote_average}
                </span>{" "}
                of{" "}
                <span className="text-[#ffeb15]" text-bold>
                  {show?.vote_count}
                </span>{" "}
                votes
              </p>
              <p className="hidden md:inline md:text-xl md:mt-8">Overview</p>
              <p className="hidden md:inline md:text-xl leading-relaxed md:mt-3">
                {truncateString(show?.overview, 150)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
