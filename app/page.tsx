import AboutMe from '@/components/AboutMe'
import GetInTouch from '@/components/GetInTouch'
import ProjectsList from '@/components/ProjectsList'
import styles from '/styles/page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <AboutMe />
      <ProjectsList AllProjects={[]} />
      <GetInTouch />
    </main>
  )
}
