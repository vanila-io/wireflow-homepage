import React from "react";
import { Link } from "react-router";
import ReactVideo from "react.video";

class SectionFewWords extends React.Component {
  render() {
    return (
      <div id="SectionFewWords">
        <div className="sectionInner">
          <div className="col-md-6 col-md-offset-3">
            <h2>Few words ...</h2>
            <p>
              Thanks for reading this.
              <br />
              <br />
              My name is Stefan, and I started Automatio as a side project. I
              have this idea for 4-5 years now and I'm happy that it's reaching
              the stage where it becomes an amazing tool.
              <br />
              <br />I built this tool for myself. That means that I created it
              for my needs where I tried to solve daily obstacles. I could
              release Automatio a few months ago as a very limited tool, but I
              didn't want. We don't need another limited tool. Great user
              experience and functionality is what I am obsessed with. That's
              why I'm gonna try to produce a really useful tool.
              <br />
              <br />
              This is not another startup trying to validate an idea, build MVP
              and just raise the money. I don't need to validate it, cause I
              know it's gonna work and provide the value. Automatio is too far
              from MVP now. This project is self-funded, and it will continue to
              be until I feel different.
              <br />
              <br />
              Don't mind the poorly written copies, my English sux and I don't
              like to write (currently).
            </p>
            <p className="poweredByText">
              Built by <a href="https://vanila.io">Vanila.io</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionFewWords;
