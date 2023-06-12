import { prisma } from "@/lib/prisma";
import TechCard from '@/components/TechCard';

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
            <TechCard techs={[]} key={id} {...project} />
            <p>{description}</p>
            {content}
        </div>        
    )
}