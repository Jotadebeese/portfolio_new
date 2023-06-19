import Link from "next/link";

export default function AboutMe() {
    return (
        <div className="aboutme">
            <h1>Hi, I'm Juan</h1>
            <p>A Software Developer, with background in electronics engineering and a big passion in AI.</p>
            <small>Deciding my future.</small>
            <br/>
            <p>Now,</p>
            <Link className="btn" href={'/project'}>Go and check my work!</Link>
            <p>or...</p>
            <Link className="btn" href={'/contact'}>Contact me!</Link>
        </div>
    )
}