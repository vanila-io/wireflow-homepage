import React from 'react';
import { Link } from 'react-router';
import ReactVideo from 'react.video';

class Section6 extends React.Component {
  render() {
    return (
      <div id="section6">
        <div className="sectionInner">
        <div className="col-md-12 headingTitle">
            <h2>Usage <strong>Cases & Ideas</strong></h2>
            <p className="shortTagline">These are just some on top of our heads. Possibilities are endless.</p>
        </div>
        <div className="rowUsageCards">
           <div className="col-md-12">
             <div className="col-md-4 col-sm-6 featureBottom">
               <div className="usageCard">
               <img src={require('../../../public/img/homeAssets/usage-cards/1.png')} />
                <h3 className="featureTitle">Ecommerce Price Monitoring</h3>
                <p className="featureDescription">
                  You can monitor your best competitors, their prices and get alerts on change.
                  Not only that, but you can monitor if they added new products, discounts, they are out of stock or even get negative feedback.
                  This way you will able to make a decision at the right moment, taking action and stay ahead of your dear competitors :).
                </p>
                </div>
             </div>
             <div className="col-md-4 featureBottom featureMid">
               <div className="usageCard">
               <img src={require('../../../public/img/homeAssets/usage-cards/2.png')} />
                <h3 className="featureTitle">SEO & Link Building</h3>
                <p className="featureDescription">
                  You can search for competitors in your niche, who talk about them and create new link opportunity from extracted data.
                  A good way of getting fresh link opportunities is to sort listing data of SE you are scraping by 24h, day, week, and that way getting newest indexed links.
                  You can even create monitor which will constantly check if new data is available.
                </p>
                </div>
             </div>
             <div className="col-md-4 featureBottom featureBottom3">
               <div className="usageCard">
               <img src={require('../../../public/img/homeAssets/usage-cards/3.png')} />
                <h3 className="featureTitle">Machine Learning / AI</h3>
                <p className="featureDescription">
                  When it comes to machine learning, Automatio seems like missing link in that story. A platform like MonkeyLearn.com gives you the ability to actually learn from your data.
                  Basically, You can use Automatio to scrape YP reviews of the specific business, send data to MonkeyLearn and get sentimentality of users feedback (positive or negative).
                </p>
                </div>
             </div>
           </div>
           <div className="col-md-12 usageCardsUp">
             <div className="col-md-4 featureBottom">
               <div className="usageCard">
               <img src={require('../../../public/img/homeAssets/usage-cards/4.png')} />
                <h3 className="featureTitle">Dropshipping & Bulk Product Import</h3>
                <p className="featureDescription">
                  So you wanna start new drop shipping niche or just add new category or products to your existing Shopify store.
                  What you can do is, to find an e-store you wanna grab products from (Aliexpress), open Automatio extension, select data you want and then use Zapier
                  to automated importing of scraped products into your Shopify or another e-store.
                </p>
                </div>
             </div>
             <div className="col-md-4 featureBottom featureMid">
               <div className="usageCard">
               <img src={require('../../../public/img/homeAssets/usage-cards/5.png')} />
                <h3 className="featureTitle">Automate Slack Posting</h3>
                <p className="featureDescription">
                  Let's say that every time your favorite Medium publication release new story, you want to automatically post it on the specific Slack channel.
                  Or, if any new shot with logo keyword, come up on Dribbble, post it to #logo-inspiration channel. You can do this in few minutes with Automatio, with not a single line of code.
                </p>
                </div>
             </div>
             <div className="col-md-4 featureBottom featureBottom3">
               <div className="usageCard">
               <img src={require('../../../public/img/homeAssets/usage-cards/6.png')} />
                <h3 className="featureTitle">Talents Regrouting</h3>
                <p className="featureDescription">
                  You have a project and need Meteor.js developer, but you don't wanna go trough platforms like Upwork etc.
                  Again, in just a few minutes you can setup deep-link scraper which will go on github.com/meteor/meteor repo and scrape all information of people who starred or even contributed.
                  Then you can use any outreach tool like Gmass, MailShake and send mass personalized emails.
                </p>
                </div>
             </div>
           </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Section6;
