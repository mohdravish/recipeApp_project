import React, { useEffect, useState } from "react";

const api = "https://www.themealdb.com/api/json/v1/1/search.php?s="
function Main() {
    const [isLoading, setIsloading] = useState(false)
    const [query, setQuery] = useState('')
    const [recipe, setRecipe] = useState([])

    const Recipefunction = (async) => {
        const apiload = api + query;
        const url = await fetch(apiload)
        const data = await url.json()
        setRecipe(data.meal)
        setIsloading(false)
    }
    useEffect(() => {
        Recipefunction()
    }, [])

    const submit = (e) => {
        Recipefunction()
        e.preventDefault();
    }

    return (
        <div>
            <h1>haia</h1>
        </div>
    )





}

export default Main