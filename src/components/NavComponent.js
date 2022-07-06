import logo from "../images/logo.png"
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import '../../src/App.css';


const NavComponent = () => {

    return (
        <nav >
            <div class="parent">
                <div class="logo" ><img src={logo} /></div>
            </div>
            <div class="div3">

                <Link to="/login" class="div2"  >
                    <div>LOGIN //</div>
                </Link>
                <Link to="/sign_up" class="div2"  >
                    <div>SIGN UP</div>
                </Link>

            </div>
            <div class="centered">

                <Link to="/" className="button" value="HOME" >
                    <div>HOME</div>
                </Link>
                <Link to="/starships" className="button" value="STARSHIPS">
                    <div>STARSHIPS</div>
                </Link>

            </div>

        </nav>
    )
}

export default NavComponent;