import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCapCase = () => {
    let newText = text
      .split(' ')
      .filter((a) => a)
      .map((a) => a[0].toUpperCase() + a.slice(1))
      .join(' ');
    setText(newText);
  };

  const handleScCase = () => {
    let newText = text.toLowerCase();
    newText = newText[0].toUpperCase() + newText.slice(1);
    newText = newText.split('');
    console.log(newText[812]);
    for (let i = 0; i < newText.length; i++) {
      if (newText[i] === '.' && newText[i + 2] !== undefined) {
        if (newText[i + 1] === ' ') {
          newText[i + 2] = newText[i + 2].toUpperCase();
        } else if (newText[i + 1] !== ' ') {
          newText[i + 1] = newText[i + 1].toUpperCase();
        }
      }
      if (newText[i] === '.' && typeof newText[i + 1] === 'string') {
        newText[i + 2] = newText[i + 2].toUpperCase();
      }
    }
    newText = newText.join('');
    setText(newText);
  };

  const handleClCase = () => {
    let newText = '';
    setText(newText);
  };

  const [text, setText] = useState('');

  return (
    <>
      <div className="container">
        <h1>{props.title}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows={10}
            value={text}
            onChange={handleOnChange}
          />
        </div>
        <div className="container">
          <button className="btn btn-primary mx-2" onClick={handleUpCase}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleLoCase}>
            Convert to lowercase
          </button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleCapCase}>
            Capitalize
          </button>
          <button className="btn btn-primary mx-2 my-1" onClick={handleScCase}>
            Sentence Case
          </button>
          <button className="btn btn-primary mx-2 my-1" onClick={handleClCase}>
            Clear
          </button>
        </div>
      </div>
      <div className="cointainer my-5">
        <h4>Text Summary</h4>
        <b>
          {text.split(' ').filter((a) => a).length} words and{' '}
          {text.replace(/\s/g, '').length} letters
        </b>
      </div>
    </>
  );
}
