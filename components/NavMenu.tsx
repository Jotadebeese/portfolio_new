import Link from "next/link";
import Image from "next/image";
import styles from '/styles/NavMenu.module.css'

export default function NavMenu() {
    return (
        <nav className={styles.nav}>
            <div className={styles.pagina}>
                <p><i>By</i></p>
                    <Link href="/">
                        <button><i>PAGINA</i></button>
                    </Link>
                </div>
            <ul className={styles.links}>
                {/* <li>
                    <Link href={'/comingsoon'}>Blog</Link>
                </li> */}
                <li>
                    <Link href={'/me'}>Me</Link>
                </li>
                <li>
                    <Link href={'/project/full_stack'}>My Work</Link>
                </li>
            </ul>
        </nav>
    )
}