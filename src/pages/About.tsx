import pixelTererunIcon from "../assets/pixel_tererun.png";
import {
    AlignJustified,
    BrandDiscord,
    BrandGithub,
    BrandTwitch,
    BrandTwitter,
    BrandYoutube,
    ChevronDown,
    School
} from "tabler-icons-react";

import styles from "../style/about/About.module.css";
import AboutCard from "../components/about/AboutCard";

const About = () => {

    const nowDate = new Date();
    const old = nowDate.getMonth() == 12 && nowDate.getDay() >= 19 ? (nowDate.getFullYear()) - 2004 : (nowDate.getFullYear()) - 2005;

    return (
        <div className={styles.About}>
            <div className={styles.AboutContentsWrapper}>
                <div className={styles.AboutContents}>
                    <div className={styles.AboutLeftWrapper}>
                        <img src={pixelTererunIcon} alt={"tererun"} />
                        <div className={styles.AboutLinksWrapper}>
                            <a href={"https://twitter.com/tererun1/"} target="_blank" rel="noreferrer noopener"><BrandTwitter /></a>
                            <a href={"https://discord.com/users/292431056135782402/"} target="_blank" rel="noreferrer noopener"><BrandDiscord /></a>
                            <a href={"https://youtube.com/@tererun/"} target="_blank" rel="noreferrer noopener"><BrandYoutube /></a>
                            <a href={"https://twitch.com/tererun/"} target="_blank" rel="noreferrer noopener"><BrandTwitch /></a>
                            <a href={"https://github.com/tererun/"} target="_blank" rel="noreferrer noopener"><BrandGithub /></a>
                            <a href={"https://tererun.hatenablog.com/"} target="_blank" rel="noreferrer noopener"><AlignJustified /></a>
                            <a href={"https://purajuku.dev/"} target="_blank" rel="noreferrer noopener"><School /></a>
                        </div>
                    </div>
                    <div className={styles.AboutDescription}>
                        <h1>tererun / てれるん</h1>
                        <div>
                            {date}歳のクリエイター。<br/>プログラミングやゲーム制作、動画編集、作曲など様々な創作活動をしている。<br/>主な活動は、Tobiratoryやいぬたぬきクリエイティブアカデミア、FREESERVER Project、プラ塾など。
                        </div>
                    </div>
                </div>
                <ChevronDown className={styles.AboutScrollDownIcon} />
            </div>
            <div className={styles.AboutExperienceWrapper}>
                <h1>Experience</h1>
                <AboutCard date={"2017.12 ~"} title={"FREESERVER Project"} description={"SubOwner / Developer"}/>
                <AboutCard date={"2022.02 ~"} title={"プラグイン塾"} description={"塾長"}/>
                <AboutCard date={"2022.05 ~"} title={"いぬたぬきクリエイティブアカデミア"} description={"企画実装"}/>
                <AboutCard date={"2023.05 ~"} title={"Tobiratory"} description={"Developer"}/>
                <AboutCard date={"2023.09 ~ 2024.07"} title={"StarryRain"} description={"Creator"}/>
            </div>
        </div>
    );

};

export default About;
