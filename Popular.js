import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import MovieDetails from './MovieDetails'
import "./Popular.css"
import moment from 'moment'
import { CircularProgressbar , buildStyles} from 'react-circular-progressbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEllipsisv} from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react'
const IMG_API = 'https://image.tmdb.org/t/p/w500'
const API_KEY = 'https://api.themoviedb.org/3/discover/movie?api_key=34cc5740c13722824a35ca7daa30fa40';




function Popular() {
    const [movies, setMovies] = useState([])

    useEffect(() => {

        fetch(API_KEY)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results)
                console.log(movies)
            })
    }, [])
    const percentage = 66;

    return (


        // <Link to="/MovieDetails" >
        <>
            {
                movies.map((mov) => (
                    <Link style={{ textDecoration: 'none', color: '#032039' }} key={mov.id} to="/MovieDetails">
                        <div
                            className="popular-container"
                        >
                            <div >
                            <img style={{ width: "100%",background:'#032039' }} src={IMG_API + mov.poster_path} alt={mov.title}></img>
                          <div style={{marginTop:"-20px",background:'#032039',borderRadius:'50%',width:'40px',height:'40px',top:'30px'}}>

                            <CircularProgressbar  value={percentage} text={`${mov.vote_average*10}%`} styles={buildStyles({
                                
                                
                                // Text size
                                textSize: '40px',
                                textColor: 'white',
                                pathColor: "turquoise",
          trailColor: "#032039"
                            
                            })} />
                            </div>
                            </div>



                            <div className="movie-info"><span style={{ fontWeight: 'bold' }}>{mov.title}</span> </div>
                            <text>{moment(mov.release_date).format('MMM DD,YYYY')}</text>
                        </div>
                    </Link>
                ))

            }
        </>
    )
}

export default Popular
