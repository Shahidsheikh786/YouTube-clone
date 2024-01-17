
import {useParams} from "react-router-dom"
import {fetchFromAPI} from "../assets/fetchFromAPI"
import { useState, useEffect } from "react";
import {ChannelCard , VideoCard} from "./"

const ChannelDetails = () => {

  const {id} = useParams()
  
  const [channelVideos, setChannelVideos] = useState([]);
  
  const [channelDetails, setChannelDetails] = useState(null);
 
 
 
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet
    &id=${id}`).then((data)=>{setChannelDetails(data?.items[0])});
    
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data)=>{setChannelVideos(data.items)});
    
    console.log(channelDetails)
  }, [id]);
  
  
  return (
  <div>
  
  <div className="h-[200px] bg-gradient-to-r from-purple-400 via-pink-500
  to-red-500 "></div>
  
  <div className="w-full flex justify-center  -mt-[120px]" ><ChannelCard channel={channelDetails}
  className="mx-auto" /></div>
  
  <div className="flex flex-wrap justify-center gap-7 p-4">
  {channelVideos.map((item, i)=>{
   return <VideoCard video={item}/>
  })}

  </div>
  
  </div>
  )
}

export default ChannelDetails;