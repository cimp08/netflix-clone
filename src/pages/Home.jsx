import React from "react";
import Slider from "../components/Slider";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <>
      <Slider />
      <Row rowID="1" title="Coming Soon" fetchURL={requests.requestUpcoming} />
      <Row rowID="2" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowID="3" title="Trending" fetchURL={requests.requestTrending} />
      <Row rowID="4" title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row rowID="5" title="Horror" fetchURL={requests.requestPopular} />
    </>
  );
};
export default Home;
