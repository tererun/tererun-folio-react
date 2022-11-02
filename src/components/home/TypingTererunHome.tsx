import React from "react";

import animationTererunIcon from "../../assets/typing_tererun.gif";

import styles from "../../style/home/TypingTererunHome.module.css";

const TypingTererunHome = () => {
    return (
        <div className={styles.TypingTererunHome}>
            <img src={animationTererunIcon} />
        </div>
    );
};

export default TypingTererunHome;