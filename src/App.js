import React from 'react';
import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios';

function App() {

  const [starships, setStarships] = useState([])

  useEffect(() => {
    axios.get('https://swapi.dev/api/starships/')
      .then(elements => {
        /*elements.map((element) => console.log(element.data.results))*/
      })
      }, []) 
      

    console.log(starships)

    return (
      <div>hi</div>)

}

export default App;


/*- Nom de nau.

- Model 
*/