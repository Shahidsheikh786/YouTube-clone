
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';

import {logo} from "../assets/Data.jsx"

const Navbar = () => {
  
  const navigate = useNavigate();
  
  const [searchTerm, setSearchTerm] = useState("");
  
 const handleSearch = (e) =>{
   
    if(searchTerm){
      console.log(searchTerm)
      navigate(`/search/${searchTerm}`)
      setSearchTerm('')
    }
  }
  
  
  return (
  <div className=" p-3 flex justify-between items-center h-[80px]">
 
 <Link to="/">  <img src={logo} alt="Logo" className="h-[40px] w-[40px] "/>  </Link>
   
   <div className="search relative">
   
   <input placeholder="Search ..." className=" bg-black border rounded-full p-2
   px-3 w-[200px] md:w-[400px] pr-8" value={searchTerm}
   onChange={(e)=>{setSearchTerm(e.target.value)}}/>
   
    <SearchIcon className="absolute top-2 right-2 searchIcon"
    onClick={handleSearch}/> 

   </div>
  </div>
  
  )
}

export default Navbar;