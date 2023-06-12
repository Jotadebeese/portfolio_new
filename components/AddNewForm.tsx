'use client';

export function AddNewForm() {

    const addNew = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const body = {
            title: formData.get('title'),
            description: formData.get('description'),
            content: formData.get('content'),
            categority: formData.get('categority'),
            createdAt: formData.get('createdAt'),
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
    };

    return (
        <form className="form-container" onSubmit={addNew}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" placeholder='Add title' />
            <label htmlFor="description">Description</label>
            <textarea
                name="description"
                cols={30}
                rows={30}
                placeholder='Add description'
            ></textarea>
            <label htmlFor="content">Content</label>
            <textarea
                name="content"
                cols={30}
                rows={50}
                placeholder='Add Content'
            ></textarea>
            <label htmlFor="createdAt">Created At</label>
            <input type="date" name="createdAt" />
            <label htmlFor="categority">Categority</label>
            <input type="text" name="categority" placeholder="Add categority"/>
            <label htmlFor="published">Published</label>
            <input type="checkbox" name="published" value="true" />

            <button type="submit">Save</button>
        </form>
    )
}