import React, { useState } from 'react'
import Recipe from './Recipe';
import './App.css'

const axios = require('axios');

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  const APP_ID = "6dbfa5af";
  const APP_KEY = "d061b1c78111fc24e3b8148e3bfd25c9";
  const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const handleClick = () => {
    axios.get(exampleReq)
      .then(function (response) {
      setRecipes(response.data.hits)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="app">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={handleSearch} placeholder="Search recipe..." required/>
        <button onClick={handleClick} className="search-btn" type="submit">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
          <Recipe 
            key={Math.random()*1000+1}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  )
}

export default App;
