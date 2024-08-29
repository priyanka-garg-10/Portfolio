import React from 'react';
import styles from './skills.module.css';
import skills from '../../data/skills.json';
import { getImageUrl } from '../../utils';

const Skills = () => {
    return (
        <section className={styles.container} id="skills">
            <h2 className={styles.title}>Skills</h2>
            <div className={styles.skills}>
                {skills.map((skill) => (
                    <div className={styles.skill} key={skill.title}>
                        <div className={styles.skillImageContainer}>
                            <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                        </div>
                        <p>{skill.title}</p>
                    </div>
                ))}
            </div>
        </section>

    )
}

export default Skills;