

import {Link} from "react-router-dom"

const VideoCard = ({video}) => {
  return (
 <Link onClick={()=> window.scrollTo(0,0)} to={`/video/${video.id.videoId}`}> 
 <div className="w-[ 480px ] max-w-[300px] min-h-[320px] border flex flex-col
 flex-wrap">
  <img src={video.snippet.thumbnails.high.url} className="h-[180px] w-[300px]
  object-cover" />
  <h1 className="p-2 font-bold flex w-[100%] overflow-x-auto">{video.snippet.title}</h1>
  <h1 className="p-2 font-bold text-[#747474]">{video.snippet.channelTitle}</h1>
  
  
  
  </div>
  </Link>
  )
}

export default VideoCard;