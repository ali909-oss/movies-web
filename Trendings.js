import React from 'react'
import "./Trendings.css"
import moment from 'moment'
import { CircularProgressbar , buildStyles} from 'react-circular-progressbar';

import { useEffect , useState } from 'react'
import { Link } from 'react-router-dom'
const IMG_API='https://image.tmdb.org/t/p/w500'
const API_KEY ="https://api.themoviedb.org/3/trending/all/day?api_key=34cc5740c13722824a35ca7daa30fa40"

function Trendings() {
    const [trendings, setTrendings]= useState([])
    const percentage = 66;

  
    useEffect(()=>{
        
        fetch("https://api.themoviedb.org/3/trending/all/day?api_key=34cc5740c13722824a35ca7daa30fa40")
        .then((res)=> res.json())
        .then((data)=>{
            setTrendings(data.results)
            console.log(trendings)
        })  
    },[])

    return (<>{
        trendings.map((trend,mov)=>(
            <Link style={{textDecoration:'none' , color:'#032039'}} to="/MovieDetails">
            <div
            className="trending-container"
            >
                
              <img style={{width:"100%"}} src={IMG_API+trend.poster_path} alt={trend.title}></img>
              <div style={{marginTop:"-20px",background:'#032039',borderRadius:'50%',width:'40px',height:'40px',top:'30px'}}>

                            <CircularProgressbar  value={percentage} text={`${percentage}%`}styles={buildStyles({
                                
                                
                                // Text size
                                textSize: '40px',
                                textColor: 'white',
                                pathColor: "turquoise",
          trailColor: "#032039"
                            
                            })} />
                            </div>
                            
                <div className="trending-info" style={{fontSize:"12px", textDecorationLine:"none"}}><span style={{fontWeight:'bold'}}>{trend.title}</span> </div>
                <text>{moment(mov.release_date).format('MMM DD,YYYY')}</text>
            
               
                
                
            </div>
            </Link>    ))
       
    }</>)
}

export default Trendings
