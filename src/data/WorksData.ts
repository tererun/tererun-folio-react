export const Categories: { [key: string]: string } = {
    "mod": "Mod",
    "plugin": "Plugin",
    "thumbnail": "Thumbnail",
    "3dcg": "3DCG",
    "video_editing": "Video Editing",
    "software": "Software",
} as const;

export type CategoryType = keyof typeof Categories;

export type WorkType = {
    "title": string,
    "description": string,
    "date": string,
    "thumbnail": string,
    "url": string,
    "category": CategoryType[]
};

export const workList: WorkType[] = [
    {
        "title": "マイクラ何色の何",
        "description": "YouTube動画にて使用されたサムネイルの制作",
        "date": "2023.12",
        "thumbnail": "//img.youtube.com/vi/idkn8r074J0/maxresdefault.jpg",
        "url": "https://www.youtube.com/watch?v=idkn8r074J0",
        "category": ["thumbnail"]
    },
    {
        "title": "マイクラ公園",
        "description": "YouTube動画にて使用されたサムネイルの制作",
        "date": "2023.11",
        "thumbnail": "//img.youtube.com/vi/Pg8xXl-kOsE/maxresdefault.jpg",
        "url": "https://www.youtube.com/watch?v=Pg8xXl-kOsE",
        "category": ["thumbnail"]
    },
    {
        "title": "このブロックマイクラにある?",
        "description": "YouTube Shortsの動画編集",
        "date": "2023.07",
        "thumbnail": "//img.youtube.com/vi/QcehVR5nxfs/maxresdefault.jpg",
        "url": "https://www.youtube.com/shorts/QcehVR5nxfs",
        "category": ["video_editing"]
    },
    {
        "title": "ゴラクバ!ラッキーブロック",
        "description": "動画内にて使用されたMODの実装 (ダウンロード可能)",
        "date": "2022.10",
        "thumbnail": "//img.youtube.com/vi/bS7zqF2t3rk/maxresdefault.jpg",
        "url": "https://www.youtube.com/watch?v=bS7zqF2t3rk",
        "category": ["mod"]
    },
    {
        "title": "TouchColor",
        "description": "動画内にて使用されたプラグインの実装",
        "date": "2022.06",
        "thumbnail": "//img.youtube.com/vi/pPUPZ-aHNps/maxresdefault.jpg",
        "url": "https://www.youtube.com/watch?v=pPUPZ-aHNps",
        "category": ["plugin"]
    },
    {
        "title": "ブラウザ → Minecraft",
        "description": "ブラウザで描いた絵がMinecraftに反映されるプラグインの制作",
        "date": "2022.05",
        "thumbnail": "//i.imgur.com/0CIR6mF.png",
        "url": "https://twitter.com/tererun1/status/1530243837406240768",
        "category": ["plugin"]
    },
    {
        "title": "MIDIキーボード → Unity",
        "description": "MIDIキーボードで弾いた鍵盤をUnityにリアルタイムで反映するソフトの制作",
        "date": "2022.05",
        "thumbnail": "//i.imgur.com/k0J0rbt.png",
        "url": "https://twitter.com/tererun1/status/1521145076256473089",
        "category": ["software"]
    },
    {
        "title": "爆弾ドッヂボール",
        "description": "YouTube動画の動画編集・使用されたサムネイルの制作",
        "date": "2022.02",
        "thumbnail": "//img.youtube.com/vi/6SyIbRuALPI/maxresdefault.jpg",
        "url": "https://www.youtube.com/watch?v=6SyIbRuALPI",
        "category": ["thumbnail", "video_editing"]
    },
    {
        "title": "iPhone 11",
        "description": "Blenderのモデリング練習",
        "date": "2022.02",
        "thumbnail": "//pbs.twimg.com/media/FLzf6VXaMAgsmVK?format=jpg&name=large",
        "url": "https://twitter.com/tererun1/status/1494315481507205121",
        "category": ["3dcg"]
    },
    {
        "title": "Wordle in Minecraft",
        "description": "大人気ゲーム「Wordle」をMinecraftで再現したプラグインの制作",
        "date": "2022.02",
        "thumbnail": "//i.imgur.com/tW38GhW.png",
        "url": "https://twitter.com/tererun1/status/1490303599917690889",
        "category": ["plugin"]
    },
    {
        "title": "Illustrate",
        "description": "Minecraft内で絵が描けるプラグインの制作",
        "date": "2021.12",
        "thumbnail": "//i.imgur.com/lZGXSwx.png",
        "url": "https://twitter.com/tererun1/status/1476782459765334016",
        "category": ["plugin"]
    },
    {
        "title": "他力本願ダイヤモンド獲得チャレンジ",
        "description": "YouTube動画の動画編集・使用されたサムネイル・プラグインの制作",
        "date": "2021.12",
        "thumbnail": "//img.youtube.com/vi/PjCmibfO-xw/maxresdefault.jpg",
        "url": "https://www.youtube.com/watch?v=PjCmibfO-xw",
        "category": ["thumbnail", "video_editing", "plugin"]
    },
    {
        "title": "白黒人狼",
        "description": "YouTube動画の動画編集・使用されたサムネイル・プラグインの制作",
        "date": "2021.12",
        "thumbnail": "//img.youtube.com/vi/M8NcJASW0sQ/maxresdefault.jpg",
        "url": "https://www.youtube.com/watch?v=M8NcJASW0sQ",
        "category": ["thumbnail", "video_editing", "plugin"]
    },
    {
        "title": "Garapon",
        "description": "Minecraft内でガラポンができるプラグインの制作",
        "date": "2021.08",
        "thumbnail": "//i.imgur.com/AFtDbSz.png",
        "url": "https://twitter.com/tererun1/status/1432213175584247808",
        "category": ["plugin"]
    },
    {
        "title": "RealtimeDisplays",
        "description": "Firebase Realtime DatabaseとMinecraft内のスコアボードを同期させるプラグインの制作",
        "date": "2021.08",
        "thumbnail": "//i.imgur.com/hHEkN1j.png",
        "url": "https://twitter.com/tererun1/status/1431980317556969472",
        "category": ["plugin"]
    },
    {
        "title": "Alchemy",
        "description": "錬金術ができるプラグインの制作",
        "date": "2020.10",
        "thumbnail": "//i.imgur.com/3oUt4Rw.png",
        "url": "https://twitter.com/tererun1/status/1312058134215618561",
        "category": ["plugin"]
    },
    {
        "title": "SuperFrica",
        "description": "Minecraftで交通系電子マネーを再現したプラグインの制作",
        "date": "2020.09",
        "thumbnail": "//i.imgur.com/TwwzBCc.png",
        "url": "https://twitter.com/tererun1/status/1308414241888759809",
        "category": ["plugin"]
    },
    {
        "title": "HyperCrate",
        "description": "クレートが作成できるプラグインの制作",
        "date": "2020.12",
        "thumbnail": "//pbs.twimg.com/media/EqEW89tU8AA6IOZ?format=jpg&name=large",
        "url": "https://www.spigotmc.org/resources/hypercrate.87060/",
        "category": ["plugin"]
    },
];