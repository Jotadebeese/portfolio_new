import ContentCard from "@/components/ContentCard";
import DisplayImages from "@/components/DisplayImages";
import TechCard from "@/components/TechCard";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

interface Props {
    params: {
        id: string;
    };
}

export default async function Project({ params }: Props) {
    
    const project = await prisma.projects
    .findUnique({
        where: { id: parseInt(params.id)},
    });

    const { title, description, github, live } = project ?? {};

    const createdat = project?.createdAt.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    
    return (
        <>
            <div className="fade-in project-container">
                <div className="item1">
                    <h1>{title}</h1>
                    <small>{createdat}</small>
                </div>
                <div className="little-box">
                    {github && (
                        <Link target="_blank" className="btn" href={`${github}`}>GitHub</Link>
                    )}
                    {live && (
                        <Link target="_blank" className="btn" href={`${live}`}>See it Live</Link>
                    )}
                </div>
                {/* @ts-expect-error Server Component */}
                <TechCard project={project} />
                <p>{description}</p>
                {/* @ts-expect-error Server Component */}
                <ContentCard project={project} />
                <h4>Some screenshots:</h4>
            </div>      
            {/* @ts-expect-error Server Component */}
            <DisplayImages project={project} />
        </>  
    )
}