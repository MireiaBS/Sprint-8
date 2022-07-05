import React from "react";
import { useParams } from "react-router-dom";

const CompleteShip = ({ ships }) => {

    const { name }  = useParams();

    let text = ships.filter(element => element.name === name)
                    .map((ship,i) => <div key={i+'shipcard'} className='ship-card'> 
                    Nom de la nau: {ship.name} <br/>
                    Model: {ship.model}<br/>
                    MGLT: {ship.MGLT}<br/>
                    Capacitat: {ship.cargo_capacity}<br/>
                    Cost en crèdits: {ship.cost_in_credits}<br/>
                    Tripulación: {ship.crew}<br/>
                    Pel·lícules: {ship.films}<br/>
                    Manufactura: {ship.manufacturer}<br/>
                    Velocitat màxima: {ship.max_atmosphering_speed}<br/>
                    Passatgers: {ship.passengers}<br/>
                    Pilots: {ship.pilots}<br/>
                    </div>)
    return text;
}

export default CompleteShip;