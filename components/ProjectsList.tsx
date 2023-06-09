import { prisma } from "@/lib/prisma";
import { NextResponse } from 'next/server';

async function GET(request: Request) {
    const full_projects = await prisma.projects.findMany( {
        where: { categority: "full_stack" },
    });

    return NextResponse.json(full_projects);
}

export default function ProjectsList() {

    return (
        <div className="projects-container">
            <div className="projects-list">
                <h1>{full_projects.title}</h1>
                <p>Feel free to look at them, in deep...</p>
                <ul id="projects-list">
                    <li>
                        <h3>PAGINA - Social Media App</h3>
                        <p>A social Media app where users can create accounts, create posts using markdown, edit, publish and unpublish, like and dislike and see others users posts. </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}