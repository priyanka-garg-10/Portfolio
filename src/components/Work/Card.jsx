import React from 'react';
import styles from "./card.module.css";
import { getImageUrl } from "../../utils";
import { FaGithubSquare } from "react-icons/fa";
import { PiArrowSquareUpRightFill } from "react-icons/pi";

const Card = ({ project: { title, description, imageSrc, skills, demo, source } }) => {
    return (
        <div className={styles.card}>

            <img src={getImageUrl(imageSrc)} alt="" className={styles.imgs} />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <div className={styles.links}>
                <a href={demo} className={styles.link}>{<PiArrowSquareUpRightFill />}</a>
                <a href={source} className={styles.link}>{<FaGithubSquare />}</a>
            </div>
            <ul className={styles.skills}>
                {skills.map((skill, id) => {
                    return (
                        <li key={id} className={styles.skill}>
                            {skill}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Card;