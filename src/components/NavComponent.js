import logo from "../images/logo.png"

const NavComponent = () => {

    return (
        <nav >
            <div class="parent">
                <div class="logo" ><img src={logo} /></div>                
            </div>
            <div class="div3">
                    <div onClick={()=>alert('hi')} class="div2">LOGIN //</div>
                    <div onClick={()=>alert('hi')} class="div2">SIGN UP </div>
                </div>
            <div class="centered">
                <input type="button" onClick={()=>alert('hi')} class="button" value="HOME"></input>
                <input type="button" onClick={()=>alert('hi')} class="button" value="STARSHIPS"></input>
            </div>

        </nav>
    )
}

export default NavComponent;