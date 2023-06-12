import SignInOut from "@/components/SignInOut"
import styles from '/styles/Admin.module.css'
import { getServerSession } from 'next-auth';
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Admin() {

    const session = await getServerSession();

    if (!session) {
        return <section className={styles.main}><SignInOut /></section>
    }

    const AllProjects = await prisma.projects.findMany({
        where: { categority: 'full_stack' },
        orderBy: { createdAt: 'desc'},
    });

    return (
        <section className={styles.main}>
            <SignInOut />
            <h2>Projects List</h2>
            <ul className="single-project">
                    {AllProjects.map((project) => {
                        const createdAt = project.createdAt.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          });

                        return (
                          <li key={project.id}>
                                <div className="little-container-left">
                                    <span className="push-left">{createdAt}</span>
                                    <Link href={`/project/${project.id}`}>
                                        <h3>{project.title}</h3>
                                    </Link>
                                </div>
                                <p>{project.description}</p>
                                {project.published? <span>Published</span> : <span>Unpublished</span> }
                                <Link className='btn' href={`/admin/edit/${project.id}`}>
                                        Edit
                                </Link>
                                
                          </li>
                      );
                  })}
              </ul>
        </section>
    )
}