import { prisma } from "@/lib/prisma";

interface Props {
    id: number;
    title: string | null;
}

export default async function Tech({ id }: Props) {

    const project = await prisma.projects
    .findUnique({
        where: { id: id},
        include: { tech: true}, // Include the related tech data
    });

    const techs = project?.tech || []; // Access 'tech' data from the project

    return (
        <>
            {techs.map((tech) => {
                return (
                    <div key={tech.id}>
                        <p>{tech.name}</p>
                        <p>{tech.icon}</p>
                    </div>
                );
            })}
        </>
    );
}