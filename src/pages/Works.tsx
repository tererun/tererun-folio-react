import styles from "../style/works/Works.module.css";

import WorkCard from "../components/works/WorkCard";

const Works = () => {
    return (
        <div className={styles.Works}>
            <div className={styles.WorksContainer}>
                <h1 className={styles.WorksTitle}>Works</h1>
                <div className={styles.WorkCardContainer}>
                    <WorkCard
                        title={"ゴラクバ!ラッキーブロック"}
                        description={"動画内にて使用されたMODの実装 (ダウンロード可能)"}
                        date={"2022.10"}
                        thumbnail={"//img.youtube.com/vi/bS7zqF2t3rk/maxresdefault.jpg"}
                        url={"https://www.youtube.com/watch?v=bS7zqF2t3rk"}
                    />
                    <WorkCard
                        title={"TouchColor"}
                        description={"動画内にて使用されたプラグインの実装"}
                        date={"2022.06"}
                        thumbnail={"//img.youtube.com/vi/pPUPZ-aHNps/maxresdefault.jpg"}
                        url={"https://www.youtube.com/watch?v=pPUPZ-aHNps"}
                    />
                    <WorkCard
                        title={"ブラウザ → Minecraft"}
                        description={"ブラウザで描いた絵がMinecraftに反映されるプラグインの制作"}
                        date={"2022.05"}
                        thumbnail={"//i.imgur.com/0CIR6mF.png"}
                        url={"https://twitter.com/tererun1/status/1530243837406240768"}
                    />
                    <WorkCard
                        title={"MIDIキーボード → Unity"}
                        description={"MIDIキーボードで弾いた鍵盤をUnityにリアルタイムで反映するソフトの制作"}
                        date={"2022.05"}
                        thumbnail={"//i.imgur.com/k0J0rbt.png"}
                        url={"https://twitter.com/tererun1/status/1521145076256473089"}
                    />

                    <WorkCard
                        title={"iPhone 11"}
                        description={"Blenderのモデリング練習"}
                        date={"2022.02"}
                        thumbnail={"//pbs.twimg.com/media/FLzf6VXaMAgsmVK?format=jpg&name=large"}
                        url={"https://twitter.com/tererun1/status/1494315481507205121"}
                    />
                    <WorkCard
                        title={"Wordle in Minecraft"}
                        description={"大人気ゲーム「Wordle」をMinecraftで再現したプラグインの制作"}
                        date={"2022.02"}
                        thumbnail={"//i.imgur.com/tW38GhW.png"}
                        url={"https://twitter.com/tererun1/status/1490303599917690889"}
                    />
                    <WorkCard
                        title={"Illustrate"}
                        description={"Minecraft内で絵が描けるプラグインの制作"}
                        date={"2021.12"}
                        thumbnail={"//i.imgur.com/lZGXSwx.png"}
                        url={"https://twitter.com/tererun1/status/1476782459765334016"}
                    />
                    <WorkCard
                        title={"Garapon"}
                        description={"Minecraft内でガラポンができるプラグインの制作"}
                        date={"2021.08"}
                        thumbnail={"//i.imgur.com/AFtDbSz.png"}
                        url={"https://twitter.com/tererun1/status/1432213175584247808"}
                    />
                    <WorkCard
                        title={"RealtimeDisplays"}
                        description={"Firebase Realtime DatabaseとMinecraft内のスコアボードを同期させるプラグインの制作"}
                        date={"2021.08"}
                        thumbnail={"//i.imgur.com/hHEkN1j.png"}
                        url={"https://twitter.com/tererun1/status/1431980317556969472"}
                    />
                    <WorkCard
                        title={"Alchemy"}
                        description={"錬金術ができるプラグインの制作"}
                        date={"2020.10"}
                        thumbnail={"//i.imgur.com/3oUt4Rw.png"}
                        url={"https://twitter.com/tererun1/status/1312058134215618561"}
                    />
                    <WorkCard
                        title={"SuperFrica"}
                        description={"Minecraftで交通系電子マネーを再現したプラグインの制作"}
                        date={"2020.09"}
                        thumbnail={"//i.imgur.com/TwwzBCc.png"}
                        url={"https://twitter.com/tererun1/status/1308414241888759809"}
                    />
                    <WorkCard
                        title={"HyperCrate"}
                        description={"クレートが作成できるプラグインの制作"}
                        date={"2020.12"}
                        thumbnail={"//pbs.twimg.com/media/EqEW89tU8AA6IOZ?format=jpg&name=large"}
                        url={"https://www.spigotmc.org/resources/hypercrate.87060/"}
                    />

                </div>
            </div>
        </div>
    );
};

export default Works;