import { prisma } from "@/lib/prisma";

interface Props {
    id: number;
}

interface Techs {
    id: number;
    icon: string;
    name: string;
}

interface TechsProps {
    techs: Techs[];
}

export default function Tech({ techs }: TechsProps) {

    return (
        <div className="techCard-container">
            {techs.map((tech) => {
                return (
                    <div className='tech-card' key={tech.id}>
                        <img 
                            src={tech.icon}
                            width={40}
                            alt="Icon of technology"
                        />
                        <p>{tech.name}</p>
                    </div>
                );
            })}
        </div>
    );
}

export async function name({ id }: Props): Promise<{ props: TechsProps }> {
    const project = await prisma.projects
    .findUnique({
        where: { id: id},
        include: { tech: true}, // Include the related tech data
    });

    const techs: Techs[] = project?.tech || []; // Access 'tech' data from the project

    return {
        props: {
            techs,
        },
    };    
}