import React, { useState } from 'react'

export default function TextForm(props) {

  function handleUpClick(){
    // console.log("button was clicked " + text);
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Convert to UpperCase","success");
  }

  function handleLoClick(){
    // console.log("button was clicked " + text);
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Convert to LowerCase","success");
  }

  function handleUpChange(event){
    // console.log("On Change");
    setText(event.target.value);
  }

  const handleClearText = ()=>{
    let newText = ' '
    setText(newText);
    props.showAlert("Text is Cleared","success");
  }

  const handleCopy = ()=>{
    let newText = document.getElementById('myBox');
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Copy to Clipboard","success");
  }

  const [text,setText] = useState('');  // text htae mr useState() htae ka sar htet htar dl
  // setText("new text");   // ae text htel ka sar ko update lote chin yin thone
  // text = "new Text";  // dr wrong change lo ma ya

  return (
    <>
      <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
              <textarea className="form-control" id="myBox" style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white',color: props.mode === 'dark' ? 'white' : 'black'}} onChange={handleUpChange} rows="8" value={text}></textarea>
          </div>
          <button className='btn btn-primary me-3' onClick={handleUpClick}>Convert UpperCase</button>
          <button className='btn btn-primary me-3' onClick={handleLoClick}>Convert LowerCase</button>
          <button className='btn btn-primary me-3' onClick={handleClearText}>Clear Text</button>
          <button className='btn btn-primary me-3' onClick={handleCopy}>Copy Text</button>
      </div>
      <div className='container my-3' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length}characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Something in the textbox above to preview it here"}</p>
      </div>
    </>
  )
}
