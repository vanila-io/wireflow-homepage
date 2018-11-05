import React from "react";
import { Link } from "react-router";
import ReactVideo from "react.video";

class Section5 extends React.Component {
  render() {
    return (
      <div id="section5">
        <div className="sectionInner">
          <div className="col-md-12">
            <div className="headingTitle">
              <h2>Integration with apps & platforms</h2>
              <p>
                These are just some on top of our heads. Possibilities are
                endless.
              </p>
            </div>
            <div className="col-md-12">
              <div className="col-md-2">
                <div className="roundBadge">
                  <img
                    src={require("../../../public/img/homeAssets/integration/tumblr.png")}
                  />
                </div>
                <span className="roundBadgeLabel">Tumblr</span>
              </div>
              <div className="col-md-2">
                <div className="roundBadge">
                  <img
                    src={require("../../../public/img/homeAssets/integration/blogger.png")}
                  />
                </div>
                <span className="roundBadgeLabel">Blogger</span>
              </div>
              <div className="col-md-2">
                <div className="roundBadge">
                  <img
                    src={require("../../../public/img/homeAssets/integration/weebly.png")}
                  />
                </div>
                <span className="roundBadgeLabel">Weebly</span>
              </div>
              <div className="col-md-2">
                <div className="roundBadge">
                  <img
                    src={require("../../../public/img/homeAssets/integration/wp.png")}
                  />
                </div>
                <span className="roundBadgeLabel">WordPress</span>
              </div>
              <div className="col-md-2">
                <div className="roundBadge">
                  <img
                    src={require("../../../public/img/homeAssets/integration/telegram.png")}
                  />
                </div>
                <span className="roundBadgeLabel">Telegram</span>
              </div>
            </div>
            <div className="col-md-12 roundBadgeWrapper">
              <div className="col-md-2">
                <div className="roundBadge">
                  <img
                    src={require("../../../public/img/homeAssets/integration/delicious.png")}
                  />
                </div>
                <span className="roundBadgeLabel">Delicious</span>
              </div>
              <div className="col-md-2">
                <div className="roundBadge">
                  <img
                    src={require("../../../public/img/homeAssets/integration/digo.png")}
                  />
                </div>
                <span className="roundBadgeLabel">Digo</span>
              </div>
              <div className="col-md-2">
                <div className="roundBadge">
                  <img
                    src={require("../../../public/img/homeAssets/integration/pocket.png")}
                  />
                </div>
                <span className="roundBadgeLabel">Pocket</span>
              </div>
              <div className="col-md-2">
                <div className="roundBadge">
                  <img
                    src={require("../../../public/img/homeAssets/integration/buffer.png")}
                  />
                </div>
                <span className="roundBadgeLabel">Buffer</span>
              </div>
              <div className="col-md-2">
                <div className="roundBadge">
                  <img
                    src={require("../../../public/img/homeAssets/integration/gmail.png")}
                  />
                </div>
                <span className="roundBadgeLabel">Gmail</span>
              </div>
            </div>
            <div className="col-md-12">
              <div className="col-md-2">
                <div className="roundBadge">
                  <img
                    src={require("../../../public/img/homeAssets/integration/mailchimp.png")}
                  />
                </div>
                <span className="roundBadgeLabel">Mailchimp</span>
              </div>
              <div className="col-md-2">
                <div className="roundBadge">
                  <img
                    src={require("../../../public/img/homeAssets/integration/dropbox.png")}
                  />
                </div>
                <span className="roundBadgeLabel">Dropbox</span>
              </div>
              <div className="col-md-2">
                <div className="roundBadge">
                  <img
                    src={require("../../../public/img/homeAssets/integration/gd.png")}
                  />
                </div>
                <span className="roundBadgeLabel">Google Drive</span>
              </div>
              <div className="col-md-2">
                <div className="roundBadge">
                  <img
                    src={require("../../../public/img/homeAssets/integration/slack.png")}
                  />
                </div>
                <span className="roundBadgeLabel">Slack</span>
              </div>
              <div className="col-md-2">
                <div className="roundBadge">
                  <img
                    src={require("../../../public/img/homeAssets/integration/skype.png")}
                  />
                </div>
                <span className="roundBadgeLabel">Skype</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Section5;
