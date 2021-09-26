import React from 'react'
import "./PersonDetails.css"
import Trendings from './Trendings'
import { Link } from 'react-router-dom'
import "./PersonDetails.css"


function PersonDetails() {
    return (
        <div>
            <div className="person-details">
            <div className="flex-containers">
            <div className="floats-child">
               <img />
            </div>
            <div className="flex-child">
                <div style={{marginTop:"10px"}}>
                    <h1 style={{fontWeight:"bolder"}}>Winslow Fegley</h1>
                    <br/>
                    <h4>Biography</h4>
                    <p>We do not have enough biography for Winslow Fegley</p>
                    <h4>Known for</h4>
                    
                    
                </div>
                <Link to="/MovieDetails"> 
                <div className="personal-container">
     
     <Trendings />
     
  
  </div>  
  </Link>
                </div>
        </div>
        </div>
        </div>
    )
}

export default PersonDetails
