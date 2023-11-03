import React, { useState } from 'react'

import './Creat.css'

export default function Creat() {
  const [title, settitle] = useState('')
  const [metod, setMetod] = useState('')
  const [cookingTime, setCookingTime] = useState('')



  return (
    <div className='create'>
      <h2 className='page-title'>Add A New Recipe</h2>


      <form>
        <label>
          <span>Recipe Title: </span>
          <input type="text" onChange={(e) => settitle(e.target.value)} value={title} required />
        </label>
        <label>
          <span>Recipe Method: </span>
          <input type="text" onChange={(e) => setMetod(e.target.value)} value={metod} required />
        </label>
        <label>
          <span>Cooking Time(m): </span>
          <input type="number" onChange={(e) => setCookingTime(e.target.value)} value={cookingTime} required />
        </label>

        <button className='btn'> Submit </button>





      </form>




    </div>
  )
}
