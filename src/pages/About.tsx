import pixelTererunIcon from "../assets/pixel_tererun.png";

import styles from "../style/about/About.module.css";

const About = () => {

    return (
        <div className={styles.About}>
            <div className={styles.AboutContents}>
                <div className={styles.AboutIconWrapper}>
                    <img src={pixelTererunIcon} />
                </div>
                <div className={styles.AboutDescription}>
                    <h1>tererun / てれるん</h1>
                    <div>
                        高校三年生のプログラマー。<br/>Spigot プラグイン制作やゲーム制作、動画編集、作曲など様々な創作活動をしている。<br/>主な活動は、いぬたぬきクリエイティブアカデミアやFREESERVER Project、プラ塾など。
                    </div>
                </div>
            </div>
        </div>
    );

};

export default About;