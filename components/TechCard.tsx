import { prisma } from "@/lib/prisma";

interface Props {
    id: number;
}

export default async function Tech({ id }: Props) {

    const project = await prisma.projects
    .findUnique({
        where: { id: id},
        include: { tech: true}, // Include the related tech data
    });

    const techs = project?.tech || []; // Access 'tech' data from the project

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