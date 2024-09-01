import React, { useState } from "react";

export default function TextForm(props) {

    const handleUpClick = ()=>{ 
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase!", "success");
    }
    const handleLoClick = ()=>{
        let lowText = text.toLowerCase();
        setText(lowText)
        props.showAlert("converted to lowercase!", "success");

    }
    const handleClearClick = ()=>{
        let CText = ('');
        setText(CText)
    }
    
    const handleOnChange = (event)=>{
        console.log("on changed done");
        setText(event.target.value)
        
    }

   const [text, setText] = useState('');

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'rgb(3, 46, 82)'}}>
      <h1>
        {props.heading} 
      </h1>
      <div className="mb-3">
        <textarea className="form-control" value ={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'?'#201f1f':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick} >Convert to Uppercaase </button>
      <button className="btn btn-primary mx-1.5 my-2" onClick={handleLoClick} >Convert to Lowercase </button>
      <button className="btn btn-warning mx-3" onClick={handleClearClick} >Clear</button>
    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'rgb(3, 46, 82)'}}>
      <h2>your text summary</h2>
      <p>{text.split(" ").length}words and {text.length}charachters</p>
      <p> {0.008* text.split(" ").length} Minutes to read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"enter text to preview here"}</p>
    </div>
    </>
  );
}
