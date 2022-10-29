import React from "react";
import EyeMouseTracking from "./EyeMouseTracking";

import tererunNoEyeIcon from "../../assets/pixel_noeye_tererun.png";

import styles from "../../style/DefaultHome.module.css";

const DefaultHome = () => {
    return (
        <div className="DefaultHome">
            <div className={styles.TererunIcon}>
                <EyeMouseTracking />
                <img src={tererunNoEyeIcon} />
            </div>
        </div>
    );
};

export default DefaultHome;