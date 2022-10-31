import styles from "../../style/home/ConfettiHome.module.css";

const ConfettiHome = () => {

    let paper = [];
    for (let i = 0; i < 20; i++) {
        paper.push(<div className={styles.Confetti} style={{ animationDelay: `${getRandomInt(5000)}ms`, backgroundColor: "#ff0000", width: "12px", height: "6px", position: "absolute", transform: "translate(0, 0)", left: `calc(50% + ${(i % 10) * 20}px - 95px)`, top: "calc(50% - 100px)", opacity: 0 }} />);
    }

    return (
        <div className="ConfettiWrapper">
            {paper}
        </div>
    );

};

const getRandomInt = (size: number) => {
    return Math.floor(Math.random() * size);
};

export default ConfettiHome;