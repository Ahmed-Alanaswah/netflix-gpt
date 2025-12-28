import React from "react";
import SearchBar from "./SearchBar";
import GptMoviesList from "./GptMoviesList";
import { Login_Img } from "../utils/constants";
const GptSection = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={Login_Img} alt="logo" />
      </div>
      <div className="pt-[10%]">
        <SearchBar />
        <GptMoviesList />
      </div>
    </div>
  );
};

export default GptSection;
