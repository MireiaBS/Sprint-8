import { Link } from "react-router-dom";

const GetShips = ({ ships }) => {


    let text = ships.map((element, i) =>
        <Link to={`/ship/${element.name}`} key={i + 'ship'}>
            <div className='ship-basic'>
                <div> <strong>Nom de la nau:</strong> {element.name}</div>
                <div> <strong> Model de la nau:</strong> {element.model}</div>
            </div>
        </Link>
    )

    return text;
}

export default GetShips;