import DisplayImages from "@/components/DisplayImages";
import TechCard from "@/components/TechCard";
import { prisma } from "@/lib/prisma";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote/rsc";
import Link from "next/link";

interface Props {
    params: {
        id: string;
    };
}

export default async function Project({ params }: Props) {
    
    const project = await prisma.projects
    .findUnique({
        where: { id: parseInt(params.id)},
        include: { images: true, tech: true}, // Include the related tech data
    });

    const { title, description, github, live, content } = project ?? {};

    const createdat = project?.createdAt.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
      });
    
    return (
        <>
            <div className="fade-in project-container">
                <div className="item1">
                    <h1>{title}</h1>
                    <small>{createdat}</small>
                </div>
                <br /><br /><br />
                <div className="little-box">
                    {github && (
                        <Link target="_blank" className="btn" href={`${github}`}>GitHub</Link>
                    )}
                    {live && (
                        <Link target="_blank" className="btn" href={`${live}`}>See it Live</Link>
                    )}
                </div>
                <br />
                <TechCard project={project} />
                <br /><br /><br /><br />
                {/* @ts-expect-error Server Component */}
                <MDXRemote
                    source={`${content}`}
                />
            </div>      
            <div className="images-box fade-in">
                <DisplayImages project={project} />
            </div>
        </>  
    )
}