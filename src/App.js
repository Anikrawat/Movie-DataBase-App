import React from 'react'
import SingleMovie from './components/SingleMovie'
import Home from './components/Home'  
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="movie/:id" element={<SingleMovie/>} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App


