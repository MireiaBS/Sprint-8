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
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  const [starship, setStarship] = useState([])
  const [apiResult, setApiResult] = useState([])
  const [loged, setLoged] = useState(false);

  /* useEffect(() => {
   
       axios.get('https://swapi.dev/api/starships/')
      .then(element => 
        setStarship(element.data))
  }, []) */

  const [pages, setPages] = useState(1)
  const [links, setLinks] = useState(['https://swapi.dev/api/starships/?page=1'])
  const [result, setResult] = useState([])
  const [show, setShow] = useState(true)


  useEffect(() => {

    let link = 'https://swapi.dev/api/starships/?page=' + pages.toString()
    axios.get(link)
      .then(element => {

        const newLink = [...links, element.data.next]
        setLinks(newLink)
      }
      )

    links.map(element => {
      axios.get(element)
        .then(element => {

          const newResult = [...result, element.data.results]
          setResult(newResult)

        })
    })

  }, [pages])

  function chargeMore() {
    setPages(pages + 1)
    if (pages >= 3) {
      setShow(false)
    }
  
  }

 


  const isIncluded = false;
  if (isIncluded) { setLoged(true) }




  return (
    <BrowserRouter>
      <Routes>

        <Route path="/starships"
          element={
            <>
              <NavComponent />
              <div className='div-ships1'>
                <GetShips
                  result={result}
                />
                {show ? <input type='button' value='More!' onClick={chargeMore} className='button'></input> : <p>All Loaded</p>}

              </div>
            </>
          }
        />
        <Route path="/ship/:name"
          element={
            <>
              <NavComponent />
              <CompleteShip
                result={result} />
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
                isIncluded={isIncluded} />
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
