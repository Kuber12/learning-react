import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleOnChange = (e) => {
        setText(e.target.value);
    }
    const handleUpcaseClick = () => {
        let newText = text.toUpperCase(); 
        setText(newText);
        props.showAlert("Converted to Uppercase","Success");
    }
    const handleLowerClick = () => {
        let newText = text.toLowerCase(); 
        setText(newText);  
        props.showAlert("Converted to Lowercase","Success");
    }
    const handleClearClick = () => {
        let newText = ""; 
        setText(newText);  
        props.showAlert("Text Area Cleared","Success");
    }
    const aAdderClick = () => {
        let newText = "";
        text.split(" ").forEach((word)=>{
            if(word === ""){
                return false;
            }
            newText += word + "a ";
        })
        setText(newText); 
        props.showAlert("Added 'a' to all the words","Success");
    }
    const capitalizeClick = () => {
        let newText = "";
        text.split(" ").forEach((word)=>{
            if(word === " "){return false};
            newText += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() + " ";
        })
        setText(newText); 
        props.showAlert("Text Capitalized","Success");
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Text to Speech Activated","Success");
      }
    const [text,setText] = useState("");
  return (
    <>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode ==="dark"?"black":"white",color:  props.mode ==="dark"?"white":"black"}}></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-2" onClick={handleUpcaseClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleLowerClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary mx-2 my-2" onClick={aAdderClick}>A adder</button>
            <button className="btn btn-primary mx-2 my-2" onClick={capitalizeClick}>Capitalize</button>
            <button className="btn btn-warning mx-2 my-2" onClick={speak} >Speak</button>
        </div>                      
        <div className="preview">
            {text.length} characters and {text.split(" ").filter((element) => {return element.length!==0}).length} words.
            <h1>Your text preview</h1>
            <p>{text}</p>       
        </div>
    </>
  )
}
TextForm.propTypes = {
    heading: PropTypes.string,
}