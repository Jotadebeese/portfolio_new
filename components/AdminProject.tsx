import { prisma } from "@/lib/prisma";
import Link from "next/link";
import TechCard from '@/components/TechCard';

interface Projects {
    id: number;
    title: string;
    createdAt: Date;
    description: string;
}

interface ProjectsListProps {
    AllProjects: Projects[];
  }

export default function ProjectsList({ AllProjects }: ProjectsListProps) {

    return (
        <>
            {AllProjects.map((project) => {
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
                        <TechCard techs={[]} key={project.id} {...project} />
                        <Link className='btn' href={'/admin/edit/'}>Add New</Link>
                    </li>
                    );
            })}
        </>
    )
}

export async function getServerSideProps(): Promise<{ props: ProjectsListProps }> {
    const AllProjects = await prisma.projects.findMany({
        where: { categority: 'full_stack' },
        orderBy: { createdAt: 'desc'},
    });

    return {
        props: {
            AllProjects,
        },
    };
}