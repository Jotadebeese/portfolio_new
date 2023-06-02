import Link from "next/link";
import Image from "next/image";
import styles from '/app/NavMenu.module.css'

export default function NavMenu() {
    return (
        <nav className={styles.nav}>
            <Link href={'/'}>
                <Image
                    src='/corgi.png'
                    width={30}
                    height={30}
                    alt="Juan's face"
                />
            </Link>
            <ul className={styles.links}>
                <li>
                    <Link href={'/about'}>Me</Link>
                </li>
                <li>
                    <Link href={'/blog'}>Projects</Link>
                </li>
                <li>
                    <Link href={'/users'}>Text Me</Link>
                </li>
            </ul>
        </nav>
    )
}