
import {Link} from "react-router-dom"

const ChannelCard = ({channel}) => {
  return (
 <Link to={`/channel/${channel?.snippet?.channelId}`}> 

 <div className="min-h-[320px] flex flex-col justify-center items-center
  w-[300px]">
  <img src={channel?.snippet?.thumbnails?.high?.url} className=" h-[200px]
  w-[200px] object-cover rounded-full "/>
  <h1 className="font-bold text-2xl  my-2">{channel?.snippet?.title}</h1>
  
  
  </div>
  </Link>
  )
}

export default ChannelCard;