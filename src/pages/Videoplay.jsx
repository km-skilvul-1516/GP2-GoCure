import Card from "../components/Card";
import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";
import NavbarRow from "../components/NavbarRow";

const Videoplay = () => {
    const { id } = useParams();
    const [videos, setVideos] = useState([]);
    const [selectedVideo, _setVideos] = useState([]);

    const [otherVideo1, setOtherVideo1] = useState([]);
    const [otherVideo2, setOtherVideo2] = useState([]);
    const [otherVideo3, setOtherVideo3] = useState([]);

    function getRandomWithOneExclusion(lengthOfArray,indexToExclude){
        let rand = null;  //an integer

        while(rand === null || rand === indexToExclude){
            rand = Math.round(Math.random() * (lengthOfArray - 1));
        }      
        return rand;
    }

    useEffect(() => {
        axios
        .get(
            `https://618bd026ded7fb0017bb9232.mockapi.io/youtube`
        )
        .then((response) => {
            setVideos(response.data);
        });
    }, []);

    useEffect(() => {
        if (videos) {
            const selectedVideo = videos.find(vid => vid.id === id);
            _setVideos(selectedVideo);
        }
    },[videos, id]);

    // Generate random article
    useEffect(() => {
        setOtherVideo1(getRandomWithOneExclusion(10, id))
        setOtherVideo2(getRandomWithOneExclusion(9, otherVideo1))
        setOtherVideo3(getRandomWithOneExclusion(8, otherVideo2))
    },[videos, id]);
    
    return (
        <div>
            {/* PLACE VIDEO HERE */}
            <div className="px-5 md:px-12 lg:px-28 flex justify-center mt-10">
                <iframe 
                    className="w-full h-64 md:h-96" 
                    title="myFrame"
                    allowFullScreen="allowFullScreen"
                    frameBorder="0"
                    src={selectedVideo && selectedVideo.youtubeLink}>
                </iframe>  
            </div>

            {/* ADJUST WIDTH */}
            <div className="px-5 md:px-12 lg:px-28 xl:px-30 2xl:px-60">
                <div className="pt-10 pb-20 grid grid-cols-1 md:grid-cols-3 gap-x-6">

                    {/* CONTENT */}
                    <div className="col-span-2 text-sm md:text-md leading-relaxed text-justify">
                        <div className="pb-2 font-bold text-2xl">
                            {selectedVideo && selectedVideo.title}
                        </div>
                        <div className="pt-2 pb-6 block">
                            <p className="text-sm font-bold">Salman Setiawan</p>
                            <p className="text-xs pt-2">Kamis, 24 Oktober 2021</p>
                        </div>
                        <div className="border-t-2 pt-6">
                            {selectedVideo && selectedVideo.description}
                        </div>
                    </div>
                    
                    {/* OTHER ARTICLE */}
                    <div className="pl-0 lg:pl-10 pt-10 md:pt-0 text-md">
                        <div className="font-bold">
                            Other Videos
                        </div>
                        <div className="pt-3">
                            <div className="pt-2 md:pt-3">
                                {videos.length === 0 ? <div>Loading</div> : <Card
                                    key={videos[otherVideo1].id}
                                    title={videos[otherVideo1].title}
                                    image={videos[otherVideo1].imageLink}
                                    id={videos[otherVideo1].id}
                                    category="videos"
                                />}
                            </div>
                            <div className="pt-2 md:pt-3">
                                {videos.length === 0 ? "" : <Card
                                    key={videos[otherVideo2].id}
                                    title={videos[otherVideo2].title}
                                    image={videos[otherVideo2].imageLink}
                                    id={videos[otherVideo2].id}
                                    category="videos"
                                />}
                            </div>
                            <div className="pt-2 md:pt-3">
                                {videos.length === 0 ? "" : <Card
                                    key={videos[otherVideo3].id}
                                    title={videos[otherVideo3].title}
                                    image={videos[otherVideo3].imageLink}
                                    id={videos[otherVideo3].id}
                                    category="videos"
                                />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="botbar flex w-full justify-center pb-6 md:pb-8">
                <div className="bg-white px-2.5 md:px-3 lg:px-4 rounded-full border border-gray-700">

                    <NavbarRow />
                </div>
            </div>
        </div>
    )
}

export default Videoplay
