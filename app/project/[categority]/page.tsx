import ProjectsCard from "@/components/ProjectsCard";


export default function ProjectsList(categority: any) {

    const category = categority.params.categority;

    return (
        <>
            {/* @ts-expect-error Server Component */}
            <ProjectsCard categority={categority.params.categority} />            
        </>
    );
}