import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function () {

    const AllProjects = await prisma.projects.findMany({
        where: { categority: 'full_stack' },
        orderBy: { createdAt: 'desc'},
    });

    return (
        <div className="projects-container fade-in">
            <div className="projects-list">
                <h1>Projects List</h1>
                <p>Feel free to look at them.</p>
                <ul>
                    {AllProjects.map((project) => {
                        const createdAt = project.createdAt.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          });

                        return (
                          <li key={project.id}>
                                <div className="little-container-left">
                                    <span className="push-left">{createdAt}</span>
                                    <Link href={`/project/${project.id}`}>
                                        <h3>{project.title}</h3>
                                    </Link>
                                </div>

                                <p>{project.description}</p>
                                {getTech(project.id)}
                          </li>
                      );
                  })}
              </ul>
          </div>
      </div>
    );
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