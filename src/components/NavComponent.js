import logo from "../images/logo.png"
import {Link} from "react-router-dom";
import '../../src/App.css';


const NavComponent = () => {

    return (
        <nav >
            <div className="parent">
                <div className="logo" ><img src={logo} /></div>
            </div>
            <div className="div3">

                <Link to="/login" className="div2"  >
                    <div>LOGIN //</div>
                </Link>
                <Link to="/sign_up" className="div2"  >
                    <div>SIGN UP</div>
                </Link>

            </div>
            <div className="centered">

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