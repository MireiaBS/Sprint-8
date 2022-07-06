import React from 'react';
import './App.css';
import { useState, useEffect, useParams } from 'react'
import axios from 'axios';
import GetShips from "./components/GetShips";
import CompleteShip from "./components/CompleteShip"
import NavComponent from "./components/NavComponent"
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
          element={
            <>
              <NavComponent />
              <div className='div-ships1'>
                <GetShips
                  ships={starship} />
              </div>
            </>
          }
        />
        <Route path="/ship/:name"
          element={
            <>
              <NavComponent />
              <div className='div-ships2'>
                <CompleteShip
                  ships={starship} />
              </div>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
