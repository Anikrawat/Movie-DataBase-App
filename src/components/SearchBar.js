import React from 'react'
import { useGlobalContext } from './context';

function SearchBar() {
    let {setTitle,Title} = useGlobalContext()

    const fetchValue = (e) => {
        setTitle(e.target.value)
    }
  return (
    <>
      <div className="d-flex justify-content-center"style={{margin: '20px 0px'}}> 
      <div className="d-flex">
      <input className="form-control me-2" id='searchBar' type="text" placeholder="Search" aria-label="Search" onChange={fetchValue} value={Title}/>
      </div>
      </div> 
    </>
  )
}

export default SearchBar
