'use client';

import { useRouter } from "next/navigation";

export function AddNewForm() {
    const router = useRouter();

    const addNew = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const body = {
            title: formData.get('title'),
            description: formData.get('description'),
            categority: formData.get('categority'),
            createdAt: formData.get('createdAt'),
            github: formData.get('github'),
            live: formData.get('live'),
            published: formData.get('published')
        };

        const res = await fetch('/api/projectAdd', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        await res.json();
        router.push('/admin');
    };  

    return (
        <form className="form-container" onSubmit={addNew}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" placeholder='Add title' required />
            <label htmlFor="description">Description</label>
            <textarea
                name="description"
                cols={30}
                rows={30}
                placeholder='Add description'
                required
            ></textarea>
            <label htmlFor="github">GitHub Repository</label>
            <input type='text' name="github"  placeholder="GitHub Link" />
            <label htmlFor="live">Live</label>
            <input type='text' name='live' placeholder='Link of live project' />
            <label htmlFor="createdAt">Created At</label>
            <input type="date" name="createdAt" required />
            <label htmlFor="categority">Categority</label>
            <input type="text" name="categority" placeholder="Add categority" required />
            <label htmlFor="published">Published</label>
            <input type="checkbox" name="published" defaultValue="false" />

            <button type="submit">Save</button>
        </form>
    )
}