import React, {useState, useEffect} from "react";
import "./App.css";
import Recipe from './Recipe';

const App = () => {
  const APP_ID = "6d6a83db";
  const APP_KEY = "2301e231e5cf4dc8ba58fb8966ba46d3";
  // const exampleReq = ;

  // const [counter, setCounter] = useState(0);

const [recipes, setRecipes] = useState([])

  useEffect(() => {
   getRecipes()
  }, []);

  const getRecipes = async ()=>{
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits)
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button
          className="search-button"
          type="submit"
          // onClick={(e) => {
          //   e.preventDefault()
          //   return setCounter(counter + 1);
          // }}
        >
          {/* {counter} */}search
        </button>
      </form>
      {recipes.map(recipe => {
        return (
          <Recipe key={recipe.recipe.image} 
          title = {recipe.recipe.label}
          src = {recipe.recipe.image}
          calories = {recipe.recipe.calories}/>
        )
      })}
    </div>
  );
};

export default App;
