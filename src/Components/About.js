import React from 'react';

export default function About(props) {
  const colorchange = props.theme === 'dark' 
  ? { backgroundColor: '#121212', color: 'white' } 
  : { backgroundColor: 'white', color: 'black' };
  return (
    <>
      <div className='container' style={{ ...colorchange, padding: '20px', boxSizing: 'border-box' }}>
        <h1 className='my-3'>About Textutils</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item" style={colorchange}>
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={colorchange}>
                What is Texttutils?
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>Texttutils</strong> is an intuitive and text manipulation tool designed to make your writing tasks easier and more efficient. Whether you need to convert text to uppercase or lowercase, calculate writing speed, copy or clear text, or even speak your text aloud, Texttutils has it all.
              </div>
            </div>
          </div>

          <div className="accordion-item" style={colorchange}>
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={colorchange}>
                Key Features
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <ul>
                  <li>Convert text to Uppercase/Lowercase</li>
                  <li>Calculate writing speed</li>
                  <li>Copy text to clipboard</li>
                  <li>Clear text with a single click</li>
                  <li>Text-to-Speech functionality</li>
                  <li>Word and character count</li>
                  <li>Remove Space/Duplicate</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item" style={colorchange}>
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={colorchange}>
                Why Choose Texttutils?
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Texttutils is designed to enhance your text processing experience. It's perfect for students, writers, professionals, and anyone who works with text. Its simple, user-friendly interface makes it accessible to everyone, while its powerful features help streamline your workflow.
              </div>
            </div>
          </div>
{/* <p> {saras} </p> */}
        </div>
      </div>
    </>
  );
}
