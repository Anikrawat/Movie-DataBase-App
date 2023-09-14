import React from 'react'
import {useGlobalContext } from './context';
import MovieCards from './MovieCards';
import './Cards.css'
import Loading from './Load.gif'


function MovieTime() {
    const {Movie,isLoading} = useGlobalContext();

    if (isLoading === true) {
        return (
            <div className="d-flex justify-content-center">
            <img src={Loading} alt="ohyeah" />
            </div>
        );
    }
    return (
    <>
    <div className="Cards d-flex flex-wrap justify-content-center">
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
