import { useState } from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components 


import {Navbar , Main , ChannelDetails, SearchFeed, VideoDetails } from "./Components";



function App() {
 
 
  return (
    <BrowserRouter>
    <div className="min-h-[100vh] h-[100vh] max-h-[100vh]">
      <Navbar/>
      <Routes>
     <Route path="/" element={<Main/>}/>
     <Route path="/video/:id" element={<VideoDetails/>}/>
     <Route path="/channel/:id" element={<ChannelDetails/>}/>
     <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
    </Routes>
    </div>
          </BrowserRouter>
  )
}

export default App
