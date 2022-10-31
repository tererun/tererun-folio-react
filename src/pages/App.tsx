import {BrowserRouter} from "react-router-dom";

import "../style/App.css"
import TopNavigation from "../components/navigations/TopNavigation";
import AnimatedRouter from "../components/router/AnimatedRouter";

const App = () => {

    return (
        <div className={"App"}>
            <BrowserRouter>
                <TopNavigation />
                <AnimatedRouter />
            </BrowserRouter>
        </div>
    );

}

export default App;
