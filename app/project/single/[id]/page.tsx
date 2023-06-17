import ContentCard from "@/components/ContentCard";
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

    const { id, createdAt, title, description } = project ?? {};

    const createdat = createdAt.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    
    return (
        <div className="fade-in project-container">
            <div className="item1">
                <h1>{title}</h1>
                <small>{createdat}</small>
            </div>
            {/* @ts-expect-error Server Component */}
            <TechCard project={project} />
            <p>{description}</p>
            {/* @ts-expect-error Server Component */}
            <ContentCard project={project} />
        </div>        
    )
}