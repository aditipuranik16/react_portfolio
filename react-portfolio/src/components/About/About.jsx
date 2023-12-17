import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

const About = () => {
  return (
   <section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
        <img src={getImageUrl("about/aboutImage.png")}
        alt="Me sitting with laptop"
        className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} 
                alt="Cursor icon"/>
                <div className={styles.aboutItemText}>
                   <h3>Frontend Developer</h3>
                   <p>I'm a front-end developer with experience
                    in building responsive and optimized sites</p> 
                </div>
            </li>

            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} 
                alt="Server icon"/>
                <div className={styles.aboutItemText}>
                   <h3>Backend Developer</h3>
                   <p>I have experience developing fast and
                    optimised back-end systems and APIs</p> 
                </div>
            </li>

            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} 
                alt="Server icon"/>
                <div className={styles.aboutItemText}>
                   <h3>Fullstack Developer</h3>
                   <p>Dedicated full stack developer with expertise in creating customized UI designs and improving website navigation</p> 
                </div>
            </li>
        </ul>
    </div>
   </section>
  )
}

export default About
