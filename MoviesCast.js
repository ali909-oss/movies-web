import React from 'react'
import { useState,useEffect } from 'react'
import "./MovieCast.css"
import { Link } from 'react-router-dom'
import Recommendations from './Recommendations'
import Sidebar from "./Sidebar"
import "../../node_modules/react-modal-video/scss/modal-video.scss"
import ModalVideo from 'react-modal-video'
import Footer from './Footer'
const CAST_API = "https://api.themoviedb.org/3/movie/588228/credits?api_key=34cc5740c13722824a35ca7daa30fa40&language=en-US"
const IMG_API='https://image.tmdb.org/t/p/w500'
const POSTER = "http://api.themoviedb.org/3/movie/588228/images?api_key=34cc5740c13722824a35ca7daa30fa40&language=en-US"
function MoviesCast() {
    const [cast, setCast]= useState([])
    const [popular,setPopular]= useState(true)
    const [video, setVideo] = useState(false)
    const [backdrop, setbackdrop] = useState(false)
    const [poster, setPoster] = useState(false)
    const [isOpen, setOpen] = useState(false)
    const [trailers, setTrailers]= useState([])
  
    useEffect(()=>{
        
        
        fetch(CAST_API)
        .then((res)=> res.json())
        .then((data)=>{
            setCast(data.cast)
            console.log(cast)
            

        })  
    },[])
    
    useEffect(()=>{
        
        
        fetch(POSTER)
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data)
            

        })  
    },[])
    return (<>
    <div style={{display:"flex"}}>
        <div style={{width:"80%"}}>

<h2 style={{
    marginTop:"10px"
}}>Movie Cast</h2>
<Link style={{textDecoration:'none'}}to="/Person">
    <div className="cast-wrapper">
       
    {
                cast.map((cast)=>(
                    <div
        className="cast-container"
        >
            <img style={{width:"100%"}} src={IMG_API+cast.profile_path} alt={cast.name}></img>
            <div className="movie-info">{cast.name} <span>{cast.popularity}</span></div>
        </div>
                ))
             
        }
    </div>
    </Link>

    <div style={{ marginTop:"15vh",display:"flex"}}><span>
    <h1>Social</h1></span><span style={{marginLeft:"10px"}}><button style={{backgroundColor:'white',color:'black'}}className="button-6" onClick={()=>{ setPopular(true)}}>Reviews <span style={{fontWeight:"20px"}}>(0)</span></button ></span><span style={{marginLeft:"30px"}}><button style={{backgroundColor:'white',color:'black'}} className="button-6" onClick={()=> setPopular(false)}>Discussions<span style={{fontWeight:"20px"}}>(0)</span></button></span>
    
    </div>
    
    <div style={{ marginTop:"15vh",display:"flex"}}><span>
    <h1>Media </h1></span><span style={{marginLeft:"15px"}}><button style={{backgroundColor:'white',color:'black'}} className="button-6" onClick={()=>(setPoster(false),setVideo(false),setbackdrop(false), setPopular(true))}>Most Popular</button ></span><span style={{marginLeft:"15px"}}><button style={{backgroundColor:'white',color:'black'}} className="button-6" onClick={()=>(setPoster(false),setVideo(true),setbackdrop(false), setPopular(false))}>Videos</button></span><span style={{marginLeft:"15px"}}><button style={{backgroundColor:'white',color:'black'}} className="button-6" onClick={()=> (setPoster(false),setVideo(false),setbackdrop(true), setPopular(false))}>Backdrops</button></span><span style={{marginLeft:"15px"}}><button style={{backgroundColor:'white',color:'black'}} className="button-6" onClick={()=>(setPoster(true),setVideo(false),setbackdrop(false), setPopular(false))}>Posters</button></span></div>
    <div className="poster" style={{}}>
    {popular &&<div  style={{display:"flex",overflowX:" auto",height:"60vh",marginTop:"20px",width:"80%"}}>
        <img src="https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/piz0BFUJ4Bro4BFzxxkNpsGCmOd.jpg" alt={cast.name}></img>
    <img src="https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/6rqUSdzxdflzRRKtx1djZy7CEIe.jpg" alt={cast.name}></img>
    <img src="https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/cByh6q4mKx5KRuqlZ28eEBz1RE9.jpg" alt={cast.name}></img>
    </div>

    }
    { video && <div  style={{ display:"flex",overflowX:" auto",height:"60vh",marginTop:"20px",width:"120vh"}}>
    <React.Fragment>
			<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="H9gpZqn-TtU" onClose={() => setOpen(false)} />

			<img  src="https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/piz0BFUJ4Bro4BFzxxkNpsGCmOd.jpg" className="btn-primary" onClick={()=> setOpen(true)} alt="asad"/>
          </React.Fragment> 
          <React.Fragment>
			<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="aQO16k5Vdow" onClose={() => setOpen(false)} />

			<img src={IMG_API+"/ysJte1iqN8pFQ470tumnViB1wHP.jpg"} className="btn-primary" onClick={()=> setOpen(true)} alt="asad"/>
          </React.Fragment> 
          <React.Fragment>
			<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="aQO16k5Vdow" onClose={() => setOpen(false)} />

			<img src={IMG_API+"/6EdKBYkB1ssgGjc249ud1L55o8d.jpg"} className="btn-primary" onClick={()=> setOpen(true)} alt="asad"/>
        <div className="round-button"><i class="fa fa-play fa-2x"></i>
      </div>
                </React.Fragment> 
    </div>}
    {poster &&<div  style={{display:"flex",overflowX:" auto",height:"60vh",marginTop:"20px",width:"160vh"}}>
        <img className="img-1" src="https://www.themoviedb.org/t/p/w440_and_h660_face/ysJte1iqN8pFQ470tumnViB1wHP.jpg" alt={cast.name}></img>
    <img src="https://www.themoviedb.org/t/p/w440_and_h660_face/ha5jepFvhiBVdKCl2EY2pIQrvZJ.jpg" alt={cast.name}></img>
    <img src="https://www.themoviedb.org/t/p/w440_and_h660_face/jTqESQl3fvlDbmBVmZeWS1KMGyU.jpg" alt={cast.name}></img>
    <img src="https://www.themoviedb.org/t/p/w440_and_h660_face/ha5jepFvhiBVdKCl2EY2pIQrvZJ.jpg" alt={cast.name}></img>
    <img src="https://www.themoviedb.org/t/p/w440_and_h660_face/jTqESQl3fvlDbmBVmZeWS1KMGyU.jpg" alt={cast.name}></img>
    </div>

    }
    {backdrop &&<div style={{display:"flex",height:"60vh",marginTop:"20px",width:"160vh"}}>
        <img src="https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/c3LWjDnO8b1yDwhVwlV3Xa3aYrn.jpg" alt={cast.name}></img>
    <img src="https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/otpnfyrCEcqfKM5X8rGvo6tbZ7M.jpg" alt={cast.name}></img>
    <img src="https://www.themoviedb.org/t/p/w1066_and_h600_bestv2/AgC3ua1iS9xT4fvJaOzU9RCMzo6.jpg" alt={cast.name}></img>
    </div>

    }
    
    </div> 
    {<Recommendations/>}
    </div>
    <div>
    <Sidebar/>
    </div>
    </div>
    <Footer/>
    </>    )
}

export default MoviesCast
