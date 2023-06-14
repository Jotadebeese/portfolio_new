import ProjectsCard from "@/components/ProjectsCard";
import Link from "next/link";


export default function ProjectsList(categority: any) {

    const category = categority.params.categority;

    return (
        <div className="projects-container">
                <div className="projects-list">
                    <h2>Project List</h2>
                    <p>Feel free to look at them.</p>
                    <div className="little-box">
                        <Link href={'/project/full_stack'} className={category === 'full_stack'? 'btn select' : 'btn'} >Full Stack</Link>
                        <Link href={'/project/machine'} className={category === 'machine'? 'btn select' : 'btn'} >Machine Learning</Link>
                        <Link href={'/project/embedded'} className={category === 'embedded'? 'btn select' : 'btn'} >Embedded Systems</Link>
                    </div>
                    {/* @ts-expect-error Server Component */}
                    <ProjectsCard categority={categority.params.categority} />
                </div>
      </div>
    );
}