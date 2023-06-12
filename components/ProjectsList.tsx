import { prisma } from "@/lib/prisma";
import Link from "next/link";
import TechCard from '@/components/TechCard';

export default async function ProjectsList() {

    const FullAllProjects = await prisma.projects.findMany({
        where: { categority: 'full_stack' },
        orderBy: { createdAt: 'desc'},
    });

    return (
        <div className="projects-container fade-in">
            <div className="projects-list">
                <h1>Projects List</h1>
                <p>Feel free to look at them.</p>
                <ul id="projects-list">
                    <>
                        {FullAllProjects.map((project) => {
                            const createdAt = project.createdAt.toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            });

                            return (
                                <li>
                                    <div className="little-container-left">
                                        <span className="push-left">{createdAt}</span>
                                        <Link href={`/project/${project.id}`}>
                                            <h3>{project.title}</h3>
                                        </Link>
                                    </div>

                                    <p>{project.description}</p>
                                    <TechCard key={project.id} {...project} />
                                </li>
                            );
                        })};
                    </>
                </ul>
            </div>
        </div>
    )
}