import React from 'react'

export default function Header(props) {
    return (
        <>
        <nav className="navbar navbar-expand-lg" style={{
          backgroundColor:"#032039",
         
        }}>
      <div className="container-fluid"
      style={{
        fontSize:"20px",
        fontStyle:"italic",
        color:"red",
        fontWeight:"bolder"
       
      }}>
        <a style={{color:"white"}} className="navbar-brand" href="#">TMDB</a>
        <button style={{color:"white"}} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div  className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a style={{color:"white"}} className="nav-link active" aria-current="page" href="#">Movies</a>
            </li>
            <li className="nav-item">
              <a style={{color:"white"}} className="nav-link" href="#">TV shows</a>
            </li>
            <li className="nav-item">
              <a style={{color:"white"}} className="nav-link" href="#">People</a>
            </li>
            <li className="nav-item">
              <a style={{color:"white"}} className="nav-link" href="#">more</a>
            </li>


          </ul>
          {<form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>}
        </div>
      </div>
    </nav>
    
      
         </>);
    
}
