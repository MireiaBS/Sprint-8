import React from "react";
import { useParams } from "react-router-dom";
import logo from "../images/logo.png"
import axios from "axios";
import { useEffect, useState } from "react";
import { act } from "react-dom/test-utils";

const CompleteShip = ({ ships }) => {

    const [filmsLinks, setFilmsLinks] = useState([])
    const { name } = useParams();

       

    const getFilms = async () => {
        let films = ships.filter(element => element.name === name)
        .map((element) => (element.films)) 

        const promises = [];
        films[0].forEach(element => {
            const result = axios.get(element);
            promises.push(result);
        });
        const results = await Promise.all(promises);
        const actualDatas = results.map((result) => result.data.title);
        console.log('films:',actualDatas)
        //return actualDatas;

    }

    const getPilots = async () => {
        let pilots = ships.filter(element => element.name === name)
        .map((element) => (element.pilots)) 

        const promises = [];
        pilots[0].forEach(element => {
            const result = axios.get(element);
            promises.push(result);
        });
        const results = await Promise.all(promises);
        const actualDatas = results.map(result => <p>{result.data.name}</p>);
        console.log('pilots:',actualDatas)
        //return actualDatas;

    }
    getFilms();
    getPilots();

    let text = ships.filter(element => element.name === name)
        .map((ship, i) =>
            <div key={i + name} className='card-justify'>
                <div className='div-ships2'>
                    <div className='color-ship'>
                        <div className="logo2" ><img src={logo} /></div>
                    </div>
                    <div className="justify">
                        <h2>{ship.name.toUpperCase()}</h2>
                        <p> simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <div key={i + 'shipcard'} className='ship-card'>
                            <p>Model: {ship.model}</p>
                            <p>MGLT: {ship.MGLT}</p>
                            <p>Capacity: {ship.cargo_capacity}</p>
                            <p>Cost in credits: {ship.cost_in_credits}</p>
                            <p>Crew: {ship.crew}</p>
                            <p>Films: { }</p>
                            <p>Manufacturer: {ship.manufacturer}</p>
                            <p>Speed: {ship.max_atmosphering_speed} </p>
                            <p>Passengers: {ship.passengers}</p>
                            <p>Pilots: </p>
                        </div>
                        <div></div>
                    </div>
                </div >
            </div>
        );
    return text;
}

export default CompleteShip;



/* let data = await getData();

function getData() {
    return new Promise((resolve, reject) => {
        let response = await axios.get(...)
        let data = response.map()
        ----
        ----

        resolve(data)
    })

} */


/* console.log(getFilms()) */