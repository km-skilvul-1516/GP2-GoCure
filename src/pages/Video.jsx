import CardVideo from "../components/CardVideo";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import React, {useState, useEffect} from "react";
import axios from "axios";
import {LoadingPage} from "./LoadingPage"

const Video = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://618bd026ded7fb0017bb9232.mockapi.io/youtube`
      )
      .then((response) => {
        setVideos(response.data);
      });
  }, []);

  console.log(videos)

  // loading
  if(videos.length === 0){
    return (
      <LoadingPage/>
    )
  }

  return (
    <div>
      <div className="flex justify-center gap-x-4 md:gap-x-8 px-3 sm:px-4 lg:px-40 xl:px-60 2xl:px-96 py-3">
        <div className="pr-10 md:pr-16 lg:pr-0 w-full">
          <Header name="Videos" pic="video-header.svg" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-4">
            {videos && videos.map((vid) => (
              <CardVideo
                key={vid.id}
                title={vid.title}
                image={vid.imageLink}
                id={vid.id}
                category="videos"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="sidebar flex items-center pr-1 md:pr-6 lg:pr-24 xl:pr-44 py-40 xl:py-64">
        <Navbar />
      </div>
    </div>
  );
};

export default Video;