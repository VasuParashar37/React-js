import React from "react";
import ReactDOM from "react-dom/client";


// react element
const elem=<span>Span in inside h1 tag</span>
// react element
const heading=(<h1 className="head">
    {elem}
    Hello Bhai Namaste</h1>);
//react functional component
const HeadingComponent2=()=><h1 className="name">Heading component 2</h1>;

// react functional component
const HeadingComponent=()=>(
    <div id="container">
        {heading}
        {1000}
        <HeadingComponent2/>
        {/* or */}
        <HeadingComponent2></HeadingComponent2>
        {/* or */}
        {HeadingComponent2()}
        
        <h1 className="heading">Namaste React</h1>
    </div>
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
