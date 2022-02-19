import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.changeText} type="text" value={props.valueText} />
      <button onClick={props.addText}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
