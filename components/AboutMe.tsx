import Link from "next/link";
import styles from '/styles/AboutMe.module.css'

export default function AboutMe() {
    return (
        <div className="aboutme">
            <h1>Hi, I'm Juan</h1>
            <p>A Software Developer, with background in electronics engineering and a big passion in AI.</p>
            <small><i>Coffee lover.</i></small>
            <br/>
            <Link className="btn" href={'/project/full_stack'}>Check my work</Link>
            <br />
            <p>Juan Bedoya</p>
            <ul className={styles.socialContainer}>
                <li className={styles.socialItem}>
                    <img src="/twitter.png" width={20} />
                    <Link href={'/'}><i>@jotadebeese</i></Link>
                </li>
                <li className={styles.socialItem}>
                <img src="/email.png" width={20} />
                    <Link href={'/'}><i>juan@jotadebeese.me</i></Link>
                </li>
            </ul>
        </div>
    )
}