import React from 'react';
import './App.css';
import { useState, useEffect, useParams } from 'react'
import axios from 'axios';
import GetShips from "./components/GetShips";
import CompleteShip from "./components/CompleteShip"
import Home from "./components/Home"
import NavComponent from "./components/NavComponent"
import Login from "./components/LoginComponent"
import SignUp from "./components/SignUpComponent"
import { useLocalStorage } from './components/useLocalStorage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  const [starship, setStarship] = useState([])
  const [apiResult, setApiResult] = useState([])
  const [loged, setLoged] = useState(false);

  useEffect(() => {
    axios.get('https://swapi.dev/api/starships/')
      .then(element => 
        setStarship(element.data.results))
        
       axios.get('https://swapi.dev/api/starships/')
      .then(element => 
        setApiResult(element.data))
  }, [])

  
       

  const isIncluded = false;
  if (isIncluded) { setLoged(true)}

  
  

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/starships"
          element={
            <>
              <NavComponent />
              <div className='div-ships1'>
                <GetShips
                  ships={starship}
                  loged={loged}
                  api={apiResult} />
                  
              </div>
            </>
          }
        />
        <Route path="/ship/:name"
          element={
            <>
              <NavComponent />
              <CompleteShip
                ships={starship} />
            </>
          }
        />
        <Route path="/"
          element={
            <>
              <NavComponent />
              <Home />
            </>
          }
        />
        <Route path="/login"
          element={
            <>
              <NavComponent />
              <Login 
              isIncluded={isIncluded}/>
            </>
          }
        />
        <Route path="/sign_up"
          element={
            <>
              <NavComponent />
              <SignUp />
            </>
          }
        />
        

      </Routes>
      
    </BrowserRouter>
  )
}

export default App;
