import { prisma } from "@/lib/prisma";
import { NextResponse } from 'next/server';
import Link from "next/link";
import TechCard from '@/components/TechCard';

export default async function ProjectsList() {

    const FullAllProjects = await prisma.projects.findMany({
        where: { categority: 'full_stack' },
    });

    return (
        <div className="projects-container">
            <div className="projects-list">
                <h1>Projects List</h1>
                <p>Feel free to look at them, in deep...</p>
                <ul id="projects-list">
                    {FullAllProjects.map((project) => {
                        return (
                            <li>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <Link href={'/'}>
                                    <small>Learn more...</small>
                                </Link>
                                <TechCard key={project.id} {...project} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}