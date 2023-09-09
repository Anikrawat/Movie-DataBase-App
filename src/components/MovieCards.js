import React from 'react'
import './Cards.css'

export default function MovieCards(props) {
  return (
    <>
    
      <div className="card" style={{width: '20rem'}}>
        <img src={props.Posters} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title"><strong>Movie Name:</strong> {props.Name}</h5>
        <h5 className="card-title"><strong>Year Of Release:</strong> {props.Date}</h5>
        <h5 className="card-title"><strong>imdbId:</strong> {props.id}</h5>
        </div>
    </div>
    </>
  )
}
