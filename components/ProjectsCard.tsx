import {prisma} from "@/lib/prisma";
import Link from "next/link";
import TechCard  from "./TechCard";

interface project {
    id: number;
    title: string;
    description: string;
    createdAt: Date;
    github: string;
    live: string;
}
export default async function ProjectsCard({categority}: any) {

            const AllProjects = await prisma.projects.findMany({
                where: { categority: categority, published: true },
                orderBy: { createdAt: 'desc'},
            });
            
            return (
                <ul className="list-container fade-in">
                    {AllProjects.length === 0 ? <p>Noting to show here, for now...</p> : AllProjects.map((project) => {
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

                                <div className="little-box">
                                    <Link className="btn" href={`${project.github}`}>GitHub</Link>
                                    {project.live && (
                                        <Link className="btn" href={`${project.live}`}>See it Live</Link>
                                    )}
                                </div>
                                {/* @ts-expect-error Server Component */}
                                <TechCard project={project} />
                          </li>
                      );
                  })}
                </ul>
            )
        }