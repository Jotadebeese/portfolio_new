import { Metadata } from "next";
import styles from '/styles/me.module.css'
import MeComponent from "@/components/MeComponent";

export const metadata: Metadata = {
    title: 'A full description of Juan',
    description: 'A full description in detail of Juan and his life. The paths he has taken and what he expects in the future.'
}

export default function Me() {
    return (
        <div className={styles.main}>
            <MeComponent />
        </div>
    )
}