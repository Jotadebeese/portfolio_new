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
        orderBy: { createdAt: 'desc'},
    });

    return ( 
        <section className='projects-container fade-in'>
            <SignInOut />
            <h2>Projects</h2>
            <ul className="list-container fade-in">
                    {AllProjects.map((project) => {
                        const createdAt = project.createdAt.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          });

                        return (
                          <li className="single-project" key={project.id}>
                                <div className="little-container-left">
                                    <span className="push-left">{createdAt}</span>
                                    <Link href={`/project/single/${project.id}`}>
                                        <h3 className="project-title">{project.title}</h3>
                                    </Link>
                                    <p>{project.description}</p>
                                </div>
                                {project.published? 
                                    <div className="little-box">
                                        <div className="dot green"></div>
                                        <p>Published</p>
                                    </div>
                                 : 
                                    <div className="little-box">
                                        <div className="dot red"></div>
                                        <p>Unpublished</p>
                                    </div> 
                                }
                                <Link className='btn btn-gray' href={`/admin/edit/${project.id}`}>
                                        Edit
                                </Link>
                                
                          </li>
                      );
                  })}
              </ul>
        </section>
    )
}