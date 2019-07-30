import React, {useState, useEffect} from "react";
import "./App.css";

const App = () => {
  const APP_ID = "6d6a83db";
  const APP_KEY = "2301e231e5cf4dc8ba58fb8966ba46d3";
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("cuba");
  }, []);

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button
          className="search-button"
          type="submit"
          onClick={(e) => {
            e.preventDefault()
            return setCounter(counter + 1);
          }}
        >
          {counter}
        </button>
      </form>
    </div>
  );
};

export default App;
