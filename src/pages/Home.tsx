import { Link } from "react-router-dom";

import tererunNoEyeIcon from "../assets/pixel_noeye_tererun.png";
import tererunEyeIconSvg from "../assets/tererun_eye.svg";

import styles from "../style/Home.module.css";

const Home = () => {
    return (
        <div className={styles.Home}>
            <div className={styles.TererunIcon}>
                <object type="image/svg+xml" data={tererunEyeIconSvg}/>
                <img src={tererunNoEyeIcon} />
            </div>
        </div>
    );
};

export default Home;