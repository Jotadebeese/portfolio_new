'use client';

import { redirect } from 'next/navigation';

export function EditForm({ project }: any) {

    const updatedProject = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const body = {
            id: formData.get('id'),
            title: formData.get('title'),
            description: formData.get('description'),
            content: formData.get('content'),
            categority: formData.get('categority'),
            createdAt: formData.get('createdAt'),
            published: formData.get('published')
        };

        const res = await fetch('/api/projectEdit', {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        await res.json();
    };

    return (
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
            <label htmlFor="content">Content</label>
            <textarea
                name="content"
                cols={30}
                rows={50}
                defaultValue={project?.content ?? ''}
            ></textarea>
            <label htmlFor="createdAt">Created At</label>
            <input type="date" name="createdAt" required />
            <label htmlFor="categority">Categority</label>
            <input type="text" name="categority" defaultValue={project?.categority ?? ''}/>
            <label htmlFor="published">Published</label>
            <input type="checkbox" name="published" defaultValue={project?.published} />

            <button type="submit">Save</button>
        </form>
    )
}