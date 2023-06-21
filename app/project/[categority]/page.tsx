import LoadingUsers from "./loading";
import ProjectsCard from "@/components/ProjectsCard";
import { Suspense } from "react";


export default function ProjectsList(categority: any) {

    const category = categority.params.categority;

    return (
        <>
            {/* @ts-expect-error Server Component */}
            <Suspense fallback={<LoadingUsers />}>
                {/* @ts-expect-error Server Component */}
                <ProjectsCard categority={categority.params.categority} />
            </Suspense>
            
        </>
    );
}