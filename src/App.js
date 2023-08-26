import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import RecipeCard from './components/RecipeCard';

const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s="

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [query, setQuery] = useState('')
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async () => {
    // setIsLoading(true);
    const url = apiUrl + query
    const res = await fetch(url)
    const data = await res.json();
    console.log(data);
    setRecipes(data.meals)
    setIsLoading(false)
  }

  useEffect(() => {
    searchRecipes()
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchRecipes();
  }
  const handlerefresh = () => {
    window.location.reload()
  }

  return (
    <div className="container">
      <h1>The Recipe App</h1>
      <div className="btn-reload">
        <button
          className="refresh-btn"
          onClick={handlerefresh}>
          Reload
        </button>
      </div>
      <SearchBar
        isLoading={isLoading}
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}
      />
      <div className="recipes">

        {recipes ? recipes.map(recipe => (
          <RecipeCard
            key={recipes.idMeal}
            recipe={recipe}
          />
        )) : "no recipes found Sorry!!"}
      </div>
    </div>
  );
}

export default App;
