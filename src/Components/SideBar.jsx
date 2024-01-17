
import {logo,categories } from "../assets/Data.jsx"

import { useState } from "react";

const SideBar = ({setActiveCategory, activeCategory}) => {
  
  
  return (
  <div className=" min-w-[22%] h-[100px]  sm:h-[100%]  overflow-y-auto flex
   sm:flex-row md:flex-col
  items-center">
  
  {categories.map((elem, i)=>{
    return (
    <div key={i} className={`flex my-2 w-[90%] p-2 rounded-full gap-2
    cursor-pointer
    ${activeCategory == elem.name ? "bg-red-600" : ""}
    `}
    onClick={()=>{setActiveCategory(elem.name)}}>
    
    <i className={`${activeCategory == elem.name ? "text-white" : "text-red-600"}`}>{elem.icon}</i>
      <h1>{elem.name}</h1>
      </div>
      )
  })}
  
  </div>
  )
}

export default SideBar;