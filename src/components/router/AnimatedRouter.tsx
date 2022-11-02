import { useRef, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Home from "../../pages/Home";
import Works from "../../pages/Works";
import About from "../../pages/About";

const AnimatedRouter = () => {

    const location = useLocation();
    const timeout = { enter: 600, exit: 300 };

    return (
        <TransitionGroup component="div" className="AnimatedRouter">
            <CSSTransition key={location.pathname} timeout={timeout} classNames="slider">
                <Routes location={location}>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="works" element={<Works />} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );

}

export default AnimatedRouter;
