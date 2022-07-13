import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Login from "./LoginComponent";

const GetShips = ({ ships, loged, api }) => {

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

    console.log('result:', result, 'api', api)


    let text = result.map(element => element.map((element, i) =>
        <Link to={`/ship/${element.name}`} key={i + 'ship'}>
            <div className='ship-basic'>
                <div className='title'>{element.name.toUpperCase()}</div>
                <div className='model'>{element.model}</div>
            </div>
        </Link>
    ))


    return [text, (show ? <input type='button' value='More!' onClick={chargeMore} className='button'></input> : <p>All Loaded</p>)]

    //loged ? text : <Login/>;
}

export default GetShips;