import React, { Component } from 'react'



export default class Card extends Component {

  


  // async componentDidMount(props){
  //   let url = `http://api.weatherapi.com/v1/current.json?key=186266bbbfb74fde90e15954230709&q=${props.loc}`
  //   let data = await fetch(url)
  //   let parsedData = await data.json()
  //   console.log(parsedData)
  // }

  render() {
    let fetchLoc = () => {
      let location = document.getElementById('searchInput').value
      return location
    }
    
    return (
      <>
      <div className='container d-flex justify-content-center'>
        <div className="card" style={{width: '20rem'}}>
            <img src="https://www.skymetweather.com/content/wp-content/uploads/2013/05/Weather-forecast-for-the-week-in-India.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{fetchLoc}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        </div>
      </>
    )
  }
}
