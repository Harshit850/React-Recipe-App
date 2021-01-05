import React from 'react'

function Recipe({ title, calories, image, ingredients }) {
  return (
    <div className="recipe">
      <h1 className="heading">{title}</h1>
      <ul>
        {ingredients.map(ingredient => (
          <li className="content">{ingredient.text}</li>
        ))}
      </ul>
      <p>{calories}</p>
      <img className="image" src={image} alt="" />
    </div>
  )
}

export default Recipe;
