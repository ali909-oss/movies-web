import './Home.css';
import Footer from "../Footer";
import React, { useState } from 'react';
import Popular from '../Popular';
import Trailers from '../Trailers';
import SecondFooter from '../SecondFooter';
import Trendings from '../Trendings';

import { useEffect} from 'react';
import {axios} from 'axios';
import { Link } from 'react-router-dom';
import Herocontainer from "../Herocontainer"
import Leaderboard from '../Leaderboard';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const API_KEY ='https://api.themoviedb.org/3/discover/movie?api_key=34cc5740c13722824a35ca7daa30fa40'
const TRENDING_API ="https://api.themoviedb.org/3/trending/all/day?api_key=34cc5740c13722824a35ca7daa30fa40"



function Home() {
  const [color,setColor]=useState('white');
  const[color2,setcolor2] = useState("white")
  const [textColor,setTextColor]=useState('#032039');

    return(
      
      <>
      
      
    
    
    

    <div className="">
     <Herocontainer/>
   
    <h3 style={{
      marginTop:"40px",
      marginLeft:"20px"
    }}>What's Popular  <input  className="but-1" style={{borderColor:'#032039',fontSize:'20px',color:textColor,background:color,paddingRight:"10px",textAlign:"left",width:"150px",borderRadius:'18px'}}  type="submit" value="On TV"></input>
    <input className="but-2" onClick = {()=>{setcolor2("032039") && setColor("white")}}  style={{color:textColor,background:color2,fontSize:'20px',marginLeft:"-80px",borderRadius:'18px',borderColor:'#032039'}} type="submit" value="In Theaters"></input>
    
    
    </h3>
     
    
    
 <div className="movie-container">
    <Popular />
)    </div>
   
<h3 style={{
      marginTop:"40px",
      marginLeft:"20px"
    }}>Trailers <input  className="but-1" style={{borderColor:'#032039',fontSize:'20px',color:textColor,background:color,paddingRight:"10px",textAlign:"left",width:"150px",borderRadius:'18px'}}  type="submit" value="On TV"></input>
    <input className="but-2" onClick = {()=>{setcolor2("032039") && setColor("white")}}  style={{color:textColor,background:color2,fontSize:'20px',marginLeft:"-80px",borderRadius:'18px',borderColor:'#032039'}} type="submit" value="In Theaters"></input>
    
    </h3>
 
    <div className="trailer-container">
    <Trailers />
     </div>

    <h3 style={{
      marginTop:"40px",
      marginLeft:"20px"
    }}>Trendings 
    <input  className="but-1" style={{borderColor:'#032039',fontSize:'20px',color:textColor,background:color,paddingRight:"10px",textAlign:"left",width:"150px",borderRadius:'18px'}}  type="submit" value="Today"></input>
    <input className="but-2" onClick = {()=>{setcolor2("032039") && setColor("white")}}  style={{color:textColor,background:color2,fontSize:'20px',marginLeft:"-80px",borderRadius:'18px',borderColor:'#032039'}} type="submit" value="This Week"></input>
    
    </h3>
    <div className="movie-container">
     
       <Trendings />
       
    
    </div>  
    
    <SecondFooter/>
    <Leaderboard />
    
    <Footer/>
    </div>
    </>
  )
  }

export default Home;
