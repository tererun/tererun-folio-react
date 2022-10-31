import React from "react";

import abstractTererunIcon from "../../assets/abstract_tererun.svg";

import styles from "../../style/home/AbstractTererunHome.module.css";

const DefaultHome = () => {
    return (
        <div className="DefaultHome">
            <div className={styles.AbstractTererunHome}>
                <object type="image/svg+xml" data={abstractTererunIcon} className={styles.AbstractTererunIcon}/>
            </div>
        </div>
    );
};

export default DefaultHome;