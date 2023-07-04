import Link from "next/link";
import styles from '/styles/AboutMe.module.css'

export default function AboutMe() {
    return (
        <div className="aboutme">
            <h1>Hi, I'm Juan</h1>
            <p>A Software Developer, with background in electronics engineering and a big passion in AI.</p>
            <small><i>Coffee lover.</i></small>
            <br/>
            <Link className="btn" href={'/project/full_stack'}>My work</Link>
            <br />
            <ul className={styles.socialContainer}>
                <p>Get in touch</p>
                <li className={styles.socialItem}>
                    <img src="/email.png" width={25} />
                    <Link href={'mailto:jotadebeese@gmail.com'} target="_blank"><i>jotadebeese@gmail.com</i></Link>
                </li>
                <li className={styles.socialItem}>
                    <img src="/github.png" width={25} />
                    <Link href={'https://github.com/Jotadebeese'} target="_blank"><i>jotadebeese</i></Link>
                </li>
                <li className={styles.socialItem}>
                    <img src="/instagram.png" width={25} />
                    <Link href={'https://www.instagram.com/jotadebeese/'} target="_blank"><i>jotadebeese</i></Link>
                </li>
                <li className={styles.socialItem}>
                    <img src="/twitter.png" width={25} />
                    <Link href={'https://twitter.com/Jotadebeese'} target="_blank"><i>jotadebeese</i></Link>
                </li>
                <li className={styles.socialItem}>
                    <img src="/linkedin.png" width={25} />
                    <Link href={'https://www.linkedin.com/in/jotadebeese/'} target="_blank"><i>jotadebeese</i></Link>
                </li>
            </ul>
        </div>
    )
}