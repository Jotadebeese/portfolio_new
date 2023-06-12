import SignInOut from "@/components/SignInOut"
import styles from '/styles/Admin.module.css'
import Link from "next/link";
import ProjectsList from "@/components/ProjectsList";

export default async function Admin() {

    return (
        <section className={styles.main}>
            <SignInOut />
        </section>
    )
}