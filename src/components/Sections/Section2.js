import React from "react";
import { Link } from "react-router";
import ReactVideo from "react.video";

class Section2 extends React.Component {
  render() {
    return (
      <div id="sectionTwo">
        <h1>Choose from 113 flows in 10 categories</h1>

        <ul className="secTwoList">
          <a href="#">
            <li className="secTwoActive">ALL</li>
          </a>
          <a href="#">
            <li>ARTICLE</li>
          </a>
          <a href="#">
            <li>BLOG</li>
          </a>
          <a href="#">
            <li>E-COMMERCE</li>
          </a>
          <a href="#">
            <li>FEATURES</li>
          </a>
          <a href="#">
            <li>GALLERY</li>
          </a>
          <a href="#">
            <li>HEADER</li>
          </a>
          <a href="#">
            <li>MISC</li>
          </a>
          <a href="#">
            <li>MULTIMEDIA</li>
          </a>
          <a href="#">
            <li>SIGN IN</li>
          </a>
          <a href="#">
            <li>SOCIAL</li>
          </a>

          <div className="borderBottom" />
        </ul>

        <div className="row rowCategories">
          <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6 secTwoMarBot secTwoMarBot2">
            <img
              src={require("../../../public/img/homeAssets/wireFlow/article/Article1.png")}
              alt="Automatio.co"
            />
          </div>

          <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6 secTwoMarBot secTwoMarBot2">
            <img
              src={require("../../../public/img/homeAssets/wireFlow/article/Article2.png")}
              alt="Automatio.co"
            />
          </div>

          <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6 secTwoMarBot secTwoMarBot2">
            <img
              src={require("../../../public/img/homeAssets/wireFlow/article/Article3.png")}
              alt="Automatio.co"
            />
          </div>

          <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6 secTwoMarBot2">
            <img
              src={require("../../../public/img/homeAssets/wireFlow/article/Article4.png")}
              alt="Automatio.co"
            />
          </div>

          <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6">
            <img
              src={require("../../../public/img/homeAssets/wireFlow/article/Article5.png")}
              alt="Automatio.co"
            />
          </div>

          <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6">
            <img
              src={require("../../../public/img/homeAssets/wireFlow/article/Article6.png")}
              alt="Automatio.co"
            />
          </div>
        </div>

        <div className="row rowCategories rowMarginImg">
          <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6 secTwoMarBot secTwoMarBot2">
            <img
              src={require("../../../public/img/homeAssets/wireFlow/article/Article1.png")}
              alt="Automatio.co"
            />
          </div>

          <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6 secTwoMarBot secTwoMarBot2">
            <img
              src={require("../../../public/img/homeAssets/wireFlow/article/Article2.png")}
              alt="Automatio.co"
            />
          </div>

          <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6 secTwoMarBot secTwoMarBot2">
            <img
              src={require("../../../public/img/homeAssets/wireFlow/article/Article3.png")}
              alt="Automatio.co"
            />
          </div>

          <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6 secTwoMarBot2">
            <img
              src={require("../../../public/img/homeAssets/wireFlow/article/Articles4.png")}
              alt="Automatio.co"
            />
          </div>

          <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6">
            <img
              src={require("../../../public/img/homeAssets/wireFlow/article/Articles5.png")}
              alt="Automatio.co"
            />
          </div>

          <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6">
            <img
              src={require("../../../public/img/homeAssets/wireFlow/article/Articles7.png")}
              alt="Automatio.co"
            />
          </div>
        </div>

        <div className="row rowCategories rowMarginImg">
          <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6 secTwoMarBot secTwoMarBot2">
            <img
              src={require("../../../public/img/homeAssets/wireFlow/article/Articles8.png")}
              alt="Automatio.co"
            />
          </div>

          <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6 secTwoMarBot secTwoMarBot2">
            <img
              src={require("../../../public/img/homeAssets/wireFlow/article/Articles9.png")}
              alt="Automatio.co"
            />
          </div>

          <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6 secTwoMarBot secTwoMarBot2">
            <img
              src={require("../../../public/img/homeAssets/wireFlow/article/Articles10.png")}
              alt="Automatio.co"
            />
          </div>

          <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6 secTwoMarBot2">
            <img
              src={require("../../../public/img/homeAssets/wireFlow/article/Articles11.png")}
              alt="Automatio.co"
            />
          </div>

          <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6">
            <img
              src={require("../../../public/img/homeAssets/wireFlow/article/Articles12.png")}
              alt="Automatio.co"
            />
          </div>

          <div className="col-lg-2 col-md-4 col-sm-4 col-xs-6">
            <img
              src={require("../../../public/img/homeAssets/wireFlow/article/Group2431.png")}
              alt="Automatio.co"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Section2;
