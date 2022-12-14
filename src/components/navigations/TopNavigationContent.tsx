import {Link} from "react-router-dom";

import styles from "../../style/navigations/TopNavigationContent.module.css";

type Props = {
    title: string,
    src: string,
    isRouterLink: boolean,
    onClick?: () => void
};

const TopNavigation = (props: Props) => {

    return (
        <div className={styles.TopNavigationContent}>
            {props.isRouterLink ? <Link to={props.src} onClick={props.onClick}>{props.title}</Link> : <a href={props.src} target="_blank" rel="noreferrer noopener" onClick={props.onClick}>{props.title}</a>}
        </div>
    );

};

export default TopNavigation;