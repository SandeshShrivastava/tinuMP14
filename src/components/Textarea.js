import React, { useCallback, useState } from "react";

export default function Textarea(props) {

  
  const handalupclick = () => {
    console.log("Upper click");
    let newtext = text.toLocaleUpperCase();
    settext(newtext);
  };
  const handallowerclick = () => {
    console.log("Lower click");
    let newtext = text.toLocaleLowerCase();
    settext(newtext);
  };
  const handalclearclick = () => {
    alert("Conform youn have to clear the data")
    console.log("clear click");
    let newtext = " ";
    settext(newtext);
  };
  const handleonChange = (event) => {
    // console.log("handlon change")

    settext(event.target.value);
  };

  const [text, settext] = useState("Enter your text");
  return (
    <>
      <div className="mb-1">
        <h1>{props.heading}</h1>
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          {props.Textarea}
        </label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleonChange}
          id="exampleFormControlTextarea1"
          rows="5"
        ></textarea>
      </div>
      <br />
      <button
        type="button"
        onClick={handalupclick}
        className="btn btn-dark mx-2"
        id="btn"
      >
        Uppercase
      </button>
      <button
        type="button"
        onClick={handallowerclick}
        className="btn btn-primary mx-2"
        id="btn"
      >
        Lowercase
      </button>
      <button
        type="button"
        onClick={handalclearclick}
        className="btn btn-danger mx-2"
        id="btn"
      >
        Clear text
      </button>
      <br />
      <div className="container my-3" >
        <h1>Summery of your text</h1>
        <p>
          {text.split(" ").length} Words and {text.length}Charcter
        </p>
        <p>{0.008 * text.split("").length}Minitus to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
      <div className="contaner">

      </div>
    </>
  )
};
