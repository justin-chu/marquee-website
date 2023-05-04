import React from "react";
import "./Documentation.css";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const marqueeProps = {
  style: {
    description: "The inline style for the container div.",
    type: "CSSProperties",
    defaultValue: "{}",
    required: false
  },
  className: {
    description: "The name of the css class to style the container div.",
    type: "string",
    defaultValue: '""',
    required: false
  },
  autoFill: {
    description: "Whether to automatically fill blank space in the marquee with copies of the children or not.",
    type: "boolean",
    defaultValue: "false",
    required: false
  },
  play: {
    description: "Whether to play or pause the marquee.",
    type: "boolean",
    defaultValue: "true",
    required: false
  },
  pauseOnHover: {
    description: "Whether to pause the marquee when hovered.",
    type: "boolean",
    defaultValue: "false",
    required: false
  },
  pauseOnClick: {
    description: "Whether to pause the marquee when clicked.",
    type: "boolean",
    defaultValue: "false",
    required: false
  },
  direction: {
    description: "The direction the marquee is sliding. Warning: Vertical marquees are currently experimental and may be buggy. Please swap the values of the marquee's height and width when setting them ",
    type: '"left" | "right" | "up" | "down"',
    defaultValue: "left",
    required: false
  },
  speed: {
    description: "The speed calculated as pixels/second.",
    type: "number",
    defaultValue: "50",
    required: false
  },
  delay: {
    description: "The duration to delay the animation after render, in seconds.",
    type: "number",
    defaultValue: "0",
    required: false
  },
  loop: {
    description: "The number of times the marquee should loop, 0 is equivalent to infinite.",
    type: "number",
    defaultValue: "0",
    required: false
  },
  gradient: {
    description: "Whether to show the gradient or not.",
    type: "boolean",
    defaultValue: "false",
    required: false
  },
  gradientColor: {
    description: "The rgb color of the gradient as an array of length 3.",
    type: "Array<number> of length 3",
    defaultValue: "[255, 255, 255]",
    required: false
  },
  gradientWidth: {
    description: "The width of the gradient on either side.",
    type: "number",
    defaultValue: "200",
    required: false
  },
  onFinish: {
    description: "A callback for when the marquee finishes scrolling and stops. Only calls if loop is non-zero.",
    type: "function",
    defaultValue: "{() => void}",
    required: false
  },
  onCycleComplete: {
    description: "A callback for when the marquee finishes a loop. Does not call if maximum loops are reached (use onFinish instead).",
    type: "{() => void}",
    defaultValue: "null",
    required: false
  },
  children: {
    description: "The children rendered inside the marquee.",
    type: "ReactNode",
    defaultValue: "null",
    required: true
  }
}

const PropListItem = (name) => (
  <li style={{marginBottom: 10, marginLeft: 36}}>
    <a href={`#${name}`} style={{fontWeight: "normal"}} className="menu-link">
      {name}
    </a>
  </li>
)

const PropDetails = ({name, description, type, defaultValue, required}) => (
  <>
    <a className="hash-link" id={name} href={`/documentation/#${name}`}>
      <SyntaxHighlighter className="props-name" language="javascript" style={vs}>
        {name}
      </SyntaxHighlighter>
    </a>
    <p>{description}</p>
    <table className="props-data">
      <tr style={{fontWeight: "bold"}}>
        <th>Type</th>
        <th>Default</th>
        <th>Required</th>
      </tr>
      <tr>
        <td>{type}</td>
        <td>{defaultValue}</td>
        <td>{required ? "Yes" : "No"}</td>
      </tr>
    </table>
  </>
)

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
          {Object.keys(marqueeProps).map(PropListItem)}
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
        {Object.entries(marqueeProps).map(([name, props]) => (
          <PropDetails key={name} name={name} {...props} />
        ))}
      </div>
    </div>
  )
}

export default Documentation;
