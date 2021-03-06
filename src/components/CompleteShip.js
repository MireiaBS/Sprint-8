import React from "react";
import { useParams } from "react-router-dom";
import logo from "../images/logo.png";
import axios from "axios";
import { useState, useEffect } from "react";

const CompleteShip = ({ result }) => {

  const [films, setFilms] = useState([]);
  const [pilots, setPilots] = useState([]);
  const [picture, setPicture] = useState('')

  const { name } = useParams();

  useEffect(() => {
    getFilms();
    getPilots();
    getPictures();
  }, []);

    const getPictures = () => {
        let getPictures = result.flat()
            .filter((element) => element.name === name)
            .map(element => element.url)
        const number = getPictures.map(element => element.replace(/[^0-9]+/g, "")).toString()
        const link = `https://starwars-visualguide.com/assets/img/starships/${number}.jpg`

            
        const request = new XMLHttpRequest();
        request.open("GET", link, true);
        request.send();
        request.onload = function() {
            if (request.status == 200) //if(statusText == OK)
            {
            setPicture(link)
            } else {
            setPicture('https://starwars-visualguide.com/assets/img/big-placeholder.jpg')
            }
        }
    
    }

         
  
  const getFilms = async () => {
    let getFilms = result
      .flat()
      .filter((element) => element.name === name)
      .map((element) => element.films);

    await getFilms.flat().map((element) => {
      axios.get(element).then((element) => {
        setFilms((film) => film.concat(element.data.title));
      });
    });
  };

  const getPilots = async () => {
    let getPilots = result
      .flat()
      .filter((element) => element.name === name)
      .map((element) => element.pilots);

    await getPilots.flat().map((element) => {
      axios.get(element).then((element) => {
        setPilots((pilot) => pilot.concat(element.data.name));
      });
    });
  };

  

  let text = result
    .flat()
    .filter((element) => element.name === name)
    .map((ship, i) => (
      <div key={i + name} className="card-justify">
        <div className="div-ships2">
          <div className="color-ship">
            <div className="logo2">
              <img src={picture} />
            </div>
          </div>
          <div className="justify">
            <h2>{ship.name.toUpperCase()}</h2>
            <p>
              {" "}
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <div key={i + "shipcard"} className="ship-card">
              <p>Model: {ship.model}</p>
              <p>MGLT: {ship.MGLT}</p>
              <p>Capacity: {ship.cargo_capacity}</p>
              <p>Cost in credits: {ship.cost_in_credits}</p>
              <p>Crew: {ship.crew}</p>
              <p>Manufacturer: {ship.manufacturer}</p>
              <p>Speed: {ship.max_atmosphering_speed} </p>
              <p>Passengers: {ship.passengers}</p>
            </div>
          </div>
          <div className="ordered">
            <div className="card-pilot">
              Films:{" "}
              {films
                .filter((item, index) => {
                  return films.indexOf(item) === index;
                })
                .map((element, i) => (
                  <p key={i}>{element}</p>
                ))}
            </div>

            <div className="card-pilot">
              Pilots:
              {pilots
                .filter((item, index) => {
                  return pilots.indexOf(item) === index;
                })
                .map((element, i) => (
                  <p key={i}>{element}</p>
                ))}{" "}
            </div>
          </div>
        </div>
      </div>
    ));

  return text;
};

export default CompleteShip;
