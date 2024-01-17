
import axios from "axios";
import { useState, useEffect } from "react";
import {fetchFromAPI} from "../assets/fetchFromAPI";

import {ChannelCard, VideoCard} from "./"

const ContentArea = ({activeCategory}) => {
  
  const [videos, setVideos] = useState([]);


useEffect(() => {
  
   fetchFromAPI(`search?part=snippet&q=${activeCategory}`).then((data)=>{setVideos(data.items)})
   
   
 }, [activeCategory]);


  return (
    
  <div className="h-[100%] overflow-y-auto">
  <h1 className="text-red-600 p-2 text-3xl"><span className="text-white">   
  {activeCategory}
  </span> videos </h1>
  
  <div className="flex flex-wrap gap-3 p-2 justify-center gap-[25px]" >
  
   
   {videos.map((item,i)=>{
    return(
      <div key={i} className="flex ">
 <div> {  item.id.videoId && <VideoCard video={item}/> } </div>
  
  <div>{ item.id.channelId && <ChannelCard  channel={item}/>}</div>
      </div>
      )
  })}
  </div>
  
  
  </div>
  )
  
}

export default ContentArea;