import React from "react";
import "./Documentation.css";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function Documentation () {
  return (
    <div style={{display: "flex", marginTop: 30, marginBottom: -60, justifyContent: "center"}}>
      <div className="side-menu">
        <ul style={{display: "flex", flexDirection: "column", paddingTop: 70}}>
          <li style={{marginBottom: 10}}>
            <a href="#installation" className="menu-link">
              Installation
            </a>
          </li>
          <li style={{marginBottom: 10}}>
            <a href="#usage" className="menu-link">
              Usage
            </a>
          </li>
          <li style={{marginBottom: 10}}>
            <a href="#props" className="menu-link">
              Props
            </a>
          </li>
          <li style={{marginBottom: 10, marginLeft: 36}}>
            <a href="#style" style={{fontWeight: "normal"}} className="menu-link">
              style
            </a>
          </li>
          <li style={{marginBottom: 10, marginLeft: 36}}>
            <a href="#className" style={{fontWeight: "normal"}} className="menu-link">
              className
            </a>
          </li>
          <li style={{marginBottom: 10, marginLeft: 36}}>
            <a href="#play" style={{fontWeight: "normal"}} className="menu-link">
              play
            </a>
          </li>
          <li style={{marginBottom: 10, marginLeft: 36}}>
            <a href="#pauseOnHover" style={{fontWeight: "normal"}} className="menu-link">
              pauseOnHover
            </a>
          </li>
          <li style={{marginBottom: 10, marginLeft: 36}}>
            <a href="#pauseOnClick" style={{fontWeight: "normal"}} className="menu-link">
              pauseOnClick
            </a>
          </li>
          <li style={{marginBottom: 10, marginLeft: 36}}>
            <a href="#direction" style={{fontWeight: "normal"}} className="menu-link">
              direction
            </a>
          </li>
          <li style={{marginBottom: 10, marginLeft: 36}}>
            <a href="#speed" style={{fontWeight: "normal"}} className="menu-link">
              speed
            </a>
          </li>
          <li style={{marginBottom: 10, marginLeft: 36}}>
            <a href="#delay" style={{fontWeight: "normal"}} className="menu-link">
              delay
            </a>
          </li>
          <li style={{marginBottom: 10, marginLeft: 36}}>
            <a href="#gradient" style={{fontWeight: "normal"}} className="menu-link">
              gradient
            </a>
          </li>
          <li style={{marginBottom: 10, marginLeft: 36}}>
            <a href="#gradientColor" style={{fontWeight: "normal"}} className="menu-link">
              gradientColor
            </a>
          </li>
          <li style={{marginBottom: 10, marginLeft: 36}}>
            <a href="#gradientWidth" style={{fontWeight: "normal"}} className="menu-link">
              gradientWidth
            </a>
          </li>
          <li style={{marginBottom: 10, marginLeft: 36}}>
            <a href="#children" style={{fontWeight: "normal"}} className="menu-link">
              children
            </a>
          </li>
        </ul>
      </div>

      <div className="content">
        <a className="hash-link" id="installation" href="/documentation/#installation">
          <h1>Installation</h1>
        </a>
        <p>If you're using <code>npm</code>, in the command prompt run:</p>
        <SyntaxHighlighter language="shell" style={vs}>
          npm install react-fast-marquee --save
        </SyntaxHighlighter>
        <p>If you're using <code>yarn</code>, run:</p>
        <SyntaxHighlighter language="shell" style={vs}>
          yarn add react-fast-marquee
        </SyntaxHighlighter>

        <a className="hash-link" id="usage" href="/documentation/#usage">
          <h1>Usage</h1>
        </a>
        <p>To use the component, first import it into your file:</p>
        <SyntaxHighlighter language="javascript|html" style={vs}>
          import Marquee from "react-fast-marquee";
        </SyntaxHighlighter>
        <p>Then wrap the <code>{"<Marquee>"}</code> tags around any component or text you'd like to slide.</p>
        <SyntaxHighlighter language="htmlbars" style={vs}>
          {`<Marquee>
  I can be a React component, multiple React components, or just some text.
</Marquee>`}
        </SyntaxHighlighter>
        <p>A sample file might look like this:</p>
        <SyntaxHighlighter language="javascript | htmlbars" style={vs}>
          {`import React from "react";
import MyComponent from "../components/MyComponent";
import Marquee from "react-fast-marquee";

const App = () => (
  <Marquee>
    <MyComponent />
    <MyComponent />
    <MyComponent />
  </Marquee>
);

export default App;`}
        </SyntaxHighlighter>
        <a className="hash-link" id="props" href="/documentation/#props">
          <h1>Props</h1>
        </a>
        <a className="hash-link" id="style" href="/documentation/#style">
          <SyntaxHighlighter className="props-name" language="javascript" style={vs}>
            style
          </SyntaxHighlighter>
        </a>
        <p>The inline style for the container div.</p>
        <table className="props-data">
          <tr style={{fontWeight: "bold"}}>
            <th>Type</th>
            <th>Default</th>
            <th>Required</th>
          </tr>
          <tr>
            <td>Object</td>
            <td>{"{}"}</td>
            <td>No</td>
          </tr>
        </table>
        <a className="hash-link" id="className" href="/documentation/#className">
          <SyntaxHighlighter className="props-name" language="javascript" style={vs}>
            className
          </SyntaxHighlighter>
        </a>
        <p>The name of the css class to style the container div.</p>
        <table className="props-data">
          <tr style={{fontWeight: "bold"}}>
            <th>Type</th>
            <th>Default</th>
            <th>Required</th>
          </tr>
          <tr>
            <td>string</td>
            <td>{'""'}</td>
            <td>No</td>
          </tr>
        </table>
        <a className="hash-link" id="play" href="/documentation/#play">
          <SyntaxHighlighter className="props-name" language="javascript" style={vs}>
            play
          </SyntaxHighlighter>
        </a>
        <p>Whether to play or pause the marquee.</p>
        <table className="props-data">
          <tr style={{fontWeight: "bold"}}>
            <th>Type</th>
            <th>Default</th>
            <th>Required</th>
          </tr>
          <tr>
            <td>boolean</td>
            <td>true</td>
            <td>No</td>
          </tr>
        </table>
        <a className="hash-link" id="pauseOnHover" href="/documentation/#pauseOnHover">
          <SyntaxHighlighter className="props-name" language="javascript" style={vs}>
            pauseOnHover
          </SyntaxHighlighter>
        </a>
        <p>Whether to pause the marquee when hovered.</p>
        <table className="props-data">
          <tr style={{fontWeight: "bold"}}>
            <th>Type</th>
            <th>Default</th>
            <th>Required</th>
          </tr>
          <tr>
            <td>boolean</td>
            <td>false</td>
            <td>No</td>
          </tr>
        </table>
        <a className="hash-link" id="pauseOnClick" href="/documentation/#pauseOnClick">
          <SyntaxHighlighter className="props-name" language="javascript" style={vs}>
            pauseOnClick
          </SyntaxHighlighter>
        </a>
        <p>Whether to pause the marquee when clicked.</p>
        <table className="props-data">
          <tr style={{fontWeight: "bold"}}>
            <th>Type</th>
            <th>Default</th>
            <th>Required</th>
          </tr>
          <tr>
            <td>boolean</td>
            <td>false</td>
            <td>No</td>
          </tr>
        </table>
        <a className="hash-link" id="direction" href="/documentation/#direction">
          <SyntaxHighlighter className="props-name" language="javascript" style={vs}>
            direction
          </SyntaxHighlighter>
        </a>
        <p>The direction the marquee is sliding.</p>
        <table className="props-data">
          <tr style={{fontWeight: "bold"}}>
            <th>Type</th>
            <th>Default</th>
            <th>Required</th>
          </tr>
          <tr>
            <td>"left" or "right"</td>
            <td>"left"</td>
            <td>No</td>
          </tr>
        </table>
        <a className="hash-link" id="speed" href="/documentation/#speed">
          <SyntaxHighlighter className="props-name" language="javascript" style={vs}>
            speed
          </SyntaxHighlighter>
        </a>
        <p>The speed calculated as pixels/second.</p>
        <table className="props-data">
          <tr style={{fontWeight: "bold"}}>
            <th>Type</th>
            <th>Default</th>
            <th>Required</th>
          </tr>
          <tr>
            <td>number</td>
            <td>20</td>
            <td>No</td>
          </tr>
        </table>
        <a className="hash-link" id="delay" href="/documentation/#delay">
          <SyntaxHighlighter className="props-name" language="javascript" style={vs}>
            delay
          </SyntaxHighlighter>
        </a>
        <p>The duration to delay the animation after render, in seconds.</p>
        <table className="props-data">
          <tr style={{fontWeight: "bold"}}>
            <th>Type</th>
            <th>Default</th>
            <th>Required</th>
          </tr>
          <tr>
            <td>number</td>
            <td>0</td>
            <td>No</td>
          </tr>
        </table>
        <a className="hash-link" id="gradient" href="/documentation/#gradient">
          <SyntaxHighlighter className="props-name" language="javascript" style={vs}>
            gradient
          </SyntaxHighlighter>
        </a>
        <p>Whether to show the gradient or not.</p>
        <table className="props-data">
          <tr style={{fontWeight: "bold"}}>
            <th>Type</th>
            <th>Default</th>
            <th>Required</th>
          </tr>
          <tr>
            <td>boolean</td>
            <td>true</td>
            <td>No</td>
          </tr>
        </table>
        <a className="hash-link" id="gradientColor" href="/documentation/#gradientColor">
          <SyntaxHighlighter className="props-name" language="javascript" style={vs}>
            gradientColor
          </SyntaxHighlighter>
        </a>
        <p>The rgb color of the gradient as an array of length 3.</p>
        <table className="props-data">
          <tr style={{fontWeight: "bold"}}>
            <th>Type</th>
            <th>Default</th>
            <th>Required</th>
          </tr>
          <tr>
            <td>Array{`<number>`} of length 3</td>
            <td>[255, 255, 255]</td>
            <td>No</td>
          </tr>
        </table>
        <a className="hash-link" id="gradientWidth" href="/documentation/#gradientWidth">
          <SyntaxHighlighter className="props-name" language="javascript" style={vs}>
            gradientWidth
          </SyntaxHighlighter>
        </a>
        <p>The width of the gradient on either side.</p>
        <table className="props-data">
          <tr style={{fontWeight: "bold"}}>
            <th>Type</th>
            <th>Default</th>
            <th>Required</th>
          </tr>
          <tr>
            <td>number or string</td>
            <td>200</td>
            <td>No</td>
          </tr>
        </table>
        <a className="hash-link" id="children" href="/documentation/#children">
          <SyntaxHighlighter className="props-name" language="javascript" style={vs}>
            children
          </SyntaxHighlighter>
        </a>
        <p>The children rendered inside the marquee.</p>
        <table className="props-data">
          <tr style={{fontWeight: "bold"}}>
            <th>Type</th>
            <th>Default</th>
            <th>Required</th>
          </tr>
          <tr>
            <td>ReactNode</td>
            <td>null</td>
            <td>No</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Documentation;