import AboutMe from '@/components/AboutMe';
import GetInTouch from '@/components/GetInTouch';
import styles from '/styles/page.module.css';

export default async function Home() {

  return (
    <main className={styles.main}>
      <AboutMe />
      <GetInTouch />
    </main>
  );
}