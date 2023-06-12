import TechCard from "@/components/TechCard";
import { prisma } from "@/lib/prisma";

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

    const { id, createdAt, title, description, content } = project ?? {};
    
    return (
        <div className="fade-in project-container">
            <h1>{title}</h1>
            {/* @ts-expect-error Server Component */}
            <TechCard project={project} />
            <p>{description}</p>
            {content}
        </div>        
    )
}