import Link from "next/link"
import { getServerSession } from "next-auth"
import { redirect } from 'next/navigation'


export default async function Admin() {

   /*  const session = await getServerSession();

    if (!session) {
        redirect('/api/auth/signin');
        // return <p>You must be signed in...</p>
    } */

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