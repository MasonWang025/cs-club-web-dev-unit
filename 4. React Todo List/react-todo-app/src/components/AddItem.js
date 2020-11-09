import React, { useState } from "react";

export default function AddItem(props) {
  let [inputVal, updateInputVal] = useState("");
  return (
    <div>
      <li className="list-group-item">
        <div className="row">
          <div className="col">
            <input
              value={inputVal}
              placeholder="Add item..."
              onChange={(e) => {
                updateInputVal(e.target.value);
              }}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-fit">
            <button
              onClick={() => {
                props.addItem(inputVal);
              }}
              className="btn btn-primary mr-1"
            >
              Add
            </button>
          </div>
        </div>
      </li>
    </div>
  );
}
