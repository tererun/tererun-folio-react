import React from "react";

import styles from "../../style/works/WorkCard.module.css";

type Props = {
    title: string,
    date: string,
    description: string,
    thumbnail: string,
    url: string
}

const WorkCard = (props: Props) => {
    return (
        <a className={styles.WorkCard} href={props.url} target="_blank" rel="noreferrer noopener">
            <img className={styles.WorkCardThumbnail} src={props.thumbnail} alt={"thumbnail"} />
            <div className={styles.WorkCardInfoContainer}>
                <h2 className={styles.WorkCardInfoTitle}>{props.title}</h2>
                <div className={styles.WorkCardInfoDate}>{props.date}</div>
                <div className={styles.WorkCardInfoDescription}>{props.description}</div>
            </div>
        </a>
    );
};

export default WorkCard;