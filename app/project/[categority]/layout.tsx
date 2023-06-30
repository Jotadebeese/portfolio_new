"use client"
import { useParams } from "next/navigation"
import Link from "next/link";

export default function ProjectCategoryLayaout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    const params = useParams();
    const category = params.categority;
    return (
        <div className="projects-container">
            <p>Divided in three categories:</p>
            <div className="little-box">
                <Link href={'/project/machine'} className={category === 'machine'? 'btn select' : 'btn'} >Machine Learning</Link>
                <Link href={'/project/full_stack'} className={category === 'full_stack'? 'btn select' : 'btn'} >Full Stack</Link>
                <Link href={'/project/embedded'} className={category === 'embedded'? 'btn select' : 'btn'} >Embedded Systems</Link>
            </div>
            {children}
        </div>
    )
  }