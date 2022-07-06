import React from "react";
import { useParams } from "react-router-dom";

const CompleteShip = ({ ships }) => {

    const { name }  = useParams();

    let text = ships.filter(element => element.name === name)
                    .map((ship,i) => 
                    <div className='color-ship '>
                        <h2>{ship.name.toUpperCase()}</h2>
                        <p> simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                        <div key={i+'shipcard'} className='ship-card'> 
                            <p>Model: {ship.model}</p>
                            <p>MGLT: {ship.MGLT}</p>
                            <p>Capacity: {ship.cargo_capacity}</p>
                            <p>Cost in credits: {ship.cost_in_credits}</p>
                            <p>Crew: {ship.crew}</p>
                            <p>Films: por llenar</p>
                            <p>Manufacturer: {ship.manufacturer}</p>
                            <p>Speed: {ship.max_atmosphering_speed} </p>
                            <p>Passengers: {ship.passengers}</p>
                            <p>Pilots: por llenar</p> 
                        </div>
                    </div>)
    return text;
}

export default CompleteShip;