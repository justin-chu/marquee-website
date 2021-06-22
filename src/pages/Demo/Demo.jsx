import React from "react";
import "./Demo.css";
import { SliderItems } from "../Home/SliderItems";
import { WelcomeText } from "../Home/WelcomeText";
import Marquee from "react-fast-marquee";

function Demo () {
  const [index, setIndex] = React.useState(0)
  const [play, setPlay] = React.useState(true)
  const [pauseOnHover, setPauseOnHover] = React.useState(false)
  const [pauseOnClick, setPauseOnClick] = React.useState(false)
  const [direction, setDirection] = React.useState("left")
  const [speed, setSpeed] = React.useState(30)
  const [delay, setDelay] = React.useState(0)
  const [loop, setLoop] = React.useState(0)
  const [gradient, setGradient] = React.useState(true)
  const [gradientColor, setGradientColor] = React.useState([248, 251, 253])
  const [gradientWidth, setGradientWidth] = React.useState(200)

  return (
    <div style={{marginTop: 100}}>
      <div style={{fontWeight: "bold", textAlign: "center", fontSize: 24, marginBottom: 20}}>
        <button className={index === 0 ? "marquee-button-selected" : "marquee-button"} onClick={() => setIndex(0)}><h1>Images</h1></button>
        <button className={index === 1 ? "marquee-button-selected" : "marquee-button"} onClick={() => setIndex(1)}><h1>Text</h1></button>
        <button className={index === 2 ? "marquee-button-selected" : "marquee-button"} onClick={() => setIndex(2)}><h1>Cards</h1></button>
      </div>
      <div style={{display: "flex", alignItems: "center", height: 300}}>
        <Marquee play={play} pauseOnHover={pauseOnHover} pauseOnClick={pauseOnClick} speed={speed}
          direction={direction} delay={delay} loop={loop} gradient={gradient} gradientColor={gradientColor} gradientWidth={`${gradientWidth}px`} >
          {index === 0 && SliderItems.map((item, index) => {
            return (
            <img src={require(`../../assets/images/${item.src}`)}
              height={50}
              style={{margin: "0 40px", marginTop: 80}}
              alt={item.alt} key={index} />
            );
          })}
          {index === 1 && WelcomeText.map((item, index) => {
            if(index % 2 === 0)
              return <h1 className="welcome-text" style={{color: "#444d54", marginTop: 80}} key={index}>{item.text}</h1>;
            else
              return <h1 className="welcome-text" style={{color: "#89939c", marginTop: 80}} key={index}>{item.text}</h1>;
          })}
          {index === 2 && 
          <>
            <div className="card" style={{display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center"}}>
              <img alt="" src="https://cdn.iconscout.com/icon/free/png-256/avatar-369-456321.png" width={100} height={100} style={{ borderRadius: 15}}/>
              <p style={{marginTop: 5, marginBottom: 0}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
            <div className="card" style={{display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center"}}>
              <img alt="" src="https://www.pngarts.com/files/5/Avatar-Face-Transparent.png" width={100} height={100} style={{ borderRadius: 15}}/>
              <p style={{marginTop: 5, marginBottom: 0}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
            <div className="card" style={{display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center"}}>
              <img alt="" src="https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png" width={100} height={100} style={{ borderRadius: 15}}/>
              <p style={{marginTop: 5, marginBottom: 0}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
            <div className="card" style={{display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center"}}>
              <img alt="" src="https://www.shareicon.net/data/512x512/2016/09/15/829471_user_512x512.png" width={100} height={100} style={{ borderRadius: 15}}/>
              <p style={{marginTop: 5, marginBottom: 0}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          </>
          }
        </Marquee>
      </div>

      <div className="playground">
        <div className="playground-buttons">
          <button style={{width: 80}} className="button" onClick={() => setPlay(!play)}>
            <p>{play ? "Pause" : "Play"}</p>
          </button>
          <button style={{width: 180}} className="button" onClick={() => setPauseOnHover(!pauseOnHover)}>
            <p>{pauseOnHover ? "Don't pause on hover" : "Pause on hover"}</p>
          </button>
          <button style={{width: 170}} className="button" onClick={() => setPauseOnClick(!pauseOnClick)}>
            <p>{pauseOnClick ? "Don't pause on click" : "Pause on click"}</p>
          </button>
          <button style={{width: 120}} className="button" onClick={() => setDirection(direction === "left" ? "right" : "left")}>
            <p>Direction: {direction}</p>
          </button>
          <button style={{width: 120}} className="button" onClick={() => setGradient(!gradient)}>
            <p>{gradient ? "No gradient" : "Gradient"}</p>
          </button>
        </div>

        <div className="playground-input">
          <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h3 style={{marginTop: 30, marginBottom: -20}}>Speed (px/s):</h3>
              <input style={{marginTop: 30}} value={speed} onChange={(e) => setSpeed(e.target.value)} className="input" />
          </div>
          <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h3 style={{marginTop: 30, marginBottom: -20}}>Delay (s):</h3>
              <input style={{marginTop: 30}} value={delay} onChange={(e) => setDelay(e.target.value)} className="input" />
          </div>
          <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h3 style={{marginTop: 30, marginBottom: -20}}>Loop (#):</h3>
              <input style={{marginTop: 30}} value={loop} onChange={(e) => setLoop(e.target.value)} className="input" />
          </div>
          <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h3 style={{marginTop: 30, marginBottom: -20}}>Gradient color (rgb):</h3>
            <div style={{display: "flex", width: 180, justifyContent: "space-between", margin: "auto", marginTop: 30}}>
              <input value={gradientColor[0]} onChange={(e) => setGradientColor([e.target.value, gradientColor[1], gradientColor[2]])} className="input" />
              <input value={gradientColor[1]} onChange={(e) => setGradientColor([gradientColor[0], e.target.value, gradientColor[2]])} className="input" />
              <input value={gradientColor[2]} onChange={(e) => setGradientColor([gradientColor[0], gradientColor[1], e.target.value])} className="input" />
            </div>
          </div>
          <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h3 style={{marginTop: 30, marginBottom: -20}}>Gradient width (px):</h3>
              <input style={{marginTop: 30}} value={gradientWidth} onChange={(e) => setGradientWidth(e.target.value)} className="input" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Demo;