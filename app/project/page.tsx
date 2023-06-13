import ProjectsCard from "./ProjectsCard";

interface Props {
    categority: string;
}

export default function ProjectsList() {


    return (
        <div className="projects-container">
                
                <div className="projects-list">
                    <div className="little-box">
                        <button >Full Stack</button>
                        <button >Machine Learning</button>
                        <button >Embedded Systems</button>
                    </div>
                    {/* @ts-expect-error Server Component */}
                    <ProjectsCard />
                </div>
      </div>
    );
}

export function changeCategority(n: number) {
    "use client";
    if (n==1) {
        return <p>Something here</p>
    }
}