import AboutMe from '@/components/AboutMe';
import styles from '/styles/page.module.css';

export default async function Home() {

  return (
    <main className={styles.main}>
      <AboutMe />
    </main>
  );
}