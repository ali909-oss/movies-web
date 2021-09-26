import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faPlus} from '@fortawesome/free-solid-svg-icons'



import "./style.css"


import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtnLink,
  NavBtn,
  
  
    
} from './NavbarElements';



const Navbar = () => {
  const[show,setShow]=useState(false)


  
  
  
  
  return (
    <>
    
      <Nav>
        <NavLink to='/'>
        <img src="https://raw.githubusercontent.com/ali909-oss/lab-webs2/main/logo%2011.png"  />
                </NavLink>
        
        <Bars />
        
        <NavMenu>
          
          <NavLink  to='/Movies' activeStyle>
            Movies
          </NavLink>
          
          <NavLink  to='/TV Shows' activeStyle>
            TV Shows
           
          </NavLink>
          <NavLink  to='/People' activeStyle>
            People
            
          </NavLink>
          <NavLink  to='/More' activeStyle>
            More
           
          </NavLink>

          
        </NavMenu>
        <NavLink  to='/' activeStyle>
            
          
          <FontAwesomeIcon icon={faPlus} color="white" />    
          </NavLink>
          <NavLink to='/' activeStyle>
          <NavBtn >
            
          <NavBtnLink style={{color:"white"}} to='/'>EN</NavBtnLink>
          
          
          </NavBtn>
          </NavLink>
        <NavLink to='/Login' activeStyle>
            Login
          </NavLink>
          <NavLink to='/Join' activeStyle>
            Join
          </NavLink >
         <NavLink  to='/' activeStyle>
          <FontAwesomeIcon onClick={()=>{setShow(!show)}} icon={faSearch} color="#01b4e4" />  
              {
               show ?
               <>
               <div className="search-box">
            
                <input className="form" type="text "/>
                <input type="button" value="search"/>
                </div>
                </>
                :null
              }
              
               
               
          </NavLink>
        
      </Nav>
    </>

  );
};


export default Navbar;
