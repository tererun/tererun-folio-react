import styles from "../style/works/Works.module.css";

import WorkCard from "../components/works/WorkCard";

const Works = () => {
    return (
        <div className={styles.Works}>
            <div className={styles.WorksContainer}>
                <h1 className={styles.WorksTitle}>Works</h1>
                <div className={styles.WorkCardContainer}>
                    <WorkCard title={"ゴラクバ!ラッキーブロック"} description={"動画内にて使用されたMODの実装"} thumbnail={"http://img.youtube.com/vi/bS7zqF2t3rk/maxresdefault.jpg"} />
                    <WorkCard title={"HyperCrate"} description={"クレートが作成できるプラグイン"} thumbnail={"https://pbs.twimg.com/media/EqEW89tU8AA6IOZ?format=jpg&name=large"} />
                    <WorkCard title={"てれきゃっぷ"} description={"みんなで被れるてれるんのグッズ"} thumbnail={"https://pbs.twimg.com/media/FexammTaUAAabwf?format=jpg&name=large"} />
                </div>
            </div>
        </div>
    );
};

export default Works;