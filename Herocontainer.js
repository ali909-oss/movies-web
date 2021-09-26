import React from 'react'
import './Herocontainer.css' 

function Herocontainer() {
    return (
        <div
        className="hero-container"
        >
           <h2 style={{
               color: "white",
               marginTop:'1px',
               paddingTop:'15px',
               fontSize:'65px',
               paddingLeft:'15px'
           }}>Welcome.</h2> 
           <div className="hero-btns">
              <p style={{paddingLeft:'10px'}}>Millions of movies, TV shows and people to discover. Explore now.</p>
           </div>
           <div style={{paddingTop:'40px',width:'100%'}}>
           <form className="d-flex">
            <input style={{paddingBottom:"10px",borderRadius:'18px',position:'relative'}} className="form-control me-4" type="search" placeholder="Search for a name of movie" aria-label="Search"/>
            <input className="sub" type="submit" value="Search"></input>
            </form>
            </div>
            
            

    
            
            
          
          
        

            
            
        </div>
    )
}

export default Herocontainer
