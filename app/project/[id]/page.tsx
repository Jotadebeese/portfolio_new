import { prisma } from "@/lib/prisma";
import TechCard from '@/components/TechCard';

interface Props {
    id: string;
    title: string | null;
}

export default async function Project({ id }: Props) {
    
    const project = await prisma.projects
    .findUnique({
        where: { id: id},
    });

    const { createdAt, title, description, content } = project ?? {};
    
    return (
        <div>
            <h1>{title}</h1>
            <TechCard key={id} {...project} />
            <p>{description}</p>
            <p>{content}</p>
        </div>        
    )
}