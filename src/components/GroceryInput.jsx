import { useState } from "react";
export const GroceryInput = ({handleClick}) => {
  const [text, setText] = useState("");
  return (
    <div className="inputMain">
      <input className="inputDiv"
        onChange={(e) => {
          console.log(e.target.value);

          setText(e.target.value);
        }}
        type="text"
      />
      <button className="inputDiv"
        onClick={() => {
          handleClick(text);
        }}
      >
        Add Todo
      </button>
    </div>
  );
};
