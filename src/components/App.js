import React from 'react'
import './App.css'

const axios = require('axios');

function App() {
  const APP_ID = "6dbfa5af";
  const APP_KEY = "d061b1c78111fc24e3b8148e3bfd25c9";
  
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const handleClick = () => {
    axios.get(exampleReq)
      .then(function (response) {
      // handle success
      let recipe = [];
      recipe = response.data.hits[0].recipe.ingredientLines;
      console.log(recipe);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  }

  return (
    <div>
      <form className="search-form">
        <input className="search-bar" type="text" required/>
        <button onClick={handleClick} className="search-btn" type="submit">Search</button>
      </form>
    </div>
  )
}

export default App;
