import React from 'react'
import {useGlobalContext } from './context';
import MovieCards from './MovieCards';
import './Cards.css'

function MovieTime() {
    const {Movie} = useGlobalContext();
    return (
    <>
    <div className="Cards">
    {Movie.map((curr) => {
        return (
            <MovieCards Name = {curr.Title} Posters = {curr.Poster} Date = {curr.Year} id = {curr.imdbID}/>
            
            );
        })}
    </div>
    </>
  )
}

export default MovieTime 