import React, { useEffect } from 'react'
import "./Trailers.css"
import ReactPlayer from 'react-player'
import ModalVideo from 'react-modal-video'
import { useState } from 'react'
import "../../node_modules/react-modal-video/scss/modal-video.scss"
import { Link } from 'react-router-dom'
const YOUTUBE_LINK ="https://www.youtube.com/watch?v="
const IMG_API='https://image.tmdb.org/t/p/w500'
function Trailers() {
    const [isOpen, setOpen] = useState(false)
    const [trailers, setTrailers]= useState([])
  
    useEffect(()=>{
        
        fetch('https://api.themoviedb.org/3/movie/848278?api_key=34cc5740c13722824a35ca7daa30fa40&append_to_response=videos')
        .then((res)=> res.json())
        .then((data)=>{
            setTrailers(data.results)
        })  
    },[])
    return (
        <>
            <div
        className="Trailers-container"
        >
           <React.Fragment>
			<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="x9D0uUKJ5KI" onClose={() => setOpen(false)} />

			<img src="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/4N6zEMfZ57zNEQcM8gWeERFupMv.jpg" className="btn-primary" onClick={()=> setOpen(true)} alt="asad"/>
           <Link style={{textDecoration:'none'}}to="/MovieDetails"> <h3 style={{color:"white",fontWeight:"bolder", textAlign:"center"}}>Juresic Park</h3></Link>
        </React.Fragment>
        
            
            
        </div>
        
        
        </>
        
    )
}

export default Trailers
