import { useState } from "react"
import { BrowserRouter, Routes,  Route } from "react-router-dom";

import Home from "./Home";
import Works from "./Works";

import "../style/App.css"

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/works"} element={<Works />} />
            </Routes>
        </BrowserRouter>
    );

}

export default App;
