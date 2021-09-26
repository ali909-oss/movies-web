import React from 'react'
import "./SecondFooter.css"

function SecondFooter() {
    return (
       <div className="flex-container">
        <div
        className="hero-containers"
        >
           <h1 style={{
               color: "white",
               marginBottom:'10px',
               paddingTop:'20px',
               paddingLeft:"7px",
               

           }}>Join today</h1> 
           <h3 style={{ display:"flex",fontSize:'18px',
               color: "white"}}> Get access to maintain your own custom personal lists, track what you've seen and search and filter for what to watch next regardless if it's in theatres, on TV or available on popular streaming services like .</h3>
               <br/>
               <button className="button" style={{borderRadius:'25px',backgroundColor:'purple'}}>Sign-up</button>
          
            
            
        </div>
        <div
        className="hero-containers"
        >
            <p style={{color:"white",
            paddingLeft:'150px',
             paddingTop:'100px',
             fontSize:'18px',
             
             
             display:'flex'
             
             
                     }}>
            <ul>
                <li>Enjoy TMDB ad free</li>
                <li>Maintain a personal watchlist</li>
                <li>Filter by your subscribed streaming <br/> services and find something to watch</li>
                <li>Log the movies and TV shows you've seen</li>
                <li>Build custom lists</li>
                <li>Contribute to and improve our database</li>
            </ul>
            </p>
            
            
            
        </div>
        
        </div>
       
    )
}

export default SecondFooter
