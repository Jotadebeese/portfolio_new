import Link from "next/link"

export default function Admin() {
    return (
        <section>
            <h1>Projects List</h1>
            <p>Admin page, to add the poor projects I have done.</p>
            <Link href={'/admin/new'}>
                <button>Add New</button>
            </Link> 
            <ul>
                <li>
                    <h2>Project title</h2>
                    <small>Status</small>
                    <Link href={'/admin/edit'}>
                        <button>Edit</button>
                    </Link> 
                </li>
            </ul>
        </section>
    )
}