import React from 'react';
import Navigation from './Navigation';

class Header extends React.Component {


  render() {

    return (
      <div id="headerNew">
        <div className="headerIntro">
          <Navigation/>
          

            <div className="row rowHeader">

              <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 columnOneSett">

              
            <h3>Free Wire / User Flow Tool</h3>
        
            <p>Wireflow is <strong>free, online and open source tool </strong>for creating beautiful user flow prototypes. <strong>No Photoshop </strong> skills required!</p>
        
        
        
            <div className="btnStart">
        
             <a className="btn btn-default btnStartFlow" href="https://app.wireflow.co" target="_blank">start designing</a>
        
        
           </div>
           </div>
        
        
        

              <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 columnTwoSett">
                    
                <div className="imgFlow">
        
                 <img src={require('../../img/homeAssets/wireFlow/icons/wireflowscreen20.png')} alt="Wireflow"/> 
        
                </div>
                </div>

          
     </div> 
                <div className="row rowTwoH">
                
                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                    
                
                <div className="Ico col-md-12 icoOne">

                  <div className="col-md-12 inLine">

                    <div className="icoImg">

                      <img className="" src={require('../../img/homeAssets/wireFlow/icons/img1.png')} alt=""/>

                    </div>

                    <div className="icoHeadline">

                      <h3>100+ graphics to use</h3>

                      <p>Wireflow have over 100 custom build graphics/cards to use, which cover most the web elements, interactions and usage cases.</p>

                    </div>

                  </div>

                  <div className="col-md-12 inLine">

                    <div className="icoImg">

                      <img className="" src={require('../../img/homeAssets/wireFlow/icons/img2.png')} alt=""/>

                    </div>

                    <div className="icoHeadline">

                      <h3>Real-Time collaboration</h3>

                      <p>Wireflow comes with collaboration in mind. You can invite your co-worker and together in real-time design the user flow for your next project.</p>

                    </div>

                  </div>

                  <div className="col-md-12 inLine">

                    <div className="icoImg">

                      <img className="" src={require('../../img/homeAssets/wireFlow/icons/img3.png')} alt=""/>

                    </div>

                    <div className="icoHeadline">

                      <h3>Project permisions</h3>

                      <p>You can decide who have access to project/room you are working and is it public or private.</p>

                    </div>

                  </div>
                                             
                                             
                      <div className="col-md-12 inLine">

                    <div className="icoImg">

                      <img className="" src={require('../../img/homeAssets/wireFlow/icons/img1.png')} alt=""/>

                    </div>

                    <div className="icoHeadline">

                      <h3>Live chat</h3>

                      <p>It have built in live chat which give you ability to communicate with your team mate and still be in the same app while you collaborating in real-time. </p>

                    </div>

                  </div>
                        
                        
                   <div className="col-md-12 inLine">

                    <div className="icoImg">

                      <img className="" src={require('../../img/homeAssets/wireFlow/icons/img2.png')} alt=""/>

                    </div>

                    <div className="icoHeadline">

                      <h3>Easy to use interface</h3>

                      <p>Simple, minimal and easy to use interface will bring you good experience while using it.</p>

                    </div>

                  </div>
                                             
                                             
                                             
                   <div className="col-md-12 inLine inLineNoP">

                    <div className="icoImg">

                      <img className="" src={require('../../img/homeAssets/wireFlow/icons/img3.png')} alt=""/>

                    </div>

                    <div className="icoHeadline">

                      <h3>No Photoshop skills required</h3>

                      <p>Wireflow is great and easy to you use cause you don't need to install or have previous experience in any complicated software.</p>

                    </div>

                  </div>                             
                                             
                                             
                                             
                                             
                                             

                </div>    
                    
                
                </div>  
                                             
            
                <div className="col-lg-offset-2 col-lg-5 col-md-offset-1 col-md-6 col-sm-12 coll-xs-12 columnReal">
                                             
                    
                                             
                <div className="textReal">                             
                                             
                  <h1>About Wireflow Project</h1>  
                                             
                                             
                   
                            
                    <p className="marTp">Wireflow was born per need to simplify process in early stage of project planing and braindstorming.<br />
                    Our mission is to remove needs for complex softwares like Photoshop, Illustrator or need to buy any wireframe or user flow kit.</p>
                                             
                    <p className="marTp">This side project was built in less then month while rapidly and on thefly developed along with other main project at the time. <br />
                    So, this is a just prototype which validated our idea of a simple and yet useful app which save tons of time. Please be aware, it's buggy and free!</p>
                                             
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
