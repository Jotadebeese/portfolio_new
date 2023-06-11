"use client"

import { prisma } from "@/lib/prisma";
import { NextResponse } from 'next/server';
import Link from "next/link";
import TechCard from '@/components/TechCard';
import { useEffect, useState } from "react";

export default function ProjectsList() {

    const [fullStackProjects, setFullStackProjects] = useState([]);

    useEffect(() => {
        async function fetchProjects() {
            const projects = await prisma.projects.findMany({
                where: { categority: 'full_stack' },
                orderBy: { createdAt: 'desc'},
            }); 
            
            setFullStackProjects(projects)
        }

        fetchProjects();
    }, []);

    return (
        <div className="projects-container fade-in">
            <div className="projects-list">
                <h1>Projects List</h1>
                <p>Feel free to look at them, in deep...</p>
                <ul id="projects-list">
                    {fullStackProjects.map((project) => {
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
                    })}
                </ul>
            </div>
        </div>
    )
}