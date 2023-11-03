import React from "react";
import { useFetch } from "../../hooks/useFetch";
import RecipeList from "../../Components/RecipeList/RecipeList";

import "./Home.css";

export default function Home() {
  const { data, isLoading, error } = useFetch("http://localhost:3000/recipes");
  console.log(data)
  return (
    <div className="home">

      
      {error && <p className="error"> {error} </p>}
      {isLoading && <p className="loding"> Loding... </p>}
      {data && <RecipeList recipes={data} />}
      

      {/* data.map(recipe => (
        <h2 key={recipe.id}> {recipe.title} </h2>
      )) */}

    </div>

  )
}
