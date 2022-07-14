import { Link } from "react-router-dom";
import Login from "./LoginComponent";
import { UserContext } from "../hooks/UserContext";
import { useContext } from "react";

const GetShips = ({ result }) => {

    const {loged} = useContext(UserContext)
    

    let text = result.map(element => element.map((element, i) =>
        <Link to={`/ship/${element.name}`} key={i + 'ship'}>
            <div className='ship-basic'>
                <div className='title'>{element.name.toUpperCase()}</div>
                <div className='model'>{element.model}</div>
            </div>
        </Link>
    ))

    return loged ? text : <Login/>;

}

export default GetShips;