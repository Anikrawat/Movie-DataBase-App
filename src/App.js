import React, { Component } from 'react'
import Navbar from "./components/Navbar";
import Cards from "./components/Card";
import Weather from "./components/Weather";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <Cards/>
        <Weather/>
      </>
    )
  }
}

