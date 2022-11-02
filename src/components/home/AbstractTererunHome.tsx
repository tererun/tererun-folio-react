import React from "react";

import abstractTererunIcon from "../../assets/abstract_tererun.svg";

import styles from "../../style/home/AbstractTererunHome.module.css";

const AbstractTererunHome = () => {
    return (
        <div className={styles.AbstractTererunHome}>
            <object type="image/svg+xml" data={abstractTererunIcon} className={styles.AbstractTererunIcon}/>
        </div>
    );
};

export default AbstractTererunHome;