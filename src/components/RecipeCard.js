import React from 'react'

const RecipeCard = ({ recipe }) => {
    const { idMeal, strMeal, strCategory, strMealThumb, strArea } = recipe; // this is for the id and data which is in api 
    return (
        <div className="card">
            <img
                src={strMealThumb}
                alt={strMeal}
                className="card-image"
            />
            <div className="card-body">
                <span className="category">{strCategory}</span>
                <span className="category-1"> {strArea}</span>
                <h3>{strMeal}</h3>
                <a href={"https://www.themealdb.com/meal/" + idMeal} target="_blank" rel="">Instructions</a>
            </div>
        </div>
    )
}

export default RecipeCard