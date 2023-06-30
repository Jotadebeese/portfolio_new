import Link from "next/link";

export default function AboutMe() {
    return (
        <div className="aboutme">
            <h1>Hi, I'm Juan</h1>
            <p>A Software Developer, with background in electronics engineering and a big passion in AI.</p>
            <small><i>Coffee lover.</i></small>
            <br/>
            <Link className="btn" href={'/project/full_stack'}>My work</Link>
{/*             <u>
                <li>Twitter</li>
                <li>Email</li>
            </u> */}
        </div>
    )
}