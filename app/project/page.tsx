import ProjectsCard from "@/components/ProjectsCard";
import Link from "next/link";

interface Props {
    categority: string;
}

export default function ProjectsList() {


    return (
        <div className="projects-container fade-in">
                

                    <div className="little-box">
                        <Link href={'/project/full_stack'} className="btn select" >Full Stack</Link>
                        <Link href={'/project/machine'} className="btn" >Machine Learning</Link>
                        <Link href={'/project/ebedded'} className="btn" >Embedded Systems</Link>
                    </div>
                    {/* @ts-expect-error Server Component */}
                    <ProjectsCard categority={'full_stack'} />

      </div>
    );
}