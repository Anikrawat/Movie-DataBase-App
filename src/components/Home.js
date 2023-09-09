import React from 'react'
import MovieTime from './MovieTime'
import Navbar from "./Navbar";
import SearchBar from './SearchBar';

function Home() {
  return (
    <>
      <Navbar Title = {"Movies For You"}/>
      <SearchBar/>
      <MovieTime/>
    </>
  )
}

export default Home
