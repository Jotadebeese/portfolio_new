  interface Techs {
    id: number;
    icon: string;
    name: string;
  }

export default function TechCard({ project }: any) {
  
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