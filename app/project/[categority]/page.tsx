import LoadingUsers from "@/app/loading";
import ProjectsCard from "@/components/ProjectsCard";
import Link from "next/link";
import { Suspense } from "react";


export default function ProjectsList(categority: any) {

    const category = categority.params.categority;

    return (
        <div className="projects-container">
            <h2>Projects</h2>
            <p>Divided in three categories:</p>
            <div className="little-box">
                <Link href={'/project/machine'} className={category === 'machine'? 'btn select' : 'btn'} >Machine Learning</Link>
                <Link href={'/project/full_stack'} className={category === 'full_stack'? 'btn select' : 'btn'} >Full Stack</Link>
                <Link href={'/project/embedded'} className={category === 'embedded'? 'btn select' : 'btn'} >Embedded Systems</Link>
            </div>
            {/* @ts-expect-error Server Component */}
            <Suspense fallback={<LoadingUsers />}>
                {/* @ts-expect-error Server Component */}
                <ProjectsCard categority={categority.params.categority} />
            </Suspense>
            
        </div>
    );
}