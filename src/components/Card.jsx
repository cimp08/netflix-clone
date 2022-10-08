import React from "react";

const Card = ({ item }) => {
  return (
    <div className="w-[160px] h-[232px] sm:w-[200px] sm:h-[292px] md:w-[240px] md:h-[352px] lg:w-[240px] lg:h-[352px] inline-block cursor-pointer relative p-2 animate__animated animate__fadeIn">
      <img
        className="w-full h-full block"
        src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
        alt={item?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <div className="h-full flex flex-col justify-center items-center">
          <p className="whitespace-normal text-sm md:text-base font-bold text-center mx-3">
            {item?.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
