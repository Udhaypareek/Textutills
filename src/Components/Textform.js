import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    // SetText("You have clicked on handleUpClick");
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to uppercase!");
  };
  const handlelowClick = () => {
    // console.log("Lowercase was clicked");
    // SetText("You have clicked on handlelowClick");
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to lowercase!");
  }
  const handleclearClick = () => {
    setText("");
    props.showAlert("Text Cleared!");
  };
  const handlecopyclick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard");
  };
  return (
    <>
      <div>
        <h1 style={{ color: props.mode === 'dark' ? 'whitesmoke' : 'black' }}>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="10"></textarea>
          <button className="btn btn-primary my-2" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary my-2 mx-2"  onClick={handlelowClick}>Convert to Lowercase</button>
          <button className="btn btn-primary my-2"  onClick={handleclearClick}>Clear</button>
          <button className="btn btn-primary my-2 mx-2"  onClick={handlecopyclick}>Copy Text</button>
        </div>
      </div>
    <div className="row">
  <div className="col-sm-4 mb-3 mb-sm-0">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Word Count</h5>
        <p className="card-text">The total number of word is {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} .</p>
      </div>
    </div>
  </div>
  <div className="col-sm-4 mb-3 mb-sm-0">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Character Count</h5>
        <p className="card-text">The total number of Character is {text.length}.</p>
      </div>
    </div>
  </div>
  <div className="col-sm-4 mb-3 mb-sm-0">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Time to read</h5>
        <p className="card-text">The total Time to read is {0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes.</p>
      </div>
    </div>
  </div>
</div>
    </>
  );
}