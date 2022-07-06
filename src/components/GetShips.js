import { Link } from "react-router-dom";

const GetShips = ({ ships }) => {


    let text = ships.map((element, i) =>
        <Link to={`/ship/${element.name}`} key={i + 'ship'}>
            <div className='ship-basic'>
                <div className='title'>{element.name.toUpperCase()}</div>
                <div className='model'>{element.model}</div>
            </div>
        </Link>
    )

    return text;
}

export default GetShips;