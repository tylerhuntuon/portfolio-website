import { NavLink } from "react-router";

function Navbar(){
    return(
        <nav>
            <h1>Navbar</h1>
            <NavLink to="/">Home</NavLink>
        </nav>
    );
}

export default Navbar;