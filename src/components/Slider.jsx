import { useEffect, useState } from "react";
import requests from "../Requests";
import { AiFillStar } from "react-icons/ai";

// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles and css
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import axios from "axios";

const toMonthName = (monthNumber) => {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  return date.toLocaleString("en-US", {
    month: "long",
  });
};

const Slider = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(requests.requestPopular)
      .then((response) => setItems(response.data.results));
  }, []);

  console.log(items);

  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Autoplay, A11y]}
        slidesPerView={1}
        /* navigation */
        pagination={{ clickable: true }}
        autoplay
      >
        {items.map((item) => (
          <SwiperSlide key={item?.id} style={{ height: "60vh" }}>
            <div
              className="slider__image flex flex-col justify-end items-center h-full w-full text-white"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://image.tmdb.org/t/p/original${item?.backdrop_path})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
              }}
            >
              <h1 className="text-2xl md:text-4xl font-large mb-2">
                {item?.title}
              </h1>
              <p className="text-gray-300 text-sm md:text-lg mb-2">
                ( {item?.release_date.substring(0, 4)}{" "}
                {toMonthName(parseInt(item?.release_date.substring(5, 7)))} )
              </p>
              <p className="text-gray-300 text-sm mb-2 text-center">
                {item?.genre_ids.map((item, index) => {
                  <span className="slider__genre"></span>;
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
              <p className="flex gap-1 items-center text-white text-lg mb-[50px]">
                {item?.vote_average}
                <AiFillStar className="text-[#ffeb15] pb-[1px]" />
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
