import { prisma } from "@/lib/prisma";
  
  interface Techs {
    id: number;
    icon: string;
    name: string;
  }

export default async function TechCard({ project }: any) {
    const getproject = await prisma.projects
    .findUnique({
        where: { id: project.id},
        include: { tech: true}, // Include the related tech data
    });
  
    const techs: Techs[] = getproject?.tech || []; // Access 'tech' data from the project
  
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