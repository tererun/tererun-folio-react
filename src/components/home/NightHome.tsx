import React, { useState } from "react";
import NightOverlayHome from "./NightOverlayHome";

import lightPullSwitchImage from "../../assets/light_pull_switch.svg";

import styles from "../../style/home/NightHome.module.css";

const NightHome = () => {

    const [lightPullSwitchActive, setLightPullSwitchActive] = useState(false);

    const lightPullSwitchToggle = () => {
        setLightPullSwitchActive(true);
    }

    let nightOverlay;
    if (!lightPullSwitchActive) nightOverlay = <NightOverlayHome />

    return (
        <div className={styles.NightHome}>
            {nightOverlay}
            <img className={lightPullSwitchActive ? styles.LightPullSwitchOn : ""} src={lightPullSwitchImage} onClick={lightPullSwitchToggle}/>
        </div>
    );

};

export default NightHome;