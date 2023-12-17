import React from "react";

import styles from "./Contact.module.css";
import {getImageUrl} from "../../utils";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl ("contact/emailIcon.png")} alt="emailIcon" />
                <a href="mailto:ditipuranik123@gmail.com">ditipuranik123@gmail.com</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl ("contact/linkedinIcon.png")} alt="linkedinIcon" />
                <a href="https://www.linkedin.com/in/aditi-puranik-97646a18a/">linkedin.com/aditi-puranik</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl ("contact/githubIcon.png")} alt="githubIcon" />
                <a href="https://github.com/aditipuranik16">github.com/aditipuranik16</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact
