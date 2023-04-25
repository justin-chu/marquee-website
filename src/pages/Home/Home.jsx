import React from "react";
import "./Home.css";
import { SliderItems } from './SliderItems';
import { WelcomeText } from './WelcomeText';
import GitHub from "../../assets/images/github.png";
import npm from "../../assets/images/npm.png";
import Yarn from "../../assets/images/yarn.png";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

function Home () {
  return (
    <div className="Home">
      <div className="introduction">
        <Marquee gradient speed={40} gradientColor={[248, 251, 253]} gradientWidth="10%" style={{marginTop: 100}}>
          {WelcomeText.map((item, index) => {
            if(index % 2 === 0)
              return <h1 className="welcome-text" style={{color: "#444d54"}} key={index}>{item.text}</h1>;
            else
              return <h1 className="welcome-text" style={{color: "#89939c"}} key={index}>{item.text}</h1>;
          })}
        </Marquee>
        <h1 className="title">React <span style={{fontStyle: "italic"}}>FAST</span> Marquee</h1>
        <p className="subtitle">A lightweight React component that harnesses the power of CSS animations to create silky smooth marquees.</p>
        <div className="button-container">
          <a className="button" href="https://github.com/justin-chu/react-fast-marquee" target="_blank" rel="noopener noreferrer">
            <img height={40} src={GitHub} alt="GitHub" />
          </a>
          <a className="button" href="http://npmjs.com/package/react-fast-marquee" target="_blank" rel="noopener noreferrer">
            <img height={40} src={npm} alt="npm" />
          </a>
          <a className="button" href="https://yarnpkg.com/package/react-fast-marquee" target="_blank" rel="noopener noreferrer">
            <img height={40} src={Yarn} alt="Yarn" />
          </a>
        </div>
        <p className="sponsor-text">Sponsored by (not actually):</p>
        <Marquee gradient speed={40} gradientColor={[248, 251, 253]} gradientWidth="10%" style={{marginTop: 20}}>
          {SliderItems.map((item, index) => {
            return (
            <img src={require(`../../assets/images/${item.src}`)}
              height={50}
              style={{margin: "0 40px"}}
              alt={item.alt} key={index} />
            );
          })}
        </Marquee>
      </div>

      <div className="examples">
        <h1 className="header">Examples</h1>
        <Marquee speed={20} gradient={false} style={{marginTop: 50}}>
          <div className="card">
            <img alt="" src="https://cdn.iconscout.com/icon/free/png-256/avatar-369-456321.png" width={100} height={100} style={{ borderRadius: 15}}/>
            <p style={{marginTop: 5, marginBottom: 0}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
              labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
          <div className="card">
            <img alt="" src="https://www.pngarts.com/files/5/Avatar-Face-Transparent.png" width={100} height={100} style={{ borderRadius: 15}}/>
            <p style={{marginTop: 5, marginBottom: 0}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
              labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
          <div className="card">
            <img alt="" src="https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png" width={100} height={100} style={{ borderRadius: 15}}/>
            <p style={{marginTop: 5, marginBottom: 0}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
              labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
          <div className="card">
            <img alt="" src="https://www.shareicon.net/data/512x512/2016/09/15/829471_user_512x512.png" width={100} height={100} style={{ borderRadius: 15}}/>
            <p style={{marginTop: 5, marginBottom: 0}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
              labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
        </Marquee>
        <Marquee direction="right" gradient={false} style={{marginTop: 80}}>
            <p style={{width: 700, fontSize: 20}}>
              This long marquee with text has no gradient and is sliding to the right.
            </p>
        </Marquee>
        <Marquee speed={300} gradient={false} style={{marginTop: 80}}>
            <h1 style={{width: 700, fontStyle: "italic", fontSize: 40, margin: 0}}>FAST</h1>
            <h1 style={{width: 700, fontStyle: "italic", fontSize: 40, margin: 0}}>FAST</h1>
            <h1 style={{width: 700, fontStyle: "italic", fontSize: 40, margin: 0}}>FAST</h1>
        </Marquee>
        <Marquee speed={50} gradient={false} pauseOnHover={true} style={{marginTop: 80}}>
            <h1 style={{width: 700, fontSize: 30, margin: 0}}>Hover over this marquee to pause it!</h1>
        </Marquee>
        <Marquee speed={70} gradient={false} pauseOnClick={true} style={{marginTop: 80}}>
            <h1 style={{width: 700, fontSize: 30, margin: 0}}>Hold your click on this one to pause it!</h1>
        </Marquee>
        <Marquee speed={70} gradient gradientColor={[255, 0, 0]} gradientWidth="40%" style={{marginTop: 80}}>
            <h1 style={{width: 700, fontSize: 30, margin: 0}}>A wider, red gradient</h1>
        </Marquee>
      </div>
      <div className="conclusion">
        <h1 className="header">Interested?</h1>
        <p className="conclusion-text">View the{" "}
          <Link to="/documentation" className="conclusion-link">docs</Link>{" "}
          for more information or play around with it in the{" "}
          <Link to="/demo" className="conclusion-link">demo page</Link>!
        </p>
      </div>
    </div>
  )
}

export default Home;