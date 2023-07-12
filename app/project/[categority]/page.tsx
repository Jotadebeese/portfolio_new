import LoadingUsers from "./loading";
import ProjectsCard from "@/components/ProjectsCard";
import { Suspense } from "react";


export default function ProjectsList(categority: any) {

    return (
        <>
            {/* @ts-expect-error Server Component */}
            <ProjectsCard categority={categority} />            
        </>
    );
}