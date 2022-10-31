import styles from "../../style/navigations/TopNavigation.module.css";
import { useState } from "react";
import TopNavigationContent from "./TopNavigationContent";

const TopNavigation = () => {

    const [navigating, setNavigating] = useState(false);
    const [hasClicked, setHasClicked] = useState(false);

    const toggleNavigating = (state: boolean) => {
        setHasClicked(true);
        setNavigating(state);
    }

    return (
        <div className={styles.TopNavigation}>
            <div className={styles.TopNavigationIcon} onClick={() => toggleNavigating(!navigating)}>
                {navigating ? "×" : "|||"}
            </div>
            <div className={`${styles.TopNavigationList} ${navigating ? styles.TopNavigationListEnable : (hasClicked ? styles.TopNavigationListDisable : "")}`}>
                <TopNavigationContent title={"Home"} src={"/"} isRouterLink={true}/>
                <TopNavigationContent title={"Works"} src={"/works"} isRouterLink={true}/>
            </div>
        </div>
    );

};

export default TopNavigation;