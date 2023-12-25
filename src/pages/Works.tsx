import styles from "../style/works/Works.module.css";
import { Categories, CategoryType, WorkType, workList } from "../data/WorksData";
import WorkCard from "../components/works/WorkCard";

import { useState } from "react";

const Works = () => {

    const [categoryState, setCategoryState] = useState<{
        [key: string]: boolean
    }>({
        "mod": false,
        "plugin": false,
        "thumbnail": false,
        "3dcg": false,
        "video_editing": false,
        "software": false,
    });
    const [allState, setAllState] = useState<boolean>(true);

    return (
        <div className={styles.Works}>
            <div className={styles.WorksContainer}>
                <h1 className={styles.WorksTitle}>Works</h1>
                <div className={styles.CategoryList}>
                    {Object.keys(Categories).map((category) => {
                        const state = categoryState[category];
                        const categoryCSS = state ? `${styles.CategorySelect} ${styles.Category}` : `${styles.Category}`;
                        return (
                            <span key={category} className={categoryCSS} onClick={() => {
                                const categoryStateList = Object.keys(categoryState);
                                let allCategoryState = true;
                                categoryStateList.forEach((value) => {
                                    if ((value !== category && categoryState[value]) || (value === category && !state)) {
                                        console.log(state, categoryState[value]);
                                        allCategoryState = false;
                                    }
                                });

                                setCategoryState(prev => (
                                    { ...prev, [category]: !state }
                                ));

                                if (allCategoryState) {
                                    setAllState(true);
                                } else {
                                    setAllState(false);
                                }
                            }}>
                                <p>{Categories[category]}</p>
                            </span>
                        );
                    })}
                </div>
                <div className={styles.WorkCardContainer}>
                    {workList.map((work) => {
                        let categorySelected = false;
                        work.category.forEach((category) => {
                            if (categoryState[category]) {
                                categorySelected = true;
                            }
                        });
                        if (!categorySelected && !allState) {
                            return (<></>);
                        }
                        return (
                            <WorkCard
                                key={work.title}
                                title={work.title}
                                description={work.description}
                                url={work.url}
                                thumbnail={work.thumbnail}
                                date={work.date}
                                category={work.category}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Works;