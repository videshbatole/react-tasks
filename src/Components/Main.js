import React from "react";
import { useState } from "react";
import "../App.css";

function Main() {
  const [text, setText] = useState("");

  const getText = (e) => {
    setText(e.target.value);
  };

  const makeCapital = (e) => {
    let capitalText = text.toUpperCase();
     console.log(`Selected text: ${window.getSelection().toString().toUpperCase()}`);
    setText(capitalText);
  };

  const makeLower = (e) => {
    let samllText = text.toLowerCase();
    
    setText(samllText);
  };

  const makeBolder = (e) => {
    let boldText = text.bold();
    setText(boldText);
  };

  const getSummary = (e) => {
    var Container = document.getElementById("summary");

    return (Container.innerHTML = "Total Words Are :" +text.split(" ").length);
  };

  const handleMouseUp=()=> {
    console.log(`Selected text: ${window.getSelection().toString()}`);
    
    }

  return (
    <>
      <div className="operation__btns__container " >
        <div className="operation__btns">
          <button className="operation__btn__btn" onClick={makeCapital}>
            Capital Case
          </button>
          <button className="operation__btn__btn" onClick={makeLower}>
            Lower Case
          </button>
          <button className="operation__btn__btn" onClick={makeBolder}>
            Bold
          </button>
          <button className="operation__btn__btn" onClick={getSummary}>
            Summary
          </button>
        </div>
      </div>

      <div className="teaxt-area" onMouseUp={handleMouseUp}>
        <textarea onChange={getText}></textarea>
      </div>

      <div className="convetedText   ">
        <p>
          {text} <br />
          <span id="summary"></span>
        </p>
      </div>
    </>
  );
}

export default Main;
