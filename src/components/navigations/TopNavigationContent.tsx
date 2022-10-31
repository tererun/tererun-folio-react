import { Link } from "react-router-dom";

import styles from "../../style/navigations/TopNavigationContent.module.css";

type Props = {
    title: string,
    src: string,
    isRouterLink: boolean
};

const TopNavigation = (props: Props) => {

    return (
        <div className={styles.TopNavigationContent}>
            {props.isRouterLink ? <Link to={props.src}>{props.title}</Link> : <a href={props.src}>{props.title}</a>}
        </div>
    );

};

export default TopNavigation;