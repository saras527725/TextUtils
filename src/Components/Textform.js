import React, { useState } from 'react'
const Textform = (props) => {
    const [text, settextvalue] = useState('');
    const [message, setMessage] = useState('');
    const handleUpClick = () => {
        let newtext = text.toUpperCase();
       settextvalue(newtext)
       props.showAlert("Converted to uppercase!", "success");
    }
    const handlelowClick = () => {
        let newtext = text.toLowerCase();
       settextvalue(newtext)
       props.showAlert("Converted to lowercase!", "success");
    }
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
}
    const handleClearClick = () => {
    settextvalue('');
    props.showAlert("Text Cleared!", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        settextvalue(newText.join(" "));    
         props.showAlert("Extra spaces removed!", "success");
    }
    const handleCapitalizeWords = () => {
        // Capitalize the first letter of each word
        let capitalizedText = text.replace(/\b\w/g, (char) => char.toUpperCase());
        settextvalue(capitalizedText);
        props.showAlert("First letter of each word capitalized.", "success");
    }
    const handleSpeakClick = () => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(utterance);
        } else {
            setMessage('Speech synthesis not supported in this browser.');
        }
    }  
     const handleRemoveDuplicates = () => {
        const uniqueWords = [...new Set(text.split(" "))].join(" ");
        settextvalue(uniqueWords);
        props.showAlert("Duplicate words removed.", "success");
    }
    const handleOnChange = (event) => {
        // console.log("On Change");
        settextvalue(event.target.value); 
    }
   const countWords = () => {
    let words = text.split(/\s+/).filter((element) => element.length !== 0);
        return words.length;
    };
     const wordCount = countWords();
    console.log("wordslength" + wordCount);
    return (<>
        <div><h1>Textform</h1> </div>      
        <div className="container-xxl"  style={{ padding: '20px', boxSizing: 'border-box' }}>
            <label htmlFor="mybox" className="form-label" ><h3>Enter the text to analyze </h3></label>
            {/* <textarea className="form-control" id="exampleFormControlTextarea1" rows="3">row=3 indicate size of box  */}
            <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="4"  >{/*row=3 indicate size of box*/}
            </textarea>
            <button className="btn btn-info mx-2 my-3" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-info mx-2 my-3" onClick={handlelowClick}>Convert to Lowercase</button>
            <button className="btn btn-info mx-2 my-3" onClick={handleCopyClick}>Copy Text {message}</button>
            <button className="btn btn-info mx-2 my-3"  onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-info mx-2 my-3"  onClick={handleExtraSpaces}>Remove Extra Space</button>
            <button className="btn btn-info mx-2 my-3"  onClick={handleSpeakClick}>Speak Text</button>
            <button className="btn btn-info mx-2 my-3"  onClick={handleCapitalizeWords}>Uppercase First word</button>
            <button className="btn btn-info mx-2 my-3"  onClick={handleRemoveDuplicates}>RemoveDuplicates</button>
        </div>
        
           <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
    </>
    )
}
export default Textform
