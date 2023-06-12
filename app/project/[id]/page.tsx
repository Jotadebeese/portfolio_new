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
            {getTech(id)}
            <p>{description}</p>
            {content}
        </div>        
    )
}

interface Props {
    id: number;
  }
  
  interface Techs {
    id: number;
    icon: string;
    name: string;
  }
  
  export async function getTech(id: Props) {
    const project = await prisma.projects
    .findUnique({
        where: { id: id},
        include: { tech: true}, // Include the related tech data
    });
  
    const techs: Techs[] = project?.tech || []; // Access 'tech' data from the project
  
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