import Link from "next/link";
import Image from "next/image";
import styles from '/styles/NavMenu.module.css'
import { SignInButton, SignOutButton } from "./buttons";

export default function NavMenu() {
    return (
        <nav className={styles.nav}>
            <div className={styles.pagina}>
                <Link href={'/'}>
                    <Image
                        src='/jota.png'
                        width={50}
                        height={50}
                        alt="Juan's face"
                    />
                </Link>
                <p><i>By</i></p>

                    <Link href="/">
                        <button><i>PAGINA</i></button>
                    </Link>
                </div>
            <ul className={styles.links}>
                <li>
                    <Link href={'/me'}>Me</Link>
                </li>
                <li>
                    <Link href={'/#projects-list'}>Projects</Link>
                </li>
                <li>
                    <Link href={'/users'}>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}