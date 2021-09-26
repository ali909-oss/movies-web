import React from 'react'
import Sidebar from './Sidebar'

function Acting() {
    return (
        <div>
            <h1 style={{display:"flex",textAlign:"center"}}>Acting here</h1>
            <div style={{display:"flex",textAlign:"center"}}>
                <div>{<Sidebar/>}</div>
            <div>
                <img src="./pages/images/Background.jpg"/>
            </div>
            </div>
            
        </div>
    )
}

export default Acting
