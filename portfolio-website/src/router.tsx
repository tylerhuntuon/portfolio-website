import { Routes, Route } from "react-router";

import Home from "./pages/Home";
import Projects from "./pages/Projects";

function AppRouter(){
    return(
        <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/projects" element = {<Projects />} />
        </Routes>
    );
}

export default AppRouter;