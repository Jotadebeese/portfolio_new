'use client'
import Link from "next/link";
import styles from '/styles/AboutMe.module.css'
import { useState } from "react";

export default function AboutMe() {

    const [submitted, setSubmitted] = useState(false);
    const [isSending, setIsSending] = useState(false);

    const sendMessage = async(e:React.FormEvent<HTMLFormElement>) => {
        setIsSending(true);
        e.preventDefault();

        const Data = new FormData(e.currentTarget);

        const res = await fetch('https://script.google.com/macros/s/AKfycby9x4360BZ1p7upzTYxMbzCCDCvUr_zzsENst304_tlPuN1RJC1MVegDfGxUHA7DUdPeQ/exec', {
            method: 'POST',
            body: Data,
        })
        .then(() => {
            setIsSending(false);
            setSubmitted(true);
        });
    };

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
            <small className="little-link"><Link href={'/project/full_stack'}>Check my work    &gt;</Link></small>
            <form onSubmit={sendMessage} className={styles.form} >
                {isSending? 
                <div className={styles.loader}>
                    <img src="/temp.gif" />
                    <div className="loader"></div>
                    <p>Sending message  .  .  .</p>
                </div> :
                submitted? 
                <div className={styles.thanks}>
                    <p>Thank you!</p>
                    <button onClick={() => setSubmitted(false)}>Feel like sending one more?</button>
                </div>: <>
                <h3>Send me a message if you feel like:</h3>
                <label htmlFor="name">Make it anonymous if you want.</label>
                <input type="text" name="name" placeholder='A name or nickname.' required />
                <label htmlFor="email">An email to contact you back.</label>
                <input type="email" name="email" placeholder='Any email will do it, not required.' />
                <label htmlFor="message">The message.</label>
                <textarea
                    name="message"
                    placeholder='Could be a joke.'
                    required
                ></textarea>
                <button type="submit">Sent</button></>}
            </form>
        </div>
    )
}