
import ReactPlayer from "react-player"
import {useParams} from "react-router-dom"
import { useState, useEffect } from "react";
import {fetchFromAPI} from "../assets/fetchFromAPI";
import {Link} from "react-router-dom";
import {VideoCard} from "./"
const VideoDetails = () => {
  
  const {id} = useParams()
  
const [videos, setVideos] = useState([]);
 
  const [videoData, setVideoData] = useState(null);

  
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statististics&id=${id}`).then((data)=>{setVideoData(data.items[0])});
    
    fetchFromAPI(`search?part=snippet&
    relatedToVideoId=${id}&type=video`).then((data)=>{setVideos(data?.items)});
 
    console.log(videos)
  }, [id]);
  
 
// const { snippet : {title, channelId , channelTitle}, statistics : {viewCount , likeCount}} = videoData;
  
  return (
    <div className=" flex flex-col md:flex-row ">
  <div className="w-[100vw]">
  <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls
  className="react-player"
  />
<h1 className="text-xl p-2 font-bold">{videoData?.snippet?.title} {console.log(videoData)} </h1>
 
 <div className="flex justify-between m-2">
 <h1 > <Link to={`/channel/${videoData?.snippet?.channelId}`}> {videoData?.snippet?.channelTitle} </Link></h1>
 <div className="flex gap-[20px]">
<h1> {parseInt(videoData?.statistics?.viewCount).toLocaleString()} View
 </h1>
 
<h1> {parseInt(videoData?.statistics?.likeCount).toLocaleString()} Links
 </h1>
 </div>
 </div>
   
  </div>
  <div className="flex flex-col gap-3 overflow-y-auto h-[90vh] p-2 items-center">
 {videos.map((item,i)=>{
   return <VideoCard video={item}/>
 })}
 </div>
 </div>
  )
}

export default VideoDetails;