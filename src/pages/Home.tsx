import styles from "../style/Home.module.css";
import DefaultHome from "../components/home/DefaultHome";
import AbstractTererunHome from "../components/home/AbstractTererunHome";
import ConfettiHome from "../components/home/ConfettiHome";
import NightHome from "../components/home/NightHome";

const Home = () => {

    const date = new Date();

    let contents = <DefaultHome />;
    let confetti;

    const randomizedNumber = getRandomInt(100);
    if (randomizedNumber == 57) {
        contents = <AbstractTererunHome />
    }
    if (date.getMonth() == 11 && date.getDate() == 19) {
        confetti = <ConfettiHome />
    }

    return (
        <div className={styles.Home}>
            {contents}
            {confetti}
            <NightHome />
        </div>
    );

};

const getRandomInt = (size: number) => {
    return Math.floor(Math.random() * size);
};

export default Home;