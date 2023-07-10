import Link from "next/link";
import styles from '/styles/AboutMe.module.css'

export default function AboutMe() {
    return (
        <div className="aboutme">
            <h1>Hi, I'm Juan</h1>
            <p>A Software Developer, with background in electronics engineering and a big passion in AI.</p>
            <small>I'll be posting my projects and learnings here, as well as anything else I find interesting.</small>
            <br />
            <small className="little-link"><Link href={'/me'}>Meet me</Link> or get in touch:</small>
            <div className={styles.socialContainer}>
                <Link href={'mailto:jotadebeese@gmail.com'} target="_blank"><img src="/email.png" width={25} /></Link>
                <Link href={'https://github.com/Jotadebeese'} target="_blank"><img src="/github.png" width={25} /></Link>
                <Link href={'https://www.instagram.com/jotadebeese/'} target="_blank"><img src="/instagram.png" width={25} /></Link>
                <Link href={'https://twitter.com/Jotadebeese'} target="_blank"><img src="/twitter.png" width={25} /></Link>
                <Link href={'https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:e6ba58ac-7183-4040-81c1-e8a0a06f717d'} target="_blank"><img src="/cv.png" width={25} /></Link>
                <Link href={'https://www.linkedin.com/in/jotadebeese/'} target="_blank"><img src="/linkedin.png" width={25} /></Link>
            </div>
            <br/>
            <Link className="btn" href={'/project/full_stack'}>My work</Link>
            <br />
        </div>
    )
}