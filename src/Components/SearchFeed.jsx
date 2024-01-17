
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"
import {fetchFromAPI} from "../assets/fetchFromAPI";
import {VideoCard} from "./"

const SearchFeed = () => {
 
 const [videos, setVideos] = useState([]);
 
  const {searchTerm} = useParams();
  
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data)=>{setVideos(data.items)})
  }, [searchTerm]);
  
  return (
   
   <>
   <h1 className="text-red-600 text-3xl m-5"><span className="text-white">{searchTerm}</span> Videos</h1>
   
  <div className="flex flex-wrap justify-center p-2 gap-3 ">
  {videos.map((item,i)=>{
   return <VideoCard video={item}/>
  })}
  </div>
  </>
  )
}

export default SearchFeed;