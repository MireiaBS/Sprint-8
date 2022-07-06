import gifintro from "../images/gifintro.gif"

const Home = () => {

    return (
        <div className="welcome">
            <h1> Welcome to the STAR WARS battleship Wiki!</h1>
            <img src={gifintro} width="500" height="500"></img> 
        </div>
    )
}

export default Home;