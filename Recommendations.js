import React, { useEffect } from 'react'
import "./Trailers.css"
import ReactPlayer from 'react-player'
import ModalVideo from 'react-modal-video'
import { useState } from 'react'
import "../../node_modules/react-modal-video/scss/modal-video.scss"
import { Link } from 'react-router-dom'
import Footer from './Footer'
const YOUTUBE_LINK ="https://www.youtube.com/watch?v="
const IMG_API='https://image.tmdb.org/t/p/w500'
const RECOMMEND_API = "https://api.themoviedb.org/3/movie/497698?api_key=34cc5740c13722824a35ca7daa30fa40&append_to_response=videos"
function Recommendations() {
    const [isOpen, setOpen] = useState(false)
    const [recommendation, setRecommendation]= useState([])
  
    useEffect(()=>{
        
        fetch(RECOMMEND_API)
        .then((res)=> res.json())
        .then((data)=>{
            setRecommendation(data.videos.results)
        console.log(data)
        
        })  
    },[])
    return (<>

        <h1 style={{marginTop:"20px"}}>Recommendations</h1>
        <div className="wrapper">
        {
            recommendation.map((rec)=>(
                console.log(rec.key),
                <div
        className="Trailers-container"
        >
           <React.Fragment>
			<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={rec.key} onClose={() => setOpen(false)} />

			<img src={IMG_API+"/dq18nCTTLpy9PmtzZI6Y2yAgdw5.jpg"} className="btn-primary" onClick={()=> setOpen(true)} alt="asad"/>
		</React.Fragment> {/* <ReactPlayer
           controls
           url="https://www.youtube.com/watch?v=dCDLPlZAoeY"
           />
           {
               console.log(YOUTUBE_LINK + data.key)
              // console.log(key)
           }
            */}
            
            
        </div>

            ))
               }</div> 
               
               
               </>
    )
}

export default Recommendations
