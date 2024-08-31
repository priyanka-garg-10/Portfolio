import React from "react";
import styles from "./hero.module.css";
import { getImageUrl } from "../../utils";

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Priyanka</h1>
                <p className={styles.description}>
                    I'm a full-stack developer and having a strong knowledge of data structures. Reach out if you'd like to learn more!
                </p>
                <a href="https://drive.google.com/file/d/1ZbDi8GvmTX7D7L0vFm_Pk95kl47xdYgf/view" className={styles.contactBtn}>
                    Resume
                </a>
            </div>
            <img
                src={getImageUrl("hero/Picture.jpeg")}
                alt="Hero image of me"
                className={styles.heroImg}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};

export default Hero;
