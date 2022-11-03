import styles from "../../style/about/AboutCard.module.css";

type Props = {
    date: string,
    title: string,
    description: string
}

const AboutCard = (props: Props) => {

    return (
        <div className={styles.AboutCard}>
            <div className={styles.AboutCardDate}>{props.date}</div>
            <div className={styles.AboutCardContents}>
                <h3 className={styles.AboutCardTitle}>{props.title}</h3>
                <div className={styles.AboutCardDescription}>{props.description}</div>
            </div>
        </div>
    );

};

export default AboutCard;