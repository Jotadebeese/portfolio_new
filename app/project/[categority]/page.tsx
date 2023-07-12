import ProjectsCard from "@/components/ProjectsCard";
import Link from "next/link";

export default function ProjectsList(categority: any) {

    const category = categority.params.categority;

    return (
        <>  <p>Choose one:</p>
            <div className="little-box">
                <Link href={'/project/machine'} className={category === 'machine'? 'btn select' : 'btn'} >Machine Learning</Link>
                <Link href={'/project/full_stack'} className={category === 'full_stack'? 'btn select' : 'btn'} >Full Stack</Link>
                <Link href={'/project/embedded'} className={category === 'embedded'? 'btn select' : 'btn'} >Embedded Systems</Link>
            </div>
            {/* @ts-expect-error Server Component */}
            <ProjectsCard categority={categority.params.categority} />            
        </>
    );
}