import React from 'react';
import styles from "./about.module.css";
import { getImageUrl } from "../../utils";

const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <div className={styles.text}>
                    <p >
                        Hii, I am currently pursuing B.Tech in Electronics and Communication Engineering with a strong interest in web development and problem-solving.
                        I have solved 400+ problems on various coding platforms and created projects like a mern-chat website amd job-seeking website.
                        As a core member of the Google Developer Student's Club, I have gained valuable teamwork experience.
                        Currently, I am working to enhance my skills. Alternatively, I can be found learning new technologies and love to play cricket.
                    </p>
                </div>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl('about/cursorIcon.png')} alt="" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>
                                I'm a frontend developer with experience in building responsive
                                and optimized sites
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>
                                I have experience developing fast and optimised back-end systems
                                and APIs
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Data Structures and Algorithms</h3>
                            <p>
                                I have strong knowledge of data structures and algorithms
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About;