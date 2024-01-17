

import {SideBar, ContentArea} from "./"

import { useState } from "react";
const Main = () => {
  
  const [activeCategory , setActiveCategory ] = useState("New");
  
  
  return (
  <div className="block md:flex main-body h-[100vh] ">
  <SideBar setActiveCategory={setActiveCategory} activeCategory={activeCategory}/>
  
  <ContentArea activeCategory={activeCategory} />
  </div>
  )
}

export default Main;