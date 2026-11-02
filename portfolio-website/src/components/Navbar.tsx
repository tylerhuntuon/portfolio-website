import { NavLink } from "react-router";

function Navbar(){
    return(
        <div className="absolute top-0 left-0 z--50 w-full">
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/projects">Projects</NavLink>
            </nav>
        </div>
        
    );
}

export default Navbar;