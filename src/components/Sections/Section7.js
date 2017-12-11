import React from 'react';
import { Link } from 'react-router';
import ReactVideo from 'react.video';

class Section7 extends React.Component {
  render() {
    return (
      <div id="section7">
        <div className="sectionInner">
        <div className="col-md-12">
          <div className="col-md-6 feedbackBox feedbackBoxL">
            <p className="feedbackTxt">"Automatio is the best <strong>Kimono alternative</strong>. And we all know how good Kimono was"</p>
            <div className="feedbackAuthor">
              <img src={require('../../../public/img/homeAssets/me1.png')} />
              <p>
                <span>Stefan Smiljkovic, Web kid playing with his toys</span>
                <br/>
                vanila.io, automatio.co
              </p>
            </div>
          </div>
          <div className="col-md-6 feedbackBox feedbackBoxR">
            <p className="feedbackTxt">"Why build or pay for another <strong>scraper</strong>, when you can just <strong>click</strong>?"</p>
            <div className="feedbackAuthor">
              <img src={require('../../../public/img/homeAssets/jelena.png')} />
              <p>
                <span>Jelena Jovanovic</span>
                <br/>
                instagram.com/plavookac
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="col-md-6 feedbackBox feedbackBoxL">
            <p className="feedbackTxt">"Seems that Automatio have much <strong>better workflow</strong> than Import.io."</p>
            <div className="feedbackAuthor">
              <img src={require('../../../public/img/homeAssets/andrey.jpg')} />
              <p>
                <span>Andrey Azimov, Growth Hacker</span>
                <br/>
                twitter.com/AndreyAzimov
              </p>
            </div>
          </div>
          <div className="col-md-6 feedbackBox feedbackBoxR">
            <p className="feedbackTxt">"Just think, almost <strong>any website</strong> into <strong>structured </strong><strong>data</strong> like API, RSS, CSV ... That is limitless."</p>
            <div className="feedbackAuthor">
              <img src={require('../../../public/img/homeAssets/tahy.jpg')} />
              <p>
                <span>Taher, Full Stack Developer</span>
                <br/>
                facebook.com/entrptaher
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Section7;
