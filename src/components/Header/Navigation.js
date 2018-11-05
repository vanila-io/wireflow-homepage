import React from 'react';
import { Route, Router, IndexRedirect, IndexRoute, Link } from 'react-router';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
      var audio = document.getElementById('audio');
      audio.play();
  }
  render() {
    return (
        
        
      <nav className="navbar navbar-default z7">
        <audio id="audio" src="http://front-end-noobs.com/jecko/assets/sound4.mp3"></audio>
          

       <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        
        <div className="navbar-header">
            {/*<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>*/}
        
        <div className="logoText">
            <a className="navbar-brand" href="#"><img src={require('../../../public/img/homeAssets/wireFlow/icons/Logowireflow.png')} alt="Automatio.co"/></a>
    
 
    </div>
    
    
      
    
        <div className="socialIcons">
                  
                  
            
        <div className="sIconsP faBack">    
        <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
        </div>                            
        
        <div className="sIconsP gitBack">    
        <a href="#"><i className="fa fa-github" aria-hidden="true"></i></a>
        </div>     
         
        
        <div className="sIconsP twBack">    
        <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
        </div>          
            
              
              
              
          </div>
          </div>
           
          <ul className="nav navbar-nav display">
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Faq</a></li>
            </ul>
              
            <ul className="nav navbar-nav">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Open Source</a></li>
              <li><a href="#">UX Tools</a></li>
              <li><Link to="Client">Crafted by Vanila</Link></li>
            
            </ul>
              </div>
              
              
             
              
              
        
              
              
      </nav>
    );
  }
}

export default Navigation;
