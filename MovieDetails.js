import React from 'react'
import MoviesCast from '../MoviesCast'
import "./MovieDetails.css"
import ModalVideo from 'react-modal-video'
import { useState } from 'react'

import { FaPlay } from 'react-icons/fa';
import { FaList, FaHeart, FaSave, FaStar } from 'react-icons/fa'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const IMG = "./images/Background.jpg"
function MovieDetails() {
    const [isOpen, setOpen] = useState(false)
    const percentage = 66;

  
    return (
        <>
        <div className="opacity">
            <div className="movie-details">
            <div className="flex-containers">
            <div className="float-child">
               <img  />
            </div>
            <div className="flex-child">

                <h1 style={{color: "white", marginTop:"15vh", fontWeight:"bolder"}}>What if...? (2021)</h1>
                <div style={{display:"flex", color:"white"}}>
                

                <p  style={{marginLeft:"1px", marginBlock:"5px"}}><FaList style={{marginLeft:"5vh"}}/> <FaHeart style={{marginLeft:"5vh"}}/> <FaSave style={{marginLeft:"5vh"}}/> <FaStar style={{marginLeft:"5vh"}}/> <span onClick={()=> setOpen(true)}><FaPlay style={{marginLeft:"5vh"}}/><span style={{marginLeft:"5vh"}}> Play Trailer</span></span> </p>
            
                            <React.Fragment>
			<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="H9gpZqn-TtU" onClose={() => setOpen(false)} />

			</React.Fragment> 
            
    
                </div>
                <p  style={{color: "white", marginTop:"15vh", fontWeight:"bolder"}}>Animation, Action & Adventure, Sci-Fi & Fantasy 34m
</p>
<p style={{color: "white", fontWeight:"bolder"}}>Overview</p>
<p style={{color: "white", fontWeight:"bolder"}}>Taking inspiration from the comic books of the same name, each episode explores a pivotal moment from the Marvel Cinematic Universe and turns it on its head, leading the audience into uncharted territory.</p>
            </div>
        </div>
        </div></div>
        <MoviesCast/>
    </>
    )
}

export default MovieDetails
