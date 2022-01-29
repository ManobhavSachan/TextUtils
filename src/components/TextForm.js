import React, {useState} from "react";

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = ()=>{
        // console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
        // console.log("UpperCase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = ()=>{
        // console.log("UpperCase was clicked" + text);
        let newText = "";
        setText(newText);
    }
    const handleCopyClick = (event)=>{
        let newText = document.getElementById("mybox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
    }
    const handleRspaceClick = (event)=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        navigator.clipboard.writeText(newText.value);
    }
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
  return (
    <>
    <div className="container my-3">
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          value = {text}
          onChange={handleOnChange}
          id="mybox"
          rows="8"
        ></textarea>
      </div>
      <div>
          <button className="btn btn-primary mx-2" onClick = {handleUpClick}>Convert to UpperCase</button>
          <button className="btn btn-primary mx-2" onClick = {handleLoClick}>Convert to LowerCase</button>
          <button className="btn btn-primary mx-2" onClick = {handleRspaceClick}>Remove Extra Spaces</button>
          <button className="btn btn-primary mx-2" onClick = {handleCopyClick}>Copy Text</button>
          <button className="btn btn-primary mx-2" onClick = {handleClearClick}>Clear</button>
      </div>
    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.length > 0 ? text.split(" ").length : 0} words and {text.length} characters</p>
        <p>{0.008 * (text.length > 0 ? text.split(" ").length : 0)} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text: "Enter Something to preview"}</p>
    </div>
    </>
  );
}
