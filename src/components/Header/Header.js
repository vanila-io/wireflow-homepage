import React from 'react';
import Navigation from './Navigation';
import {Link} from 'react-router';
import ReactVideo from 'react.video';

class Header extends React.Component {

  render() {
    return (
      <div id="headerNew">
        <div className="headerIntro">
          <Navigation/>
          

            <div className="row rowHeader">

              <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 columnOneSett">

              
            <h3>Open Source Wireflow Tool</h3>
        
            <p>Wireflow is <b>free online tool </b>for creating beautiful user flow prototypes. <b>No Photoshop </b> skills required!</p>
        
        
        
            <div className="btnStart">
        
             <button div className="btn btn-default btnStartFlow">start designing</button>
        
    
        
           </div>
           </div>
        
        
        

              <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 columnTwoSett">
                    
                <div className="imgFlow">
        
                 <img src={require('../../../public/img/homeAssets/wireFlow/icons/wireflowscreen20.png')} alt="Automatio.co"/> 
        
                </div>
                </div>

          
     </div> 
                <div className="row rowTwoH">
                
                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                    
                
                <div className="Ico col-md-12 icoOne">

                  <div className="col-md-12 inLine">

                    <div className="icoImg">

                      <img className="" src={require('../../../public/img/homeAssets/wireFlow/icons/img1.png')} alt=""/>

                    </div>

                    <div className="icoHeadline">

                      <h3>100+ graphics to use</h3>

                      <p>Wireflow have over 100 graphics or user cases.</p>

                    </div>

                  </div>

                  <div className="col-md-12 inLine">

                    <div className="icoImg">

                      <img className="" src={require('../../../public/img/homeAssets/wireFlow/icons/img2.png')} alt=""/>

                    </div>

                    <div className="icoHeadline">

                      <h3>Real-Time collaboration</h3>

                      <p>Vanila crew is in love with Meteor.js, which is latest technology based on JavaScript (Node.js). It gives you fast, realtime, scalable applications which work on all modern browsers and devices.</p>

                    </div>

                  </div>

                  <div className="col-md-12 inLine">

                    <div className="icoImg">

                      <img className="" src={require('../../../public/img/homeAssets/wireFlow/icons/img3.png')} alt=""/>

                    </div>

                    <div className="icoHeadline">

                      <h3>Project permisions</h3>

                      <p>Vanila crew is in love with Meteor.js, which is latest technology based on JavaScript (Node.js). It gives you fast, realtime, scalable applications which work on all modern browsers and devices.</p>

                    </div>

                  </div>
                                             
                                             
                      <div className="col-md-12 inLine">

                    <div className="icoImg">

                      <img className="" src={require('../../../public/img/homeAssets/wireFlow/icons/img1.png')} alt=""/>

                    </div>

                    <div className="icoHeadline">

                      <h3>Live chat</h3>

                      <p>Wireflow have over 100 graphics or user cases.</p>

                    </div>

                  </div>
                        
                        
                   <div className="col-md-12 inLine">

                    <div className="icoImg">

                      <img className="" src={require('../../../public/img/homeAssets/wireFlow/icons/img2.png')} alt=""/>

                    </div>

                    <div className="icoHeadline">

                      <h3>Easy to use interface</h3>

                      <p>Vanila crew is in love with Meteor.js, which is latest technology based on JavaScript (Node.js). It gives you fast, realtime, scalable applications which work on all modern browsers and devices.</p>

                    </div>

                  </div>
                                             
                                             
                                             
                   <div className="col-md-12 inLine inLineNoP">

                    <div className="icoImg">

                      <img className="" src={require('../../../public/img/homeAssets/wireFlow/icons/img3.png')} alt=""/>

                    </div>

                    <div className="icoHeadline">

                      <h3>No Photoshop skills required</h3>

                      <p>Vanila crew is in love with Meteor.js, which is latest technology based on JavaScript (Node.js). It gives you fast, realtime, scalable applications which work on all modern browsers and devices.</p>

                    </div>

                  </div>                             
                                             
                                             
                                             
                                             
                                             

                </div>    
                    
                
                </div>  
                                             
            
                <div className="col-lg-offset-2 col-lg-5 col-md-offset-1 col-md-6 col-sm-12 coll-xs-12 columnReal">
                                             
                    
                                             
                <div className="textReal">                             
                                             
                  <h1>Real-Time Collaboration</h1>  
                                             
                                             
                   
                            
                    <p className="marTp">Vanila crew is in love with Meteor.js, which is latest technology based on JavaScript (Node.js).<br />
                    It gives you fast, realtime, scalable applications which work on all modern browsers and devices.</p>
                                             
                    <p className="marTp">Vanila crew is in love with Meteor.js, which is latest technology based on JavaScript (Node.js). <br />
                    It gives you fast, realtime, scalable applications which work on all modern browsers and devices.</p>
                                             
                    </div> 
                    
                    
                    <div className="toolsReal">
                       
                      
                    <h3>Tools</h3>  
                    
                    
                    <ul className="ulListLeft realDis">
                        <li><i className="fa fa-circle" aria-hidden="true"></i>Zoom In/Out</li>
                        <li><i className="fa fa-circle" aria-hidden="true"></i>Connectors (arrows)</li>
                        <li><i className="fa fa-circle" aria-hidden="true"></i>Move canvas</li>
                        <li><i className="fa fa-circle" aria-hidden="true"></i>Undo/Redo</li>
                        
                    </ul>    
                        
                        
                    <ul className="ulListRight realDis">
                        <li><i className="fa fa-circle" aria-hidden="true"></i>Remove header</li>
                        <li><i className="fa fa-circle" aria-hidden="true"></i>Edit header text</li>
                        <li><i className="fa fa-circle" aria-hidden="true"></i>Bring front/Send backvard</li>
                        <li><i className="fa fa-circle" aria-hidden="true"></i>Keyboard shortcuts</li>
                        
                    </ul>        
                        
                    </div>    
                    
                    
                                             
                                             
                </div>                             
                                             
                    
                    
                </div>    
    
    
       
    

        </div>

       
      </div>

    );
  }
}

export default Header;
