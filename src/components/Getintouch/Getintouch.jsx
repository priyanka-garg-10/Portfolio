import React from 'react'
import styles from './getintouch.module.css'
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Getintouch = () => {
    return (
        <section className={styles.container} id="contact">
            <h2 className={styles.title}> Let's Connect</h2>
            <div className={styles.content}>
                <div className={styles.text}>
                    <form action='https://getform.io/f/blljvljb' method='POST'>
                        <input type='text' name='name' placeholder='Enter Your Name' />
                        <input type='email' name='email' placeholder='Enter Your Emial' />
                        <textarea name='message' rows="10" placeholder='Enter your message'></textarea>
                        <button>Let's Talk</button>
                    </form>
                </div>
                <div className={styles.links}>
                    <FaLinkedin onClick={() => window.open("https://www.linkedin.com/in/priyanka--garg/", "_blank")} className={styles.link} />
                    <FaGithubSquare onClick={() => window.open("https://github.com/priyanka-garg-10", "_blank")} className={styles.link} />
                </div>
            </div>
        </section>
    )
}

export default Getintouch;