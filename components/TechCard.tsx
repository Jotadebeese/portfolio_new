import { prisma } from "@/lib/prisma";

interface Props {
    id: string;
    title: string | null;
}

export default async function Tech({id, title }: Props) {

    const techs = await prisma.projects
    .findUnique({
        where: { id: id},
    })
    .tech()

    return (
        <ul>
            <p>Here</p>
            {tech.map((tech) => {
                <li>
                    <p>here</p>
                    <p>{tech.title}</p>
                    <p>{tech.icon}</p>
                </li>
            })}
        </ul>
    )
}