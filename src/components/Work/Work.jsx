import React from 'react';
import styles from "./work.module.css";
import projects from "../../data/projects.json";
import Card from './Card';


const Work = () => {
    return (
        <section className={styles.container} id="work">
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>
                {projects.map((project, id) => {
                    return <Card key={id} project={project} />;
                })}
            </div>
        </section>
    )
}

export default Work;