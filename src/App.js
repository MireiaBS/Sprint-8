import React from 'react';
import './App.css';
import { useState, useEffect, useParams } from 'react'
import axios from 'axios';
import GetShips from "./components/GetShips";
import CompleteShip from "./components/CompleteShip"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  const [starship, setStarship] = useState([])

  useEffect(() => {
    axios.get('https://swapi.dev/api/starships/')
      .then(element => setStarship(element.data.results))
  }, [])

  

  console.log(starship)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"
          element={<GetShips
            ships={starship} />}>
        </Route>
        <Route path="/ship/:name"
          element={<CompleteShip
            ships={starship} />} />
      </Routes>
    </BrowserRouter>

  )


}

export default App;


/*- Nom de nau.

- Model 
*/