'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

export function EditForm({ project }: any) {
    const router = useRouter();
    const [isUploading, setIsUploading] = useState(false);

    const updatedProject = async (e: React.FormEvent<HTMLFormElement>) => {
        setIsUploading(true);
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);

        const body = {
            id: formData.get('id'),
            title: formData.get('title'),
            description: formData.get('description'),
            categority: formData.get('categority'),
            createdAt: formData.get('createdAt'),
            published: formData.get('published'),
            github: formData.get('github'),
            live: formData.get('live')
        };

        const res = await fetch('/api/projectEdit', {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        await res.json();
        router.push('/admin');
    };

    return (
        <>
            {isUploading?
                <div className="loader-container fade-in">
                    <img src="/temp.gif" />
                    <div className="loader"></div>
                    <p>Uploading data  .  .  .</p>
                </div>
                :
                <form className="form-container" onSubmit={updatedProject}>
                    <input type="text" name="id" defaultValue={project?.id} hidden />
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" defaultValue={project?.title ?? ''} />
                    <label htmlFor="description">Description</label>
                    <textarea
                        name="description"
                        cols={30}
                        rows={30}
                        defaultValue={project?.description ?? ''}
                    ></textarea>
                    <label htmlFor="github">GitHub Repository</label>
                    <input type='text' name="github"  defaultValue={project?.github} />
                    <label htmlFor="live">Live</label>
                    <input type='text' name='live' defaultValue={project?.live} />
                    <label htmlFor="createdAt">Created At</label>
                    <input type="date" name="createdAt" defaultValue={project?.createdAt.toISOString().substring(0, 10)} required />
                    <label htmlFor="categority">Categority</label>
                    <input type="text" name="categority" defaultValue={project?.categority ?? ''}/>
                    <label htmlFor="published">Published</label>
                    <input type="checkbox" name="published" defaultChecked={project?.published} />

                    <button type="submit">Save</button>
                </form>
            }
        </>
    )
}