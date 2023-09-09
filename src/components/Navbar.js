import React from 'react'

function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body " style={{backgroundColor: 'black',}}>
      <div className="container-fluid ">
      <a className="navbar-brand text-white" href="/">{props.Title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-white"></span>
    </button>
  </div>
</nav>
    </>
  )
}

export default Navbar
