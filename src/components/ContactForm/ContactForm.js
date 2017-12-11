import React from 'react';
import './style.css';

class ContactForm extends React.Component {
  componentDidMount() {
    var postUrl = 'http://45.79.171.117:4000/mail/submit';
    var form = $('#contact-form');
    function success(b, c, a) {
      if (c === 'success') {
        $('#contact-form-waiting').css('display', 'none');
        $('#contact-form-success').css('display', 'block')
      } else {
        $('#contact-form-fail').css('display', 'block')
      }
    }
    form.submit(function(a) {
      a.preventDefault();
      var b = form.serialize();
      console.log(b);
      $.ajax({type: 'POST', url: postUrl, data: b, success: success})
    });
  }

  render() {
    const divStyle = {
      display: 'none'
    };
    return (
      <div id="contact" className="row rowContact">
        <h2 className="text-center enterFooter">We believe that
          <strong> success project</strong>
          <br></br>
          comes with success team</h2>
        <h3 className="text-center enterFooter">
          Start your project today and get fair estimation
        </h3>
        <div id="contact-form-waiting">
          <form className="contactForm" id="contact-form">
            <div className="form-group">
              <input type="text" name="name" required className="form-control iconUser" placeholder="Name"/>
            </div>
            <div className="form-group">
              <input required type="email" name="email" className="form-control iconEmail" id="exampleInputEmail1" placeholder="Email"/>
            </div>
            <div className="check">
              <span>In what service you are interested?</span>
            </div>
            <div className="checkbox checkbox-inline">
              <input name="options" value="ICO" id="checkbox1" className="styled" type="checkbox"/>
              <label htmlFor="checkbox1">
                ICO
              </label>
            </div>
            <div className="checkbox checkbox-inline">
              <input name="options" value="DAPP" id="checkbox2" className="styled" type="checkbox"/>
              <label htmlFor="checkbox2">
                DAPP
              </label>
            </div>
            <div className="checkbox checkbox-inline">
              <input name="options" value="Growth Hacking" id="checkbox3" className="styled" type="checkbox"/>
              <label htmlFor="checkbox3">
                Growth Hacking
              </label>
            </div>
            <div className="form-group">
              <textarea className="form-control iconPencil" name="text" cols="40" rows="5" required placeholder="Message"/>
            </div>
            <p>
              <input className="form-control iconBudget" type="number" name="budget" required placeholder="Your budget"/>
            </p>
            <button type="submit" className="btn btn-default btnGetStarted">Send</button>
            <p id="contact-form-fail" style={divStyle}>
              <span>An error occured.</span>
            </p>
          </form>
        </div>
        <div className="col-md-12" id="contact-form-success" style={divStyle}>
          <h2>Email sent.</h2>
        </div>
      </div>
    );
  }
}

export default ContactForm;
