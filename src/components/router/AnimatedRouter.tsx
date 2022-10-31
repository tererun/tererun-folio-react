import {Route, Routes, useLocation} from "react-router-dom";
import Home from "../../pages/Home";
import Works from "../../pages/Works";

const AnimatedRouter = () => {
    const location = useLocation();

    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="works" element={<Works />} />
        </Routes>
    );

}

export default AnimatedRouter;
