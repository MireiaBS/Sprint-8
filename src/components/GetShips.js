import { Link } from "react-router-dom";
import Login from "./LoginComponent";

const GetShips = ({ result }) => {

    let text = result.map(element => element.map((element, i) =>
        <Link to={`/ship/${element.name}`} key={i + 'ship'}>
            <div className='ship-basic'>
                <div className='title'>{element.name.toUpperCase()}</div>
                <div className='model'>{element.model}</div>
            </div>
        </Link>
    ))


    return [text]

    //loged ? text : <Login/>;
}

export default GetShips;