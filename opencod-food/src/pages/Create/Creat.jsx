import React, { useState } from "react";

import "./Creat.css";

export default function Creat() {
  const [title, settitle] = useState("");
  const [metod, setMetod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngrediant, setNewIngrediant] = useState("");
  const [ingrediants, setingrediants] = useState([]);

  const handelSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="create">
      <h2 className="page-title">Add A New Recipe</h2>

      <form onSubmit={handelSubmit}>
        <label>
          <span>Recipe Title: </span>
          <input
            type="text"
            onChange={(e) => settitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>Recipe Ingredients: </span>
          <div className="ingredients">
            <input type="text" onChange={(e)=>setNewIngrediant(e.target.value)} />
            <button className="btn">Add</button>
          </div>
        </label>
        <label>
          <span>Recipe Method: </span>
          <textarea
            type="text"
            onChange={(e) => setMetod(e.target.value)}
            value={metod}
          />
        </label>
        <label>
          <span>Cooking Time(m): </span>
          <input
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
          />
        </label>

        <button className="btn"> Submit </button>
      </form>
    </div>
  );
}
