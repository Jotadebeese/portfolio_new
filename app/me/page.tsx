import { Metadata } from "next";
import styles from '/styles/me.module.css'
import Link from "next/link";

export const metadata: Metadata = {
    title: 'A full description of Juan',
    description: 'A full description in detail of Juan and his life. The paths he has taken and what he expects in the future.'
}

export default function Me() {
    return (
        <div className={styles.main}>
            <h1>About Me</h1>
            <hr />
            <div className={styles.imgContainer}>
                <img src="bowser.jpeg" alt="Bowser eating my hand" />
                <small><i>Bowser eating my hand</i></small>
            </div>
            <p>Hi there, my name is Juan. I like to code, mainly in web development, doing the full-stack, and I am passionate about AI and its development &#40;I have some ideas to work on and train some models&#41;.</p>
            <p>I am currently working on my App, <Link href={'https://pagina-media.vercel.app/'} target="_blank">PAGINA</Link>, where I want to integrate some AI functionalities in the near future. To find out more about it, click <Link href={'/project/single/1'} target="_blank">here</Link>.</p>
            <p>One of my dreams is to combine all my knowledge and put it into a product by training an ML model to perform a task, integrating it into an embedded system using my electronics background, and promoting it on a web app to offer a service. Or that&#39;s kind of the overall idea.</p>
            <p>Outside of programming, I collect LEGO pieces &#40;I already have a decent collection&#41; and work as a barista part-time to help me financially. Once per week, I also operate the roasting process of the coffee I use.</p>
            <p>Lastly, I created this site to document my learning and knowledge and share any project I work on. Also, don&#39;t hesitate to contact me if you find errors or want to chat.</p>
            <br /><br />
            <hr />
            <div className={styles.socialContainer}>
                <Link href={'mailto:jotadebeese@gmail.com'} target="_blank"><img src="/email.png" width={25} /></Link>
                <Link href={'https://github.com/Jotadebeese'} target="_blank"><img src="/github.png" width={25} /></Link>
                <Link href={'https://www.instagram.com/jotadebeese/'} target="_blank"><img src="/instagram.png" width={25} /></Link>
                <Link href={'https://twitter.com/Jotadebeese'} target="_blank"><img src="/twitter.png" width={25} /></Link>
                <Link href={'https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:e6ba58ac-7183-4040-81c1-e8a0a06f717d'} target="_blank"><img src="/cv.png" width={25} /></Link>
                <Link href={'https://www.linkedin.com/in/jotadebeese/'} target="_blank"><img src="/linkedin.png" width={25} /></Link>
            </div>
        </div>
    )
}