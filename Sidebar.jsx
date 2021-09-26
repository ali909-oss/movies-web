import { Link } from "react-router-dom";



import "./sidebar.css";

export default function Sidebar() {
  return (

    
      <div className="sidebarItem">
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
        <br />
        <h4>Facts</h4>
        <br />
        <h4 >Status</h4>
        <p style={{ paddingTop: '5px' }}>Returning Series</p>
        <h3 >Network</h3>
        
        <img  className="img" exact path="/" src="https://www.themoviedb.org/t/p/h30/mieMBXx82qgY8nmnyaH0rY2D943.png" alt="Network"></img>
        <br/>
        <h4 >Type</h4>
        <p style={{ paddingTop: '5px' }}>Scripted</p>
        
        <h4 >Language</h4>
        <p style={{ paddingTop: '5px' }}>Spanish</p>
        
        <h4 >Keywords</h4>
        <p style={{ paddingLeft: '20px' }}>  No keywords have been added</p>
        <h4 >Content Score</h4>
        <progress className="progress" max="100" value="78" ></progress>
        <text style={{paddingRight:'100px'}}>Almost there...</text>
        <h4 >Top Contributers</h4>
        <br/>
        <img className="circular"   src="https://img.favpng.com/12/15/21/computer-icons-avatar-user-profile-recommender-system-png-favpng-HaMDUPFH1etkLCdiFjgTKHzAs.jpg" />
        <text>  43 "oil cruz"</text>
        <br/>
        <img className="circular" src="https://img.favpng.com/12/15/21/computer-icons-avatar-user-profile-recommender-system-png-favpng-HaMDUPFH1etkLCdiFjgTKHzAs.jpg" />
        <text>  12 "Rene"</text>
        <br/>
        <img className="circular" src="https://img.favpng.com/12/15/21/computer-icons-avatar-user-profile-recommender-system-png-favpng-HaMDUPFH1etkLCdiFjgTKHzAs.jpg" />
        <text>   3 "oil cruz"</text>
        <br/>
        <img className="circular" src="https://img.favpng.com/12/15/21/computer-icons-avatar-user-profile-recommender-system-png-favpng-HaMDUPFH1etkLCdiFjgTKHzAs.jpg" />
        <text>  23 "cruz"</text>
        <p style={{ paddingLeft: '10px' }}>View Edit History</p>
        <br/>
        <button className="button">Login to Edit</button>


                
        

           
             
             
             
        
        
        
        
        
        
        
        

        



        



        






    </div>




  );
}
